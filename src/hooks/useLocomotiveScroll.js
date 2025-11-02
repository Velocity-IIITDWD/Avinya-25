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

    // 🧹 Clean up any old scroll container (important on refresh)
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.15,
      multiplier: 1,
      smoothWheel: true,
      resetNativeScroll: true,
      reloadOnContextChange: true,
      smartphone: { smooth: false },
      tablet: { smooth: false },
    });
    console.log('Locomotive initialized');

    locomotiveRef.current = scroll;

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
          height: window.innerHeight,
        };
      },
      pinType: scrollRef.current.style.transform ? 'transform' : 'fixed',
    });

    ScrollTrigger.addEventListener('refresh', () => scroll.update());
    ScrollTrigger.refresh();

    // Fix refresh “stuck” issue by forcing full reset
    setTimeout(() => {
      scroll.scrollTo(0, { duration: 0, disableLerp: true });
      scroll.update();
    }, 300);

    // Double-check again once layout fully paints
    window.addEventListener('load', () => {
      scroll.scrollTo(0, { duration: 0, disableLerp: true });
      scroll.update();
    });

    const handleResize = () => scroll.update();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      scroll.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return { scrollRef, locomotiveRef };
}
