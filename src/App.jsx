import { useState } from 'react'
import { HashRouter as Router, Routes,Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home.jsx'
import Facilities from './pages/Facilities.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import Cart from './pages/Cart.jsx'
import Confirmation from './pages/Confirmation.jsx'

import Layout from './Layout.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/Facilities" element={<Facilities />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Confirmation" element={<Confirmation />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
