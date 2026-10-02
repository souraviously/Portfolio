import React from 'react';
import Logo from "../../assets/images/Logo.png"
import { Link } from 'react-router'
import { LuDot } from "react-icons/lu";
import Magnet from '../effects/Magnet';
import { FiArrowUpRight } from 'react-icons/fi';

export const Navbar = () => {

  return (
    <>
      <nav className='py-5 hidden lg:block'>
        <div className="container">
          <div id='NavRow' className='flex items-center justify-between'>
            {/* ----Logo---- */}
            <Magnet padding={40}>
              <Link to={'/'} className='hover-this transition-link' >
                <img className='w-[60px] transition-trigger' src={Logo} alt="Logo" data-aos="fade-down" data-aos-duration="500" data-aos-delay="0" data-aos-easing="ease-out-cubic" />
              </Link>
            </Magnet>
            {/* ----NavLinks---- */}
            <div>
              <ul className='font-soldier flex items-center gap-6 text-2xl text-Primary'>
                <li data-aos="fade-down" data-aos-duration="500" data-aos-delay="100" data-aos-easing="ease-out-cubic"><Link aria-label="Home" to={'/'} className={`flex items-center NavLinks hover-brown transition-trigger transition-link`}>HOME<LuDot /></Link></li>
                <li data-aos="fade-down" data-aos-duration="500" data-aos-delay="180" data-aos-easing="ease-out-cubic"><Link aria-label="About" to={'/about'} className='flex items-center NavLinks hover-brown transition-trigger transition-link'>ABOUT<LuDot /></Link></li>
                <li data-aos="fade-down" data-aos-duration="500" data-aos-delay="260" data-aos-easing="ease-out-cubic"><Link aria-label="Projects" to={'/projects'} className='flex items-center NavLinks hover-brown transition-trigger transition-link'>PROJECTS<LuDot /></Link></li>
                <li data-aos="fade-down" data-aos-duration="500" data-aos-delay="340" data-aos-easing="ease-out-cubic"><Link aria-label="Contact" to={'/contact'} className='flex items-center NavLinks hover-brown transition-trigger transition-link'>CONTACT<LuDot /></Link></li>
              </ul>
            </div>
            {/* ----Button---- */}
            <Magnet magnetStrength={2} padding={20}>
              <div className="magnetic-btn" data-aos="fade-down" data-aos-duration="500" data-aos-delay="420" data-aos-easing="ease-out-cubic">
                <Link aria-label="Contact  Souraviously" to={'/contact'} className='group inline-flex min-h-12 items-center gap-3 rounded-full border border-Primary/15 px-5 font-poppins text-sm font-semibold uppercase text-Primary hover:text-brand transition-trigger transition-link duration-300 hover-this hover:border-coffee hover:bg-coffee'>
                  Contact
                  <span className='flex size-7 items-center justify-center rounded-full group-hover:bg-brand group-hover:text-Primary bg-Primary text-brand transition duration-300 group-hover:rotate-45'>
                    <FiArrowUpRight />
                  </span>
                </Link>
              </div>
            </Magnet>
          </div>
        </div>
      </nav>
    </>
  )
}
