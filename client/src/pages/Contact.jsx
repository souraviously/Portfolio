import React from 'react'
import PageBanner from '../components/common/PageBanner'
import ContactMe from '../components/home/ContactMe'
import ExploreMyWork from '../components/common/ExploreMyWork'

const Contact = () => {
  return (
    <>
      <PageBanner
        id='ContactBanner'
        kicker='Build Something Amazing Together'
        kickerMobile="Let's Work Together"
        title='CONTACT'
        description="Excited about a new project? Let's connect and bring it to life together"
        scrollTarget='#Contact-Section'
        className='py-20'
      />
      <div id='Contact-Section'>
        <ContactMe />
      </div>
      <div className='pb-[130px]'>
        <ExploreMyWork />
      </div>
    </>
  )
}

export default Contact