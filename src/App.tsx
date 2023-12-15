import React from 'react'
import AppBar from './components/AppBar'
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import Programs from './components/Programs'
import ContactUs from './components/ContactUs'

const App = () => {
  return (
    <div>
      <AppBar/>
      <Header/>
      <About/>
      <Programs/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default App
