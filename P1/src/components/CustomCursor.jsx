import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [bounds, setBounds] = useState(null);
    const targetRef = useRef(null);

    // Track pure mouse position
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Spring for the dot
    const dotX = useSpring(mouseX, { damping: 28, stiffness: 350, mass: 0.4 });
    const dotY = useSpring(mouseY, { damping: 28, stiffness: 350, mass: 0.4 });

    useEffect(() => {
        const moveCursor = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            
            // If hovering over something, keep updating its bounds dynamically 
            // in case the user scrolls but the mouse stays still.
            if (targetRef.current && bounds) {
                const rect = targetRef.current.getBoundingClientRect();
                setBounds(prev => ({
                    ...prev,
                    left: rect.left,
                    top: rect.top
                }));
            }
        };

        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, [mouseX, mouseY, bounds]);

    useEffect(() => {
        const handleMouseOver = (e) => {
            const interactiveEl = e.target.closest('a, button, [data-cursor="bubble"]');
            if (interactiveEl) {
                targetRef.current = interactiveEl;
                const rect = interactiveEl.getBoundingClientRect();
                const style = window.getComputedStyle(interactiveEl);
                setBounds({
                    left: rect.left,
                    top: rect.top,
                    width: rect.width,
                    height: rect.height,
                    borderRadius: style.borderRadius
                });
            } else {
                targetRef.current = null;
                setBounds(null);
            }
        };

        const handleScroll = () => {
            if (targetRef.current) {
                const rect = targetRef.current.getBoundingClientRect();
                setBounds(prev => prev ? { ...prev, left: rect.left, top: rect.top } : null);
            }
        };

        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="pointer-events-none hidden md:block">
            {/* The Background Highlight Box */}
            <motion.div
                className="fixed top-0 left-0 z-[9999] border border-white/0"
                initial={false}
                animate={
                    bounds
                    ? {
                        opacity: 1,
                        x: bounds.left,
                        y: bounds.top,
                        width: bounds.width,
                        height: bounds.height,
                        borderRadius: bounds.borderRadius || '16px',
                        backgroundColor: 'rgba(255,255,255,0.06)',
                        borderColor: 'rgba(255,255,255,0.15)',
                      }
                    : {
                        opacity: 0,
                        x: mouseX.get() || 0,
                        y: mouseY.get() || 0,
                        width: 0,
                        height: 0,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255,255,255,0)',
                        borderColor: 'rgba(255,255,255,0)'
                      }
                }
                transition={{ type: "tween", ease: "circOut", duration: 0.15 }}
            />
            
            {/* The Tiny Mouse Tracker Dot */}
            <motion.div
                className="fixed top-0 left-0 z-[9999] w-3 h-3 bg-white/80 rounded-full"
                style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
                animate={{ opacity: bounds ? 0 : 1, scale: bounds ? 0 : 1 }}
                transition={{ duration: 0.15 }}
            />
        </div>
    );
};

export default CustomCursor;
