import React from 'react'
import MyReview from './MyReview'
import { MdOutlineArrowBack } from 'react-icons/md'
import ScrollFloat from '../effects/ScrollFloat'

const Review = () => {
  return (
    <>
    <section id='Reviews' className='mt-[112px]'>
        <div className="container">
            {/* ---------------Header------------------ */}
            <div className='mb-[100px]'>
                <div className='font-poppins text-Primary text-2xl font-semibold uppercase'><ScrollFloat animationDuration={1} ease='back.inOut(2)' scrollStart='center bottom+=50%' scrollEnd='bottom bottom-=40%' stagger={0.03}>SEE !</ScrollFloat></div>
                  <div className='flex items-center justify-between lg:my-0 my-5'>
                    <div className='font-soldier text-Primary lg:text-[82px] lg:w-[500px] w-full text-[34px] font-medium uppercase'><ScrollFloat animationDuration={1} ease='back.inOut(2)' scrollStart='center bottom+=50%' scrollEnd='bottom bottom-=40%' stagger={0.03}>What People Say About Me</ScrollFloat></div>
                    <MdOutlineArrowBack data-aos="fade-up" className='hidden md:block text-[200px] md:text-[300px] rotate-[-45deg] text-borderCol'/>
                  </div>
                <p data-aos="fade-right" className='font-poppins text-second lg:text-xl text-lg lg:w-[500px] uppercase lg:ml-[100px]'>Feedback from those I’ve worked with — clients, collaborators, and mentors who’ve seen my code, communication, and consistency in action.</p>
            </div>
            {/* ---------------Slider------------------ */}
        </div>
        <MyReview/>
    </section>
    </>
  )
}

export default Review