
import './App.css'
import Footer2 from './components/Footer2';
import Footer3 from './components/Footer3';

import Navbar from './components/Navbar'
import About from './pages/About';
import Gallery from './pages/Gallery';
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Memberships from './pages/Memberships';
import Programs from './pages/Programs';
import Contact from './pages/Contact';
function App() {


  return (
    <>
    <div className='bg-[#080808]' >

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path='/memberships' element = {<Memberships/>} />
        <Route path='/programs' element = { <Programs/> } />
        <Route path='/Contact' element = { <Contact/> } />
        
        
      </Routes>
      {/* <Footer2/> */}
      <Footer3/>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
