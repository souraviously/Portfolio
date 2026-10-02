import React from 'react'
import AllProjects from '../components/Projects/AllProjects'
import PageBanner from '../components/common/PageBanner'

const Projects = () => {
  return (
    <>
      <PageBanner
        id='ProjectsBanner'
        kicker='View My Works'
        title='PROJECTS'
        description='Explore a showcase of my creative journey, where passion meets design to craft engaging digital experiences.'
        descriptionWidth='lg:w-[500px]'
        scrollTarget='#AllProjects-Section'
        className='py-20'
      />
      <AllProjects />
    </>
  )
}

export default Projects