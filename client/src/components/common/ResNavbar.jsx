import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import ResLogo from "../../assets/images/Logo.png"
import { IoHomeOutline } from 'react-icons/io5';
import { GrContact, GrContactInfo, GrProjects } from 'react-icons/gr';
import { FiArrowUpRight } from 'react-icons/fi';

export const ResNavbar = () => {

  const [isClosed, setIsClosed] = useState(true)
  const { pathname } = useLocation();
  const navLinks = [
    { label: 'Home', path: '/', icon: IoHomeOutline },
    { label: 'About me', path: '/about', icon: GrContactInfo },
    { label: 'Projects', path: '/projects', icon: GrProjects },
    { label: 'Contact', path: '/contact', icon: GrContact },
  ];

  useEffect(() => {
    document.body.style.overflow = isClosed ? '' : 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isClosed]);

  return (
    <>
      <nav id='Navbar' className='sticky top-0 z-[90] py-4 lg:hidden'>
        <div id='NavRow' className='container flex items-center justify-between'>
          {/* ------Logo------ */}
          <Link data-aos="fade-down" data-aos-duration="500" data-aos-delay="0" data-aos-easing="ease-out-cubic" to={'/'} className='z-[70] flex size-12 items-center justify-center rounded-full border border-Primary/10 bg-brand/80 shadow-[0_14px_34px_rgba(22,22,22,0.1)] backdrop-blur-xl transition-trigger transition-link'><img className='w-9' src={ResLogo} alt="Logo" /></Link>
          {/* ------Nav Menu------ */}
          <div className='z-[70]' data-aos="fade-down" data-aos-duration="500" data-aos-delay="150" data-aos-easing="ease-out-cubic">
            <button onClick={() => setIsClosed(!isClosed)} className={`group flex min-h-12 cursor-pointer select-none items-center gap-3 rounded-full border px-4 font-soldier text-xl font-semibold uppercase shadow-[0_14px_34px_rgba(22,22,22,0.1)] backdrop-blur-xl duration-300 ${isClosed ? 'border-Primary/10 bg-brand/80 text-Primary' : 'border-brand/10 bg-Primary text-brand'}`} aria-label={isClosed ? "Open menu" : "Close menu"} aria-expanded={!isClosed}>
              <span>{isClosed ? 'Menu' : 'Close'}</span>
              <span className='relative size-8 rounded-full bg-current/10'>
                <span className={`absolute left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-current duration-300 ${isClosed ? 'top-[9px] rotate-0' : 'top-[15px] rotate-45'}`} ></span>
                <span className={`absolute left-1/2 top-[15px] h-[2px] w-4 -translate-x-1/2 rounded-full bg-current duration-300 ${isClosed ? 'opacity-100' : 'opacity-0'}`}></span>
                <span className={`absolute left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-current duration-300 ${isClosed ? 'top-[21px] rotate-0' : 'top-[15px] -rotate-45'}`}></span>
              </span>
            </button>
          </div>
          {/* ------Button Menu------ */}
          <div className={`fixed left-0 top-0 z-[60] h-dvh w-full transition-opacity duration-500 ${isClosed ? 'pointer-events-none opacity-0' : 'pointer-events-auto opacity-100'}`}>
            {/*------------Overlay----------- */}
            <div onClick={() => setIsClosed(true)} className={`fixed left-0 top-0 h-dvh w-full bg-Primary/55 backdrop-blur-sm transition-opacity duration-300 ${isClosed ? 'opacity-0' : 'opacity-100'}`}></div>

            {/* ------------Drawer----------- */}
            <div className={`fixed bottom-0 left-0 z-[65] h-[88dvh] w-full overflow-hidden rounded-t-[30px] border border-Primary/10 bg-brand p-5 shadow-[0_-30px_90px_rgba(22,22,22,0.28)] duration-500 ease-out ${isClosed ? 'translate-y-full' : 'translate-y-0'}`}>
              <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_8%,rgba(191,74,26,0.18),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.55),transparent_45%)]'></div>
              <div className='relative flex items-center justify-between border-b border-Primary/10 pb-5'>
                <div>
                  <p className='font-poppins text-xs font-bold uppercase text-coffee'>Navigation</p>
                  <h2 className='mt-1 font-soldier text-5xl font-semibold uppercase leading-none text-Primary'>Menu</h2>
                </div>
                <span className='flex size-11 items-center justify-center rounded-full bg-Primary text-brand'>
                  <FiArrowUpRight className='rotate-45' />
                </span>
              </div>
              {/* ------------Nav Links-------- */}
              <ul className={`relative mt-8 flex flex-col gap-3 transition-all duration-500 ${isClosed ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'}`}>
                {navLinks.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.path;

                  return (
                    <li key={item.path} className={`transition-all duration-500 ${isClosed ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'}`} style={{ transitionDelay: isClosed ? '0ms' : `${180 + index * 80}ms` }}>
                      <Link onClick={() => setIsClosed(true)} className={`group flex min-h-[72px] items-center justify-between rounded-2xl border px-4 font-poppins font-semibold transition-trigger transition-link duration-300 ${isActive ? 'border-Primary bg-Primary text-brand shadow-[0_18px_40px_rgba(22,22,22,0.18)]' : 'border-Primary/10 bg-white/35 text-Primary hover:border-coffee/35 hover:bg-white/60'}`} to={item.path}>
                        <span className='flex items-center gap-4'>
                          <span className={`flex size-11 items-center justify-center rounded-full text-xl transition duration-300 ${isActive ? 'bg-brand text-Primary' : 'bg-Primary text-brand group-hover:bg-coffee'}`}>
                            <Icon />
                          </span>
                          <span className='text-xl'>{item.label}</span>
                        </span>
                        <FiArrowUpRight className='text-xl transition duration-300 group-hover:rotate-45' />
                      </Link>
                    </li>
                  )
                })}
              </ul>
              <div className={`relative mt-8 rounded-2xl border border-Primary/10 bg-white/30 p-4 transition-all duration-500 ${isClosed ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'}`} style={{ transitionDelay: isClosed ? '0ms' : '560ms' }}>
                <p className='font-poppins text-xs font-semibold uppercase leading-5 text-Primary/55'>Fullstack developer focused on polished interfaces, smooth interactions, and practical product experiences.</p>
              </div>
            </div>
          </div>
        </div>

      </nav>

    </>
  )
}
