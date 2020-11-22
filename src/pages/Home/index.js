import React from 'react'
import { Container } from 'react-bootstrap'

import Header from './components/Header'
import About from './components/About'
import Team from './components/Team'
import HowItWorks from './components/HowItWorks'
import Form from './components/Form'
import WhyUs from './components/WhyUs'
import Footer from './components/Footer' 

const Home  = () => {

    return (
        <Container fluid className='page'>
            <Header />
            <About />
            <WhyUs />
            <HowItWorks />
            <Team /> 
            <Form />
            <Footer />
        </Container>
    )
   

}

export default Home