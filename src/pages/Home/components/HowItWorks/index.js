import React from 'react'

import { Container, Row, Col, Card } from 'react-bootstrap'
import { ReactSVG } from 'react-svg'

// Icons
import investment_image from '../../../../assets/investment.svg'
import growth_image from '../../../../assets/growth.svg'
import conversion_image from '../../../../assets/filter.svg'

// Images 
import image_6 from '../../../../assets/how_it_works.svg'


const HowItWorks = () => {

    return (
        <Row id='howitworks' >
            <Col xs={12}>
                <Container className='page-section'>
                    <Row>
                        <Col>
                            <h1> How it Works </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <div className='banner'> 
                            <p> New economy needs new assets – Tokens linked to and backed by real assets </p>
                            </div>
                        </Col>
                    </Row>
                    <Row><Col> &nbsp; </Col></Row>
                    <Row> 
                        <Col xs={6} className='paragraph-container'>
                            <p> The biz2 Platform is a tokenized platform connected to the blockchain technology in the private secondary market. </p>
                            <p> 
                                We builded a bridge between the secondary market investment world and the Blockchain space
                                that allows investors to diversify their portfolio by getting access to tokens linked to and backed by
                                real assets, such as shares of small and medium enterprises (SMEs), pre-IPO startups and quotas of established funds.
                            </p>
                        </Col>
                        <Col xs={6}>
                            <img src={image_6} alt='Desenho de um homem segurando um cifrão. Há gráficos de barras no fundo.' className='image' />
                        </Col>
                    </Row>
                </Container>
            </Col>
            <Col xs={12} className='banner'>
                <Container>
                    <Row>
                        <Col>
                            <Card className='d-flex flex-column justify-content-around align-items-center step-card'>
                                <Card.Title> Investimento </Card.Title>
                                <ReactSVG src={investment_image} />
                                <Card.Text> 
                                    Nam tincidunt justo dui, eget aliquet nunc ultricies vel. Donec luctus iaculis 
                                    tortor, ut faucibus tortor fermentum at. Praesent eget suscipit mi. In cursus 
                                    nisl vel ante tempus tristique. Morbi.
                                </Card.Text>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='d-flex flex-column justify-content-around align-items-center step-card'>
                                <Card.Title> Acompanhamento </Card.Title>
                                <ReactSVG src={growth_image} />
                                <Card.Text> 
                                    Nam tincidunt justo dui, eget aliquet nunc ultricies vel. Donec luctus iaculis 
                                    tortor, ut faucibus tortor fermentum at. Praesent eget suscipit mi. In cursus 
                                    nisl vel ante tempus tristique. Morbi.
                                </Card.Text>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='d-flex flex-column justify-content-around align-items-center step-card'>
                                <Card.Title> Conversão </Card.Title>
                                <ReactSVG src={conversion_image} />                                
                                <Card.Text> 
                                    Nam tincidunt justo dui, eget aliquet nunc ultricies vel. Donec luctus iaculis 
                                    tortor, ut faucibus tortor fermentum at. Praesent eget suscipit mi. In cursus 
                                    nisl vel ante tempus tristique. Morbi.
                                </Card.Text>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    )
}

export default HowItWorks