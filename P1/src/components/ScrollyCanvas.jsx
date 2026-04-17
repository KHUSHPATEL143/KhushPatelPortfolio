import { useCallback, useEffect, useRef } from 'react';
import { useMotionValueEvent, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Overlay from './Overlay';

const FACE_SCALE = 0.52;
const FACE_SHIFT_X = 0.18;
const FACE_SHIFT_Y = 0.02;
const VIDEO_MASK =
    'radial-gradient(ellipse 38% 66% at 78% 52%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 38%, rgba(0,0,0,0.94) 52%, rgba(0,0,0,0.58) 66%, rgba(0,0,0,0.18) 78%, transparent 88%)';
const imageModules = import.meta.glob('../assets/sequence/*.png', {
    eager: true,
    query: '?url',
    import: 'default',
});
const framePaths = Object.keys(imageModules)
    .sort((a, b) => {
        const matchA = a.match(/frame_(\d+)/);
        const matchB = b.match(/frame_(\d+)/);
        const numA = matchA ? parseInt(matchA[1], 10) : 0;
        const numB = matchB ? parseInt(matchB[1], 10) : 0;
        return numA - numB;
    })
    .map((path) => imageModules[path]);

const ScrollyCanvas = () => {
    const canvasRef = useRef(null);
    const imagesRef = useRef([]);
    const currentIndexRef = useRef(0);
    const shouldReduceMotion = useReducedMotion();

    const renderFrame = useCallback((index) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let img = imagesRef.current[index];

        if (!img) {
            for (let i = index - 1; i >= 0; i--) {
                if (imagesRef.current[i]) {
                    img = imagesRef.current[i];
                    break;
                }
            }
        }

        if (!img) return;

        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const imgRatio = img.width / img.height;
        const canvasRatio = canvasWidth / canvasHeight;

        let drawWidth;
        let drawHeight;
        let offsetX;
        let offsetY;

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

        drawWidth *= FACE_SCALE;
        drawHeight *= FACE_SCALE;
        offsetX = (canvasWidth - drawWidth) / 2 + canvasWidth * FACE_SHIFT_X;
        offsetY = (canvasHeight - drawHeight) / 2 + canvasHeight * FACE_SHIFT_Y;

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }, []);

    useEffect(() => {
        if (framePaths.length === 0) return undefined;

        imagesRef.current = new Array(framePaths.length).fill(null);
        const timeoutIds = [];

        const loadImage = (index) => {
            const img = new Image();
            img.src = framePaths[index];
            img.onload = () => {
                imagesRef.current[index] = img;
                if (index === 0) {
                    renderFrame(0);
                }
            };
            img.onerror = () => {
                console.error(`Failed to load frame ${index}`);
            };
        };

        loadImage(0);

        if (shouldReduceMotion) {
            return undefined;
        }

        for (let index = 1; index < framePaths.length; index++) {
            const timeoutId = window.setTimeout(() => loadImage(index), 0);
            timeoutIds.push(timeoutId);
        }

        return () => {
            timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
        };
    }, [renderFrame, shouldReduceMotion]);

    const { scrollYProgress } = useScroll();
    const renderIndex = useTransform(scrollYProgress, [0, 1], [0, framePaths.length - 1]);

    useMotionValueEvent(renderIndex, "change", (latest) => {
        const nextIndex = Math.round(latest);
        currentIndexRef.current = nextIndex;

        if (!shouldReduceMotion) {
            requestAnimationFrame(() => renderFrame(nextIndex));
        }
    });

    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                renderFrame(currentIndexRef.current);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [renderFrame]);

    return (
        <section id="hero" className="relative h-[500vh] w-full bg-background">
            {/* Semantic Anchor Markers for Navbar Routing */}
            <div id="about" className="absolute top-[120vh]" /> {/* approx 0.24 of 500vh */}
            <div id="journey" className="absolute top-[250vh]" /> {/* approx 0.5 of 500vh */}
            <div id="stack" className="absolute top-[400vh]" /> {/* approx 0.8 of 500vh */}

            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            'radial-gradient(circle at 20% 35%, rgba(34, 211, 238, 0.16), transparent 32%), radial-gradient(circle at 76% 52%, rgba(244, 63, 94, 0.12), transparent 26%), linear-gradient(135deg, #060816 0%, #0a0a0f 52%, #111827 100%)',
                    }}
                />
                <canvas
                    ref={canvasRef}
                    className="block h-full w-full object-cover opacity-95"
                    style={{
                        maskImage: shouldReduceMotion ? 'none' : VIDEO_MASK,
                        WebkitMaskImage: shouldReduceMotion ? 'none' : VIDEO_MASK,
                    }}
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-[24%] bg-gradient-to-l from-[#0b0d18] via-[#0b0d18]/88 to-transparent" />
                <div className="pointer-events-none absolute left-0 right-0 top-0 h-[16%] bg-gradient-to-b from-[#070a14] via-[#070a14]/86 to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 h-[18%] w-[46%] bg-gradient-to-b from-[#070a14]/96 via-[#070a14]/52 to-transparent blur-xl" />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[22%] bg-gradient-to-t from-[#090b15] via-[#090b15]/92 to-transparent" />
                <div className="pointer-events-none absolute bottom-0 right-0 h-[28%] w-[58%] bg-gradient-to-t from-[#090b15] via-[#090b15]/98 to-transparent" />
                <div className="pointer-events-none absolute bottom-0 left-[10%] h-[16%] w-[56%] bg-gradient-to-t from-[#090b15]/88 via-[#090b15]/48 to-transparent blur-2xl" />
                <div className="pointer-events-none absolute bottom-0 right-0 h-[30%] w-[54%] rounded-tl-[10rem] bg-[radial-gradient(circle_at_68%_14%,rgba(12,16,32,0)_0%,rgba(9,11,21,0.16)_36%,rgba(9,11,21,0.86)_78%,rgba(9,11,21,1)_100%)]" />
                <Overlay />
            </div>
        </section>
    );
};

export default ScrollyCanvas;
