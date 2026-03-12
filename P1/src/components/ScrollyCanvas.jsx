import { useEffect, useRef, useState, useMemo } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Overlay from './Overlay';

const ScrollyCanvas = () => {
    const canvasRef = useRef(null);
    // Use a ref for images to avoid re-rendering 71 times
    const imagesRef = useRef([]);
    const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);

    // Load image paths using Vite's glob import
    // eager: true is fine for 71 small files, getting the URLs synchronously
    const imageModules = import.meta.glob('../assets/sequence/*.png', { eager: true, as: 'url' });

    // Sort keys to ensure frames are in order (frame_00, frame_01, etc.)
    const framePaths = useMemo(() => {
        return Object.keys(imageModules)
            .sort((a, b) => {
                const matchA = a.match(/frame_(\d+)/);
                const matchB = b.match(/frame_(\d+)/);
                const numA = matchA ? parseInt(matchA[1]) : 0;
                const numB = matchB ? parseInt(matchB[1]) : 0;
                return numA - numB;
            })
            .map(path => imageModules[path]);
    }, []);

    // Initial render of first frame
    useEffect(() => {
        if (framePaths.length === 0) return;

        // Initialize the ref array with correct length
        imagesRef.current = new Array(framePaths.length).fill(null);

        // Load image function
        const loadImage = (index) => {
            const img = new Image();
            img.src = framePaths[index];
            img.onload = () => {
                imagesRef.current[index] = img;
                if (index === 0) {
                    setFirstFrameLoaded(true);
                    renderFrame(0); // Force render first frame immediately
                }
            };
            img.onerror = () => {
                console.error(`Failed to load frame ${index}`);
                // Optional: set a placeholder or valid previous frame to avoid null gaps if critical
            };
        };

        // Priority 1: Load Frame 0 immediately
        loadImage(0);

        // Priority 2: Load the rest in background
        for (let i = 1; i < framePaths.length; i++) {
            // Small delay to let the main thread breathe if needed, though browsers handle img load async well
            setTimeout(() => loadImage(i), 0);
        }
    }, [framePaths]);

    // Scroll logic
    const { scrollYProgress } = useScroll();

    // Transform scroll (0-1) to frame index (0 to length-1)
    const renderIndex = useTransform(scrollYProgress, [0, 1], [0, framePaths.length - 1]);

    // Draw to canvas
    const renderFrame = (index) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        // Progressive Loading Logic:
        // Try to get the exact frame. If not ready, find the nearest PREVIOUS loaded frame.
        let img = imagesRef.current[index];

        if (!img) {
            for (let i = index - 1; i >= 0; i--) {
                if (imagesRef.current[i]) {
                    img = imagesRef.current[i];
                    break;
                }
            }
        }

        // If still no image (e.g. searching forward if we are at start and 0 isn't loaded - unlikely due to priority), 
        // try searching forward just in case? No, backward is safer for continuity. 
        // Logic covers standard case. If 0 isn't loaded, we just wait.

        if (!img) return;

        // Responsive Object-Fit: Cover Logic
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const imgRatio = img.width / img.height;
        const canvasRatio = canvasWidth / canvasHeight;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
            drawWidth = canvasWidth;
            drawHeight = canvasWidth / imgRatio;
            offsetX = 0;
            offsetY = (canvasHeight - drawHeight) / 2;
        } else {
            drawWidth = canvasHeight * imgRatio;
            drawHeight = canvasHeight;
            offsetX = (canvasWidth - drawWidth) / 2;
            offsetY = 0;
        }

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    useMotionValueEvent(renderIndex, "change", (latest) => {
        requestAnimationFrame(() => renderFrame(Math.round(latest)));
    });

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                // Re-render current frame
                const currentIndex = Math.round(renderIndex.get() || 0);
                renderFrame(currentIndex);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="h-[500vh] w-full relative bg-background">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="block w-full h-full object-cover"
                />
                <Overlay />
            </div>
        </div>
    );
};

export default ScrollyCanvas;
