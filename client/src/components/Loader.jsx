import React, { useEffect, useState } from "react";
import gsap from "gsap";
import SplitType from "split-type";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const html = document.querySelector("html");
    html?.classList.add("scroll-hide");

    const timers = [];
    const loaderText = document.querySelector(".loader-title");
    const splitTitle = loaderText ? new SplitType(loaderText, { types: "chars" }) : null;

    gsap.set(".loader-shell", { y: 28, opacity: 0 });
    gsap.set(".loader-meta", { y: 16, opacity: 0 });

    gsap.timeline()
      .to(".loader-shell", {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
      })
      .to(".loader-meta", {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
      }, "-=0.45");

    if (splitTitle?.chars) {
      gsap.from(splitTitle.chars, {
        yPercent: 110,
        opacity: 0,
        rotateX: -80,
        duration: 0.75,
        stagger: 0.035,
        ease: "back.out(1.8)",
        delay: 0.25,
      });
    }

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 1;
      setProgress(currentProgress);

      if (currentProgress === 100) {
        clearInterval(interval);

        timers.push(setTimeout(() => {
          gsap.timeline()
            .to(".loader-orbit", {
              scale: 1.2,
              opacity: 0,
              duration: 0.75,
              ease: "power3.inOut",
            })
            .to(".loader-shell", {
              y: -34,
              opacity: 0,
              filter: "blur(12px)",
              duration: 0.8,
              ease: "power3.inOut",
            }, "-=0.55")
            .to(".loader-reveal", {
              yPercent: -100,
              duration: 1.25,
              ease: "power4.inOut",
            }, "-=0.2")
            .to(".loader", {
              yPercent: -100,
              duration: 0.9,
              ease: "power4.inOut",
              onComplete: () => html?.classList.remove("scroll-hide"),
            }, "-=0.55");
        }, 520));
      }
    }, 18);

    return () => {
      clearInterval(interval);
      timers.forEach(clearTimeout);
      splitTitle?.revert();
      html?.classList.remove("scroll-hide");
    };
  }, []);

  return (
    <div className="loader">
      <div className="loader-bg"></div>
      <div className="loader-reveal"></div>

      <div className="loader-shell">
        <div className="loader-orbit" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="loader-brand">
          <p className="font-poppins text-xs font-bold uppercase text-coffee">Portfolio loading</p>
          <h3 className="loader-title">Sourav Soni</h3>
        </div>

        <div className="loader-meta">
          <div className="loader-progress">
            <span style={{ width: `${progress}%` }}></span>
          </div>
          <div className="loader-status">
            <span>Preparing interface</span>
            <strong>{String(progress).padStart(2, "0")}%</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
