import React from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap' 
import logo from '../../../../assets/logo.png'
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <Row> 
            <Col className='footer'>
                <Container>
                    <Row>
                        <Col className='d-flex flex-column text-left py-3' xs={12} md={3}> 
                            <img src={logo} className='nav-logo' alt='biz2 logo' />  
                        </Col> 
                        <Col xs={12} md={3} className='py-3'>
                        <Nav className='flex-column text-left'> 
                            /*
                            <h5> ABOUT </h5>
                            <Nav.Link href="#about" > About Us </Nav.Link>
                            <Nav.Link href="#howitworks" > How it Works </Nav.Link>
                            <Nav.Link href="#whyus" > Why Us </Nav.Link>
                            */
                            <h5> SOBRE </h5>
                            <Nav.Link href="#about" > Sobre nós </Nav.Link>
                            <Nav.Link href="#howitworks" > Como funciona </Nav.Link>
                            <Nav.Link href="#whyus" > Porque nós </Nav.Link>
                        </Nav> 
                        </Col> 
                        <Col xs={12} md={3} className='py-3'>
                        <Nav className='flex-column text-left'>
                            /*
                            <h5> LEGAL </h5>
                            <Nav.Link href="#about" > Crowdfunding Regulation </Nav.Link>
                            <Nav.Link href="#howitworks" > Terms of Use </Nav.Link>
                            */
                            <h5> LEGAL </h5>
                            <Nav.Link href="#about" > Regulação </Nav.Link>
                            <Nav.Link href="#howitworks" > Termos de uso </Nav.Link>
                        </Nav> 
                        </Col>
                        <Col className='text-left py-3' xs={12} md={3}>
                            <div>
                                <FaFacebook size={30} className='my-0 mx-1' color='#1ea4db' />
                                <FaLinkedin size={30} className='my-0 mx-1' color='#1ea4db' />
                            </div>
                            <p className='m-1'> Rua Expedicionário Poitena, 196, Centro, Itanhaém, SP </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className='text-center pt-5 small'>
                            <p> Copyright (c) 2020 biz2. Some rights reserved. | Icons made by <a href="https://smashicons.com/" title="Smashicons">Smashicons</a>, <a href="https://www.flaticon.com/free-icon/investing_3310790" title="ultimatearm">ultimatearm</a>  and <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> </p>
                        </Col>
                    </Row>

                </Container>
            </Col>
        </Row>
    )
}

export default Footer
