import React, { useEffect, useRef } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import reviewImg1 from '../../assets/images/reviewimg1.png'
import reviewImg2 from '../../assets/images/reviewPfp2.png'
import reviewImg3 from '../../assets/images/reviewImg3.png'
import reviewImg4 from '../../assets/images/reviewImg4.jpg'

gsap.registerPlugin(ScrollTrigger);

const MyReview = () => {
  const outerRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const outer = outerRef.current;
    const cards = cardsRef.current;
    if (!outer || !cards) return;

    // total width of cards
    const totalWidth = cards.scrollWidth;
    const viewportW = window.innerWidth;
    const maxTranslate = totalWidth - viewportW;

    // give outer enough height to allow scroll
    outer.style.height = `${maxTranslate + window.innerHeight}px`;

    // GSAP horizontal scroll
    gsap.to(cards, {
      x: () => -maxTranslate,
      ease: "none",
      scrollTrigger: {
        trigger: outer,
        start: "top top",
        end: () => `+=${maxTranslate}`,
        scrub: true,
        invalidateOnRefresh: true,
        pin: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
      gsap.killTweensOf(cards);
    };
  }, []);

  return (
    <>
      <div id="ScrollCardsHorizontal" ref={outerRef} className="cards-outer relative overflow-hidden">
        <div ref={cardsRef} className="cards flex lg:px-0 px-[16px]">
          {/* ----------------Card 1------------------- */}
          <div className="card min-w-[80vw] sm:min-w-[500px] mr-8">
            <div className="card__inner">
              <div className="card__content">
                <div className="flex items-center justify-between mb-10">
                  <div id='Quote' className='bg-Primary w-[52px] h-[52px] rounded-[6px] text-white flex items-center justify-center text-2xl'>
                    <FaQuoteLeft />
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-brand font-poppins font-medium">Reviews</p>
                    <div className="flex items-center gap-1 text-[#FBBF24]">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                  </div>
                </div>
                <p className="card__description">
                  A natural problem-solver. “Sourav consistently delivered clean, scalable code and brought fresh ideas to the table. His ability to break down complex problems made him an invaluable part of our development team.”
                </p>
                <div className="mt-10 flex items-center gap-4">
                  <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                    <img src={reviewImg1} alt="review profile" />
                  </div>
                  <div>
                    <h2 className="text-brand font-poppins font-semibold text-md">John Smith</h2>
                    <p className="text-[#e5e3dc9d] font-poppins font-semibold text-sm mt-1">Agency Client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ----------------Card 2------------------- */}
          <div className="card min-w-[80vw] sm:min-w-[500px] mr-8">
            <div className="card__inner">
              <div className="card__content">
                <div className="flex items-center justify-between mb-10">
                  <div id='Quote' className='bg-Primary w-[52px] h-[52px] rounded-[6px] text-white flex items-center justify-center text-2xl'>
                    <FaQuoteLeft />
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-brand font-poppins font-medium">Reviews</p>
                    <div className="flex items-center gap-1 text-[#FBBF24]">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                  </div>
                </div>
                <p className="card__description">
                  A fast learner. “Quickly adapted to new tools and frameworks, showing impressive growth and keeping projects modern and efficient. That adaptability made the development process future-proof.”
                </p>
                <div className="mt-10 flex items-center gap-4">
                  <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                    <img src={reviewImg2} alt="review profile" />
                  </div>
                  <div>
                    <h2 className="text-brand font-poppins font-semibold text-md">Jesscia Aiba</h2>
                    <p className="text-[#e5e3dc9d] font-poppins font-semibold text-sm mt-1">Ui / UX Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ----------------Card 3------------------- */}
          <div className="card min-w-[80vw] sm:min-w-[500px] mr-8">
            <div className="card__inner">
              <div className="card__content">
                <div className="flex items-center justify-between mb-10">
                  <div id='Quote' className='bg-Primary w-[52px] h-[52px] rounded-[6px] text-white flex items-center justify-center text-2xl'>
                    <FaQuoteLeft />
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-brand font-poppins font-medium">Reviews</p>
                    <div className="flex items-center gap-1 text-[#FBBF24]">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                  </div>
                </div>
                <p className="card__description">
                  A reliable team player. “Consistently met deadlines and communicated clearly, making collaboration smooth and projects more enjoyable. You could always count on the work being delivered without stress.”
                </p>
                <div className="mt-10 flex items-center gap-4">
                  <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                    <img src={reviewImg3} alt="review profile" />
                  </div>
                  <div>
                    <h2 className="text-brand font-poppins font-semibold text-md">Henry Roy</h2>
                    <p className="text-[#e5e3dc9d] font-poppins font-semibold text-sm mt-1">Digital Marketer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ----------------Card 4------------------- */}
          <div className="card min-w-[80vw] sm:min-w-[500px] lg:mr-8">
            <div className="card__inner">
              <div className="card__content">
                <div className="flex items-center justify-between mb-10">
                  <div id='Quote' className='bg-Primary w-[52px] h-[52px] rounded-[6px] text-white flex items-center justify-center text-2xl'>
                    <FaQuoteLeft />
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-brand font-poppins font-medium">Reviews</p>
                    <div className="flex items-center gap-1 text-[#FBBF24]">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                  </div>
                </div>
                <p className="card__description">
                  A creative innovator. “Always brought an eye for detail and design, writing efficient frontend code while suggesting UI improvements that elevated the overall user experience. The final product looked and felt better because of that vision.”
                </p>
                <div className="mt-10 flex items-center gap-4">
                  <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                    <img src={reviewImg4} alt="review profile" />
                  </div>
                  <div>
                    <h2 className="text-brand font-poppins font-semibold text-md">Brendy Wiliam</h2>
                    <p className="text-[#e5e3dc9d] font-poppins font-semibold text-sm mt-1">Finance Professor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ----------------Empty Card------------------- */}
          <div className="card lg:block hidden"> 
            <div className="card__inner">
            <div className="card__image-container" /> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyReview;
