
import './App.css'
import BeyondMachines from './components/BeyondMachines'
import CompleteExperience from './components/CompleteExperience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import OurMachines from './components/OurMachines'

function App() {


  return (
    <>
    <div className='bg-[#131313] pb-24'>

    <Navbar/>
    <Hero/>
    <BeyondMachines/>
    <CompleteExperience/>
    <OurMachines/>

    <Footer/>
    </div>
    </>
  )
}

export default App
