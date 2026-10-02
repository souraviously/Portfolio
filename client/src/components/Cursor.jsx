import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const bigRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const big = bigRef.current;
    const dot = dotRef.current;

    if (!big || !dot || typeof window === "undefined") return undefined;

    const supportsFinePointer =
      window.matchMedia && window.matchMedia("(pointer: fine)").matches;

    if (!supportsFinePointer) {
      document.body.style.cursor = "";
      return undefined;
    }

    const hoverSelector = ".hover-this";
    const brownSelector = ".hover-brown";
    const interactiveSelector =
      "a, button, [role='button'], input, textarea, select, summary";

    let isVisible = true;
    let hideTimer = null;

    const setVisible = (visible) => {
      isVisible = visible;
      big.style.opacity = visible ? "1" : "0";
      dot.style.opacity = visible ? "1" : "0";
      document.body.style.cursor = visible ? "none" : "";
    };

    const moveCursor = (e) => {
      if (!isVisible) return;

      gsap.to(dot, {
        duration: 0.08,
        x: e.clientX,
        y: e.clientY,
        ease: "power2.out",
      });

      gsap.to(big, {
        duration: 0.22,
        x: e.clientX,
        y: e.clientY,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = () => {
      gsap.to(big, {
        duration: 0.2,
        scale: 2,
        ease: "power2.out",
        mixBlendMode: "difference",
        background: "white",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(big, {
        duration: 0.2,
        scale: 1,
        ease: "power2.out",
        mixBlendMode: "normal",
        background: "transparent",
      });
    };

    const handleBrownEnter = () => {
      gsap.to(big, {
        duration: 0.2,
        scale: 1.5,
        ease: "power2.out",
        borderColor: "#BF4A1A",
        background: "transparent",
      });
    };

    const handleBrownLeave = () => {
      gsap.to(big, {
        duration: 0.2,
        scale: 1,
        ease: "power2.out",
        borderColor: "#adadace3",
        background: "transparent",
      });
    };

    const handleMouseDown = () => {
      gsap.to(big, { scale: 0.72, duration: 0.12, ease: "power2.out" });
      gsap.to(dot, { scale: 0.5, duration: 0.08, ease: "power2.out" });
    };

    const handleMouseUp = () => {
      gsap.to(big, { scale: 1, duration: 0.18, ease: "power2.out" });
      gsap.to(dot, { scale: 1, duration: 0.12, ease: "power2.out" });
    };

    const handlePointerOver = (e) => {
      if (e.target?.closest?.(hoverSelector)) handleMouseEnter();
      if (e.target?.closest?.(brownSelector)) handleBrownEnter();
    };

    const handlePointerOut = (e) => {
      if (e.target?.closest?.(hoverSelector)) handleMouseLeave();
      if (e.target?.closest?.(brownSelector)) handleBrownLeave();
    };

    const handleFocusIn = (e) => {
      if (e.target?.closest?.(interactiveSelector)) setVisible(true);
    };

    const restoreAfterBlur = () => {
      setVisible(false);
      clearTimeout(hideTimer);
      hideTimer = window.setTimeout(() => setVisible(true), 220);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("pointerover", handlePointerOver);
    window.addEventListener("pointerout", handlePointerOut);
    window.addEventListener("focusin", handleFocusIn);
    window.addEventListener("blur", restoreAfterBlur);

    setVisible(true);

    return () => {
      clearTimeout(hideTimer);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("focusin", handleFocusIn);
      window.removeEventListener("blur", restoreAfterBlur);
      document.body.style.cursor = "";
      big.style.opacity = "";
      dot.style.opacity = "";
    };
  }, []);

  return (
    <>
      <div
        ref={bigRef}
        aria-hidden="true"
        className="fixed md:inline-block hidden pointer-events-none rounded-full bg-transparent border border-[#222831a8] z-[9999] will-change-transform transition-transform duration-200 ease-out"
        style={{
          width: 40,
          height: 40,
          transform: "translate(-50%, -50%) scale(1)",
          opacity: 1,
        }}
      />

      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed md:inline-block hidden pointer-events-none z-[10000] rounded-full bg-[#BF4A1A] will-change-transform"
        style={{
          width: 7,
          height: 7,
          transform: "translate(-50%, -50%)",
          opacity: 1,
        }}
      />
    </>
  );
};

export default Cursor;
