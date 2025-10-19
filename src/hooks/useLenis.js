// useLenis.js
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export function useLenis(options = {}) {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.09,             // lower = smoother
            wheelMultiplier: 0.5,   // slower, less jitter
            touchMultiplier: 1.1,
            smoothTouch: false,
            syncTouch: true
        });
        let rafId;
        const raf = (t) => { lenis.raf(t); rafId = requestAnimationFrame(raf); };
        rafId = requestAnimationFrame(raf);
        return () => cancelAnimationFrame(rafId);
    }, [options]);
}
