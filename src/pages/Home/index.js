import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import svg_finance_1 from '../../assets/finance_1.svg'

const Home  = () => {

    return (
        <Container fluid className='hero'>
            <Row>
                <Col xs={6} className='home-col'>
                    <h1> The next generation on investment plataforms</h1>
                    <h4> Transparent. Co-participative. Decentralized.</h4>
                </Col>
                <Col xs={6} className='home-image-container'>
                    &nbsp;
                </Col>
            </Row>
        </Container>
    )
   

}

export default Home