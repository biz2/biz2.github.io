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
                                <Card className='d-flex flex-column justify-content-around align-items-center team-card'>
                                    <Card.Img src={rodrigo_image} bsPrefix='team-img' />
                                    <Card.Title> Rodrigo Hernandes </Card.Title>
                                    <Card.Text> 
                                        Nam tincidunt justo dui, eget aliquet nunc ultricies vel. Donec luctus iaculis 
                                        tortor, ut faucibus tortor fermentum at. Praesent eget suscipit mi. In cursus 
                                        nisl vel ante tempus tristique. Morbi.
                                    </Card.Text>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='d-flex flex-column justify-content-around align-items-center team-card'>
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
                                <Card className='d-flex flex-column justify-content-around align-items-center team-card'>
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
                <Col className='form-section'>
                    <Container>
                        <Row>
                            <Col>
                                <h1> Seja um dos primeiros a saber do lançamento! </h1>
                            </Col>
                        </Row>
                        <div id="mc_embed_signup">
                            <form action="https://biz2.us7.list-manage.com/subscribe/post?u=72d3816dbc554b164a0e191dd&amp;id=51bcdd45ac" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                            <div id="mc_embed_signup_scroll">
                                
                            {/* <div class="indicates-required"><span class="asterisk">*</span> indicates required</div> */}
                            <Row>
                                <div class="mc-field-group col">
                                    <label for="mce-FNAME">Nome Completo </label>
                                    <input type="text" name="FNAME" class="" id="mce-FNAME" />
                                </div>
                            </Row>
                            <Row>
                                <div class="mc-field-group col">
                                    <label for="mce-EMAIL">Email </label>
                                    <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" />
                                </div>
                                <div class="mc-field-group size1of2 col">
                                    <label for="mce-MMERGE3">Telefone </label>
                                    <input type="text" name="MMERGE3" class="" id="mce-MMERGE3" />
                                </div>
                            </Row>
                            
                            <div id="mce-responses" class="clear">
                                <div class="response" id="mce-error-response" style={{display: 'none'}}></div>
                                <div class="response" id="mce-success-response" style={{display: 'none'}}></div>
                            </div>    
                                {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_72d3816dbc554b164a0e191dd_51bcdd45ac" tabindex="-1" value="" /></div>
                                <div class="clear"><input type="submit" value="Inscrever-se" name="subscribe" id="mc-embedded-subscribe" class="button" /></div>
                                </div>
                            </form>
                        </div>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
   

}

export default Home