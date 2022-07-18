import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About_me from './components/about_me/About_me'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact_me from './components/contact_me/Contact_me'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About_me />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact_me />
      <Footer />
    </>
  )
}

export default App;
