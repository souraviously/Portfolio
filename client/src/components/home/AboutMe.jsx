import React, { useEffect } from 'react'
import { Link } from 'react-router'
import Magnet from '../effects/Magnet'
import BlurText from '../effects/BlurText';
import { FaCheck } from "react-icons/fa6";

const AboutMe = () => {
    return (
        <>

            <section id='About_Me' className='w-full md:mt-0 mt-18'>
                <div className="container overflow-hidden">
                    <div className="AboutMe flex lg:flex-row flex-col justify-between">
                        <div className="aboutMeText">
                            <h2 data-aos="fade-right" className='lg:text-[58px] text-[28px] font-soldier text-Primary font-medium lg:mb-5 mb-2'>ABOUT ME</h2>
                            <p data-aos="fade-right" className='lg:text-[68px] text-[40px] font-soldier lg:leading-[72px] leading-[42px] text-Primary font-medium lg:w-[370px] w-full'>Creating Stuff That <span data-aos="fade-left" className='text-coffee'>Does More </span>Than Impress</p>
                            <div className='lg:text-[18px] text-[15px] font-poppins text-second font-normal lg:mt-10 lg:mb-0 mb-5 mt-5 lg:w-[370px] w-full'><BlurText text="Creative designer based in Melbourne" delay={250} animateBy="words" direction="top" /></div>
                        </div>
                        <div>
                            <div className='lg:mb-[50px] mb-[24px] font-poppins lg:text-[32px] text-[16px] font-medium text-Primary lg:w-[700px] w-[100%] overflow-hidden '>
                                <BlurText text="I am dedicated to developing innovative solutions and impactful experiences that meet user needs and exceed expectations." delay={150} animateBy="words" direction="top" />
                            </div>
                            <div className='flex items-center justify-between lg:w-[500px] w-full lg:mb-[50px] mb-[30px]'>
                                <div className='flex flex-col gap-4'>
                                    <p className='flex items-center gap-3 font-poppins font-medium' data-aos="fade-right"><FaCheck />Mistakes To Avoid</p>
                                    <p className='flex items-center gap-3 font-poppins font-medium' data-aos="fade-right"><FaCheck />Your Startup</p>
                                    <p className='flex items-center gap-3 font-poppins font-medium' data-aos="fade-right"><FaCheck />outside the box</p>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <p className='flex items-center gap-3 font-poppins font-medium' data-aos="fade-left"><FaCheck />Create destiny</p>
                                    <p className='flex items-center gap-3 font-poppins font-medium' data-aos="fade-left"><FaCheck />Dare different</p>
                                    <p className='flex items-center gap-3 font-poppins font-medium' data-aos="fade-left"><FaCheck />Will power</p>
                                </div>
                            </div>
                            <Magnet padding={30} disabled={false} magnetStrength={5}>
                                <Link to={'/about'} className='ContactButton font-poppins py-2 px-[24px] font-medium text-base text-Primary hover-this transition-trigger transition-link'>MORE ABOUT ME</Link>
                            </Magnet>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AboutMe