import React from 'react'
import Magnet from '../effects/Magnet'
import CircularText from '../effects/CircularText'
// ---------Icons
import { FaArrowDown, FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
    { label: 'Facebook', href: 'https://www.facebook.com/souraviously/', icon: FaFacebookF },
    { label: 'Instagram', href: 'https://www.instagram.com/souraviously', icon: FaInstagram },
    { label: 'Twitter', href: 'https://x.com/souraviously', icon: FaXTwitter },
    { label: 'Github', href: 'https://github.com/souraviously/', icon: FaGithub },
    { label: 'Linkedin', href: 'https://www.linkedin.com/in/souraviously', icon: FaLinkedinIn },
]

const PageBanner = ({ id, kicker, kickerMobile, title, description, scrollTarget, descriptionWidth = 'lg:w-[400px]', className = '' }) => {

    const handleScroll = (e) => {
        e.preventDefault()
        document.querySelector(scrollTarget)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <section id={id} className={`relative overflow-hidden ${className}`}>
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#BF4A1A]/8 blur-3xl" />
            </div>
            <div className="container">
                <div className='flex lg:flex-row flex-col-reverse lg:items-end items-start justify-between relative'>
                    {/* -----Social Media Button------- */}
                    <div data-aos="fade-right" data-aos-duration="600" data-aos-delay="450" data-aos-easing="ease-out-cubic" data-aos-offset="50" className='mt-10 flex lg:flex-col flex-row gap-7'>
                        {socials.map(({ label, href, icon: Icon }) => (
                            <Magnet key={label} padding={20} disabled={false} magnetStrength={2}>
                                <a target='_blank' rel='noreferrer' href={href} aria-label={`Visit my ${label} profile`}>
                                    <Icon className='text-[18px] text-second hover-brown' />
                                </a>
                            </Magnet>
                        ))}
                    </div>
                    {/* -----Center Text------- */}
                    <div className='mb-[120px]'>
                        <p className='font-poppins uppercase text-lg text-[#313131] tracking-wide font-medium text-center md:flex hidden items-center justify-center gap-3' data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-out-cubic">
                            <span className='h-px w-8 bg-coffee/60'></span>
                            {kicker}
                            <span className='h-px w-8 bg-coffee/60'></span>
                        </p>
                        <p className='font-poppins uppercase text-lg text-[#313131] tracking-wide font-medium text-center md:hidden block' data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-out-cubic">{kickerMobile || kicker}</p>
                        <h2 className='font-soldier text-[#242424] lg:leading-[130%] font-medium lg:text-[180px] text-[70px] text-center' data-aos="fade-up" data-aos-duration="700" data-aos-delay="120" data-aos-easing="ease-out-cubic">{title}</h2>
                        <p className='font-poppins uppercase lg:text-lg text-base text-[#525252] tracking-wide font-medium text-center mx-auto w-full' data-aos="fade-up" data-aos-duration="700" data-aos-delay="280" data-aos-easing="ease-out-cubic">
                            <span className={`block mx-auto w-full ${descriptionWidth}`}>{description}</span>
                        </p>
                    </div>
                    {/* -----Scroll To Explore------- */}
                    <a href={scrollTarget} onClick={handleScroll} aria-label='Scroll to explore' className='group absolute right-0 bottom-0 cursor-pointer' data-aos="fade-up" data-aos-duration="600" data-aos-delay="550" data-aos-easing="ease-out-cubic">
                        <div className='lg:block hidden'>
                            <CircularText text=" SCROLL TO EXPLORE ✦ SCROLL TO EXPLORE  ✦ " onHover="speedUp" spinDuration={20} className="custom-class z-10" />
                        </div>
                        <div className='lg:hidden flex size-12 items-center justify-center rounded-full border border-[#242424]/15'></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <FaArrowDown className="text-xl text-[#242424] animate-bounce [animation-duration:1.8s] transition-colors duration-300 group-hover:text-coffee" />
                        </div>
                    </a>
                    <div></div>
                </div>
            </div>
        </section>
    )
}

export default PageBanner
