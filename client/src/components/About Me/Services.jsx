import React from 'react'
import { AiOutlineApi } from 'react-icons/ai'
import { FaFigma } from 'react-icons/fa'
import { MdManageHistory, MdOutlineArrowBack } from 'react-icons/md'
import { SlGlobe } from 'react-icons/sl'
import { TbDeviceMobileCode } from 'react-icons/tb'
import ScrollFloat from '../effects/ScrollFloat'
import ScrollReveal from '../effects/ScrollReveal'

const services = [
  {
    id: '01',
    title: 'Web App Development',
    shortTitle: 'Web Apps',
    icon: SlGlobe,
    description:
      'Modern, responsive web applications built with clean frontend architecture, fast interactions, and interfaces that feel polished on every screen.',
    tags: ['React', 'Performance', 'Scalable UI'],
  },
  {
    id: '02',
    title: 'API Integration',
    shortTitle: 'APIs',
    icon: AiOutlineApi,
    description:
      'Reliable API connections that bring live data, third-party services, auth flows, and dynamic features into a smooth user experience.',
    tags: ['REST APIs', 'Data Flow', 'Automation'],
  },
  {
    id: '03',
    title: 'Figma to Website',
    shortTitle: 'Figma',
    icon: FaFigma,
    description:
      'Pixel-aware Figma conversions with responsive layouts, reusable components, optimized styling, and careful attention to design details.',
    tags: ['Pixel Perfect', 'Tailwind', 'Responsive'],
  },
  {
    id: '04',
    title: 'Responsive Web Design',
    shortTitle: 'Responsive',
    icon: TbDeviceMobileCode,
    description:
      'Flexible layouts and device-friendly interfaces that stay readable, balanced, and easy to use across phones, tablets, and desktops.',
    tags: ['Mobile First', 'Accessibility', 'UX Polish'],
  },
  {
    id: '05',
    title: 'Web Management',
    shortTitle: 'Care',
    icon: MdManageHistory,
    description:
      'Ongoing improvements, content updates, UI cleanup, speed tuning, and maintenance that keep websites sharp after launch.',
    tags: ['Updates', 'Optimization', 'Support'],
  },
]

const Services = () => {
  return (
    <section id='Services' className='mt-[112px] pb-8'>
      <div className="container">
        <div>
          <div className='font-poppins text-Primary text-lg font-semibold uppercase'>
            <ScrollFloat animationDuration={1} ease='back.inOut(2)' scrollStart='center bottom+=50%' scrollEnd='bottom bottom-=40%' stagger={0.03}>
              What I Do
            </ScrollFloat>
          </div>
          <div className='flex items-center justify-between'>
            <div className='font-soldier text-Primary lg:text-[152px] text-[64px] font-medium uppercase leading-[0.95]'>
              <ScrollFloat animationDuration={1} ease='back.inOut(2)' scrollStart='center bottom+=50%' scrollEnd='bottom bottom-=40%' stagger={0.03}>
                Services
              </ScrollFloat>
            </div>
            <MdOutlineArrowBack data-aos="fade-up" className='hidden md:block text-[200px] md:text-[300px] rotate-[-45deg] text-borderCol' />
          </div>
          <ScrollReveal containerClassName='font-poppins text-second lg:text-xl text-lg lg:w-[440px] uppercase lg:ml-[100px]'>
            Comprehensive digital services to boost your online presence and achieve impactful results.
          </ScrollReveal>
        </div>

        <div className='mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5'>
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <article
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className='group relative min-h-[330px] overflow-hidden rounded-lg border border-Primary/15 bg-brand/70 p-5 shadow-[0_20px_60px_rgba(22,22,22,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-coffee/50 hover:bg-Primary hover:shadow-[0_28px_80px_rgba(22,22,22,0.22)]'
              >
                <div className='pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-coffee/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
                <div className='pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-Primary/10 transition-all duration-500 group-hover:scale-125 group-hover:border-brand/10' />
                <div className='relative z-10 flex h-full flex-col'>
                  <div className='flex items-start justify-between gap-4'>
                    <div className='flex h-13 w-13 items-center justify-center rounded-md border border-Primary/10 bg-Primary text-2xl text-brand transition-all duration-500 group-hover:border-brand/15 group-hover:bg-brand group-hover:text-Primary'>
                      <Icon />
                    </div>
                    <span className='font-soldier text-4xl font-medium leading-none text-Primary/20 transition-colors duration-500 group-hover:text-brand/20'>
                      {service.id}
                    </span>
                  </div>

                  <div className='mt-12'>
                    <p className='font-poppins text-xs font-semibold uppercase tracking-[0.18em] text-coffee transition-colors duration-500 group-hover:text-brand/60'>
                      {service.shortTitle}
                    </p>
                    <h3 className='mt-3 font-soldier text-[34px] font-medium uppercase leading-[0.95] text-Primary transition-colors duration-500 group-hover:text-brand'>
                      {service.title}
                    </h3>
                    <p className='mt-5 font-poppins text-[15px] leading-7 text-second/80 transition-colors duration-500 group-hover:text-brand/75'>
                      {service.description}
                    </p>
                  </div>

                  <div className='mt-auto flex flex-wrap gap-2 pt-8'>
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className='rounded-full border border-Primary/10 px-3 py-1 font-poppins text-[11px] font-medium uppercase text-Primary/70 transition-colors duration-500 group-hover:border-brand/15 group-hover:text-brand/70'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
