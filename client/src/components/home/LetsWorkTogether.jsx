import React from 'react'
import { Link } from 'react-router'
import { FiArrowUpRight, FiCheckCircle, FiMail } from 'react-icons/fi'

export const LetsWorkTogether = () => {
  const highlights = [
    'Responsive UI',
    'Smooth interaction',
    'Clean handoff',
  ];

  const metrics = [
    { value: '20+', label: 'Completed builds' },
    { value: '3+', label: 'Years practice' },
    { value: '100%', label: 'Focused delivery' },
  ];

  return (
    <section className='relative flex min-h-[520px] w-full items-center overflow-hidden bg-Primary py-16 text-brand md:min-h-screen md:py-0'>
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(191,74,26,0.28),transparent_28%),linear-gradient(135deg,rgba(229,227,220,0.08),transparent_34%)]'></div>
      <div className='pointer-events-none absolute inset-5 rounded-[30px] md:border md:border-brand/10'></div>

      <div className='pointer-events-none absolute left-1/2 top-10 w-[130vw] -translate-x-1/2 rotate-[7deg] border-y border-brand/10 bg-brand/[0.08] py-3 block'>
        <div className='flex whitespace-nowrap font-soldier text-[44px] font-semibold uppercase leading-none text-brand/45 [animation:a-text-scroll_34s_linear_infinite]'>
          <span className='px-5'>Let's work together / Creative front-end / Better interfaces /</span>
          <span className='px-5'>Let's work together / Creative front-end / Better interfaces /</span>
          <span className='px-5'>Let's work together / Creative front-end / Better interfaces /</span>
        </div>
      </div>

      <div className='pointer-events-none absolute bottom-14 left-1/2 w-[130vw] -translate-x-1/2 -rotate-[6deg] border-y border-coffee/25 bg-coffee/12 py-3 block'>
        <div className='flex whitespace-nowrap font-soldier text-[44px] font-semibold uppercase leading-none text-coffee/70 [animation:b-text-scroll_38s_linear_infinite]'>
          <span className='px-5'>Available for projects / Portfolio sites / Web apps / Landing pages /</span>
          <span className='px-5'>Available for projects / Portfolio sites / Web apps / Landing pages /</span>
          <span className='px-5'>Available for projects / Portfolio sites / Web apps / Landing pages /</span>
        </div>
      </div>

      <div className='container relative z-10'>
        <div className='grid items-end gap-12 lg:grid-cols-[1fr_420px]'>
          <div>
            <div className='inline-flex items-center gap-3 rounded-full border border-brand/15 bg-brand/[0.08] px-4 py-2 font-poppins text-xs font-bold uppercase text-brand/70 backdrop-blur'>
              <span className='size-2 rounded-full bg-coffee shadow-[0_0_20px_rgba(191,74,26,0.9)]'></span>
              Open to selected work
            </div>

            <h2 className='mt-7 max-w-5xl font-soldier text-[64px] font-semibold uppercase leading-[0.85] text-brand md:text-[110px] lg:text-[142px]'>
              Let's build something sharp.
            </h2>

            <p className='mt-7 max-w-2xl font-poppins text-xs font-medium md:leading-8 text-brand/[0.68] md:text-lg'>
              I design and develop polished front-end experiences with strong layout, practical motion, and a clear path from concept to launch.
            </p>

            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
              <Link
                to='/contact'
                className='group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-brand px-6 font-poppins text-sm font-bold uppercase text-Primary transition duration-300 hover:bg-coffee hover:text-brand'
              >
                Start a project
                <FiArrowUpRight className='text-lg transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
              </Link>
              <Link
                to='/projects'
                className='group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full border border-brand/20 px-6 font-poppins text-sm font-bold uppercase text-brand transition duration-300 hover:border-brand hover:bg-brand/10'
              >
                View work
                <FiArrowUpRight className='text-lg transition duration-300 group-hover:rotate-45' />
              </Link>
            </div>
          </div>

          <div className='rounded-[26px] border border-brand/[0.12] bg-brand/[0.08] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl'>
            <div className='flex items-start justify-between gap-5 border-b border-brand/10 pb-5'>
              <div>
                <p className='font-poppins text-xs font-bold uppercase text-coffee'>Project fit</p>
                <h3 className='mt-2 font-soldier md:text-5xl text-3xl font-semibold uppercase leading-none text-brand'>Modern web UI</h3>
              </div>
              <span className='flex size-12 shrink-0 items-center justify-center rounded-full bg-coffee text-xl text-white'>
                <FiMail />
              </span>
            </div>

            <ul className='mt-5 grid gap-3'>
              {highlights.map((item) => (
                <li key={item} className='flex items-center gap-3 rounded-2xl border border-brand/10 bg-brand/[0.07] px-4 py-3 font-poppins text-sm font-semibold text-brand/[0.76]'>
                  <FiCheckCircle className='shrink-0 text-coffee' />
                  {item}
                </li>
              ))}
            </ul>

            <div className='mt-5 grid grid-cols-3 gap-3'>
              {metrics.map((metric) => (
                <div key={metric.label} className='rounded-2xl border border-brand/10 bg-black/15 p-4'>
                  <strong className='block font-soldier text-4xl font-semibold leading-none text-brand'>{metric.value}</strong>
                  <span className='mt-2 block font-poppins text-[11px] font-semibold uppercase leading-4 text-brand/[0.52]'>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
