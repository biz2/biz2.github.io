import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

import image_1 from '../../../../assets/home_image.jpg'
import image_2 from '../../../../assets/home_image_2.jpg'
import image_3 from '../../../../assets/home_image_3.jpg'
import image_4 from '../../../../assets/home_image_4.jpg'

const images = [
    image_1, 
    image_2,
    image_3, 
    image_4
]

const Header = () => {

    return (
        <Row id='home'>
            <Col>
                <Container fluid className='hero'>
                    <Row>
                        <Col className='home-col'>
                            /*
                            <h1> The next generation on investment platforms. </h1>
                            <h4> Transparent. Co-participative. Decentralized.</h4> 
                            */
                            <h1> 1Próxima geração em plataformas de investimento. </h1>
                            <h4> Transparente. Co-participativa. Decentralizada.</h4> 
                        </Col>
                        <Col className='home-image-container' style={{ background: `url(${images[Math.floor( Math.random() * images.length)]})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            &nbsp;
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    )
}

export default Header
