import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

import image_1 from '../../assets/home_image.jpg'
import image_2 from '../../assets/home_image_2.jpg'
import image_3 from '../../assets/home_image_3.jpg'
import image_4 from '../../assets/home_image_4.jpg'
import image_5 from '../../assets/about_us.svg'
import image_6 from '../../assets/how_it_works.svg'

import vitor_image from '../../assets/vitor.jpeg'
import rodrigo_image from '../../assets/rodrigo.jpeg'
import danilo_image from '../../assets/danilo.jpeg'

import { GiPayMoney, GiReceiveMoney,  } from 'react-icons/gi'
import { GrLineChart } from 'react-icons/gr'

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
                                <h1> A próxima geração de plataformas de investimento</h1>
                                <h4> Transparente. Co-participativa. Descentralizada.</h4> 
                            </Col>
                            <Col xs={6} className='home-image-container' style={{ background: `url(${images[Math.floor( Math.random() * images.length)]})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                &nbsp;
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Container className='page-section'>
                        <Row>
                            <Col>
                                <h1> Sobre nós </h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <div className='banner'> 
                                    <p> Empowering startup shareholders and profitable SME owners, unlocking value created in private equity at anytime </p>
                                </div>
                            </Col>
                        </Row>
                        <Row><Col> &nbsp; </Col></Row>
                        <Row> 
                            <Col xs={6}>
                                <img src={image_5} alt='Desenho de um homem segurando um cifrão. Há gráficos de barras no fundo.' className='image' />
                            </Col>
                            <Col xs={6} className='paragraph-container'>
                                <p> 
                                    The financial market will face even more changes in the future, and we offer to individual 
                                    investors the opportunity to invest in new companies and, until now inaccessible, private equity funds with
                                    relevant profitability history, ensuring reliability using cutting-edge technologies.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col className='team-section'>
                    <Container className='page-section'>
                        <Row>
                            <Col>
                                <h1> Nosso time </h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <div className='banner'> 
                                    <p> Nam tincidunt justo dui, eget aliquet nunc ultricies vel. Donec luctus iaculis 
                                        tortor, ut faucibus tortor fermentum at. Praesent eget suscipit mi. In cursus 
                                        nisl vel ante tempus tristique. Morbi. </p>
                                </div>
                            </Col>
                        </Row>
                        <Row><Col> &nbsp; </Col></Row>
                        <Row> 
                            <Col>
                                <Card className='d-flex flex-column justify-content-around align-items-center step-card'>
                                    <Card.Img src={rodrigo_image} bsPrefix='team-img' />
                                    <Card.Title> Rodrigo Fernandes </Card.Title>
                                    <Card.Text> 
                                        Nam tincidunt justo dui, eget aliquet nunc ultricies vel. Donec luctus iaculis 
                                        tortor, ut faucibus tortor fermentum at. Praesent eget suscipit mi. In cursus 
                                        nisl vel ante tempus tristique. Morbi.
                                    </Card.Text>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='d-flex flex-column justify-content-around align-items-center step-card'>
                                    <Card.Img src={danilo_image} bsPrefix='team-img' />
                                    <Card.Title> Danilo Moura </Card.Title>
                                    <Card.Text> 
                                        Nam tincidunt justo dui, eget aliquet nunc ultricies vel. Donec luctus iaculis 
                                        tortor, ut faucibus tortor fermentum at. Praesent eget suscipit mi. In cursus 
                                        nisl vel ante tempus tristique. Morbi.
                                    </Card.Text>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='d-flex flex-column justify-content-around align-items-center step-card'>
                                    <Card.Img src={vitor_image} bsPrefix='team-img' />
                                    <Card.Title> Vitor Bigelli </Card.Title>
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
            <Row>
                <Col xs={12}>
                    <Container className='page-section'>
                        <Row>
                            <Col>
                                <h1> Como funciona? </h1>
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
                <Col xs={12} className='banner-image'>
                    <Container>
                        <Row>
                            <Col>
                                <Card className='d-flex flex-column justify-content-around align-items-center step-card'>
                                    <Card.Title> Investimento </Card.Title>
                                    <GiPayMoney size={50} />
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
                                    <GrLineChart size={50} />
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
                                    <GiReceiveMoney size={50} />
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
        </Container>
    )
   

}

export default Home