import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
    children,
    scrollContainerRef,
    enableBlur = true,
    baseOpacity = 0.1,
    baseRotation = 3,
    blurStrength = 4,
    containerClassName = '',
    textClassName = '',
    rotationEnd = 'bottom bottom',
    font_size = "text-[clamp(1rem,2vw,2rem)]",
    wordAnimationEnd = 'bottom bottom'
}) => {
    const containerRef = useRef(null);

    const splitText = useMemo(() => {
        const text = typeof children === 'string' ? children : '';
        return text.split(/(\s+)/).map((word, index) => {
            if (word.match(/^\s+$/)) return word;
            return (
                <span className="inline-block word" key={index}>
                    {word}
                </span>
            );
        });
    }, [children]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        // ✅ Wait for Locomotive to initialize
        const timer = setTimeout(() => {
            const scroller = scrollContainerRef?.current || window;

            // ✅ Clear previous ScrollTriggers
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.trigger === el) trigger.kill();
            });

            // Rotation animation
            gsap.fromTo(
                el,
                { transformOrigin: '0% 50%', rotate: baseRotation },
                {
                    ease: 'none',
                    rotate: 0,
                    scrollTrigger: {
                        trigger: el,
                        scroller,
                        start: 'top bottom',
                        end: rotationEnd,
                        scrub: true,
                        invalidateOnRefresh: true
                    }
                }
            );

            const wordElements = el.querySelectorAll('.word');

            // Opacity animation
            gsap.fromTo(
                wordElements,
                { opacity: baseOpacity, willChange: 'opacity' },
                {
                    ease: 'none',
                    opacity: 1,
                    stagger: 0.05,
                    scrollTrigger: {
                        trigger: el,
                        scroller,
                        start: 'top bottom-=20%',
                        end: wordAnimationEnd,
                        scrub: true,
                        invalidateOnRefresh: true
                    }
                }
            );

            // Blur animation
            if (enableBlur) {
                gsap.fromTo(
                    wordElements,
                    { filter: `blur(${blurStrength}px)` },
                    {
                        ease: 'none',
                        filter: 'blur(0px)',
                        stagger: 0.05,
                        scrollTrigger: {
                            trigger: el,
                            scroller,
                            start: 'top bottom-=20%',
                            end: wordAnimationEnd,
                            scrub: true,
                            invalidateOnRefresh: true
                        }
                    }
                );
            }
        }, 100);

        return () => {
            clearTimeout(timer);
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.trigger === el) trigger.kill();
            });
        };
    }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

    return (
        <h2 ref={containerRef} className={`${containerClassName}`}>
            <p className={`${font_size} leading-[1.5] font-semibold ${textClassName}`}>{splitText}</p>
        </h2>
    );
};

export default ScrollReveal;
