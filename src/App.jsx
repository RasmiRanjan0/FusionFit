
import './App.css'
import AboutGymbox from './components/AboutGymbox'
import BeyondMachines from './components/BeyondMachines'
import CompleteExperience from './components/CompleteExperience'
import Footer from './components/Footer'
import Footer2 from './components/Footer2'
import Hero from './components/Hero'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import OurMachines from './components/OurMachines'

function App() {


  return (
    <>
    <div className='bg-[#0a0a0a]' >

    <Navbar/>
    <HeroSection/>
    {/* <Hero/> */}
    {/* <AboutGymbox/> */}
    {/* <BeyondMachines/> */}
    <CompleteExperience/>
    <OurMachines/>

    {/* <Footer/> */}
    <Footer2/>
    </div>
    </>
  )
}

export default App
