
import './App.css'
import Footer2 from './components/Footer2';

import Navbar from './components/Navbar'
import Gallery from './pages/Gallery';
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {


  return (
    <>
    <div className='bg-[#0a0a0a]' >

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        
      </Routes>
      <Footer2/>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
