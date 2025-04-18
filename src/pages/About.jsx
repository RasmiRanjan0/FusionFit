import React from 'react'
import AboutSection1 from '../components/About/AboutSection1'
import Facilities from '../components/About/Facilities'
import OurVision from '../components/About/OurVision'
import AboutFAQs from '../components/About/AboutFAQs'
import AboutHero from '../components/About/AboutHero'

const About = () => {
  return (
    <section className='bg-black' >
      <AboutHero/>
        <AboutSection1/>
        <Facilities/>
        <OurVision/>
        <AboutFAQs/>
    </section>
  )
}

export default About