import React from 'react'


import OurMachines from '../components/OurMachines'
import Footer2 from '../components/Footer2'
import InfiniteScrollText from '../components/Home/InfiniteScrollText'
import AppSection from '../components/Home/AppSection'
import OurClasses from '../components/OurClasses'
import OurTrainer from '../components/Home/OurTrainer'
import PricingPlans from '../components/Home/PricingPlans'
import OurJourney from '../components/Home/OurJourney'
import Reviews from '../components/Home/Reviews'
import FAQ from '../components/Home/FAQ'
import TalkCard from '../components/Home/TalkCard'
import HeroSection from '../components/Home/HeroSection'


const Home = () => {
  return (
    <div>
        <HeroSection/>
        <AppSection/>
        <InfiniteScrollText/>
        <OurClasses/>
        <OurTrainer/>
        <PricingPlans/>
        <OurJourney/>
        <Reviews/>
        <FAQ/>
        <TalkCard/>
        {/* <OurMachines/> */}
    </div>
  )
}

export default Home