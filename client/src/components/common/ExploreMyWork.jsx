import React from 'react'
import { MdOutlineArrowBack } from 'react-icons/md'
import Magnet from '../effects/Magnet'
import { Link } from 'react-router'
import ScrollFloat from '../effects/ScrollFloat'

const ExploreMyWork = () => {
  return (
    <section id='ExploreMyWork' className='py-[50px] lg:mt-0 mt-20'>
        <div className="container">
            <div id="Explore-Row" className='flex lg:flex-row flex-col items-center justify-between'>
                {/* ---------------Right Side-------------- */}
                <div>
                    <div className='font-poppins text-Primary text-lg font-semibold uppercase'><ScrollFloat animationDuration={1} ease='back.inOut(2)' scrollStart='center bottom+=60%' scrollEnd='bottom bottom-=60%' stagger={0.03}>View My Projects</ScrollFloat></div>
                    <h2 className='font-soldier text-second lg:text-[148px] text-[54px] font-medium uppercase leading-[100%] lg:w-[500px] w-full md:mt-[50px] mt-[30px]'><ScrollFloat animationDuration={1} ease='back.inOut(2)' scrollStart='center bottom+=60%' scrollEnd='bottom bottom-=60%' stagger={0.03}>Explore My Work</ScrollFloat></h2>
                </div>
                {/* ---------------Left Side-------------- */}
                <div data-aos="fade-up" data-aos-duration="3000">
                    <Magnet padding={5} magnetStrength={30}>
                        <Link to={'/projects'} className='hover-brown transition-trigger relative w-[200px] h-[200px] rounded-full border-1 border-coffee mt-10 flex items-center justify-center rotate-[-25deg] cursor-pointer hover:rotate-0 hover:bg-coffee duration-[.3s] group'>
                            <span className='absolute top-[-15px] left-0 w-full h-[200px] rotate-[-85deg] group-hover:rotate-0 group-hover:top-0 duration-[.3s] rounded-full border-1 border-coffee'></span>
                            <p className='text-4xl text-second text-center font-soldier group-hover:text-brand duration-[.3s]'>Explore <br /> my Work</p>
                        </Link>
                    </Magnet>
                    <p data-aos="fade-up" className='font-poppins text-second lg:text-xl text-lg lg:w-[400px] uppercase mt-10'>Explore my creative journey, where passion meets the art of crafting engaging digital experiences.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ExploreMyWork