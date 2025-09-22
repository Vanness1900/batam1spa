import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home/Home.jsx'
import Facilities from './pages/Facilities/Facilities.jsx'
import Services from './pages/Services/Services.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Cart from './pages/Cart/Cart.jsx'
import Confirmation from './pages/Confirmation/Confirmation.jsx'
import Error404 from './pages/Error/Error404.jsx'

import MainLayout from './layouts/MainLayout.jsx'
import ScrollToHash from './components/ScrollToHash.jsx'
import { ServiceProvider } from './context/ServicesContext.jsx' // Import the provider

function App() {
  return (
    <ServiceProvider> {/* Wrap your entire app */}
      <Router>
        <ScrollToHash />
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/Facilities" element={<Facilities />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Confirmation" element={<Confirmation />} />
          </Route>
            <Route path="/Error404" element={<Error404 />} />
        </Routes>
      </Router>
    </ServiceProvider>
  );
}

export default App