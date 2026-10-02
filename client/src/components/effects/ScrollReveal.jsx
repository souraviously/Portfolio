import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  wordAnimationEnd = "bottom bottom-=50%",
}) => {
  const containerRef = useRef(null);

  // ✅ split text but keep existing JSX (like your <span className="text-coffee">)
  const splitChildren = useMemo(() => {
    const processNode = (node) => {
      if (typeof node === "string") {
        return node.split(/(\s+)/).map((word, i) =>
          word.match(/^\s+$/) ? word : (
            <span className="inline-block word" key={i}>
              {word}
            </span>
          )
        );
      }
      return node; // keep JSX elements intact
    };

    return Array.isArray(children)
      ? children.map((child, i) => <span key={i}>{processNode(child)}</span>)
      : processNode(children);
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef?.current ? scrollContainerRef.current : window;

    const wordElements = el.querySelectorAll(".word");

    gsap.fromTo(
      wordElements,
      { color: "#B3B2AD" },
      {
        color: "#212121",
        ease: "none",
        stagger: 0.8,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom-=40%",
          end: wordAnimationEnd,
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [scrollContainerRef, wordAnimationEnd]);

  return (
    <h2 ref={containerRef} className={containerClassName}>
      {splitChildren}
    </h2>
  );
};

export default ScrollReveal;
