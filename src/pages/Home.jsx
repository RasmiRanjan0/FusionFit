import React from 'react'
import HeroSection from '../components/HeroSection'
import CompleteExperience from '../components/CompleteExperience'
import OurMachines from '../components/OurMachines'
import Footer2 from '../components/Footer2'
import InfiniteScrollText from '../components/Home/InfiniteScrollText'
import AppSection from '../components/Home/AppSection'


const Home = () => {
  return (
    <div>
        <HeroSection/>
        <AppSection/>
        <InfiniteScrollText/>
        <CompleteExperience/>
        <OurMachines/>
    </div>
  )
}

export default Home