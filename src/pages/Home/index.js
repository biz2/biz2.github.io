import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import About from './components/About'
import Team from './components/Team'
import HowItWorks from './components/HowItWorks'
import Form from './components/Form'
import WhyUs from './components/WhyUs'

import image_1 from '../../assets/home_image.jpg'
import image_2 from '../../assets/home_image_2.jpg'
import image_3 from '../../assets/home_image_3.jpg'
import image_4 from '../../assets/home_image_4.jpg'

const images = [
  image_1, 
  image_2,
  image_3, 
  image_4
]


const Home  = () => {

    return (
        <Container fluid className='page'>
            <Row>
                <Col>
                    <Container fluid className='hero'>
                        <Row>
                            <Col xs={6} className='home-col'>
                                {/* <h1> The next generation on investment plataforms</h1>
                                <h4> Transparent. Co-participative. Decentralized.</h4> */}
                                <h1> The next generation on investment platforms. </h1>
                                <h4> Transparent. Co-participative. Decentralized.</h4> 
                            </Col>
                            <Col xs={6} className='home-image-container' style={{ background: `url(${images[Math.floor( Math.random() * images.length)]})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                &nbsp;
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <About />
            <Team /> 
            <WhyUs />
            <HowItWorks />
            <Form />
        </Container>
    )
   

}

export default Home