import React from 'react'
import HeroSection from '../components/HeroSection'

import OurMachines from '../components/OurMachines'
import Footer2 from '../components/Footer2'
import InfiniteScrollText from '../components/Home/InfiniteScrollText'
import AppSection from '../components/Home/AppSection'
import OurClasses from '../components/OurClasses'
import OurTrainer from '../components/Home/OurTrainer'
import PricingPlans from '../components/Home/PricingPlans'


const Home = () => {
  return (
    <div>
        <HeroSection/>
        <AppSection/>
        <InfiniteScrollText/>
        <OurClasses/>
        <OurTrainer/>
        <PricingPlans/>
        <OurMachines/>
    </div>
  )
}

export default Home