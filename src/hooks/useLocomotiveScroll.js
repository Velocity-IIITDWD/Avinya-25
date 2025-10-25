// useLocomotiveScroll.js
import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useLocomotiveScroll() {
    const scrollRef = useRef(null);
    const locomotiveRef = useRef(null);

    useEffect(() => {
        if (!scrollRef.current) return;

        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,

            // 🧈 MAXIMUM SMOOTHNESS SETTINGS
            lerp: 0.25,                    // Lower = smoother (was 0.03)
            multiplier: 0.75,               // Slower scroll (was 0.6)
            touchMultiplier: 2,            // Smooth touch on desktop
            firefoxMultiplier: 50,         // Firefox optimization

            // Smooth wheel scrolling
            smoothWheel: true,

            // Mobile optimization
            smartphone: {
                smooth: false,
                multiplier: 1
            },
            tablet: {
                smooth: false,
                multiplier: 1
            },

            // Additional smoothness options
            direction: 'vertical',
            gestureDirection: 'vertical',
            reloadOnContextChange: true,
            resetNativeScroll: true
        });

        locomotiveRef.current = scroll;

        // Sync with GSAP ScrollTrigger
        scroll.on('scroll', ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(scrollRef.current, {
            scrollTop(value) {
                return arguments.length
                    ? scroll.scrollTo(value, { duration: 0, disableLerp: true })
                    : scroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight
                };
            },
            pinType: scrollRef.current.style.transform ? 'transform' : 'fixed'
        });

        ScrollTrigger.addEventListener('refresh', () => scroll.update());
        ScrollTrigger.refresh();

        return () => {
            scroll.off('scroll', ScrollTrigger.update);
            ScrollTrigger.removeEventListener('refresh', () => scroll.update());
            scroll.destroy();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return { scrollRef, locomotiveRef };
}
