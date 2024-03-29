import React from 'react'
import { Container, Row, Col } from 'react-bootstrap' 
import about_svg from '../../../../assets/about_us.svg'

const About = () => {

    return (
        <Row id='about'>
            <Col>
                <Container className='page-section'>
                    <Row>
                        <Col>
                            //<h1> About Us </h1>
                            <h1> Sobre nós </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className='banner'>
                            <div> 
                                //<p> Empowering startup shareholders and profitable SME owners, unlocking value created in private equity at anytime </p>
                                <p> Empoderamos acionistas de pequenas e médias empresas e startups, destravando valor em capital privado em qualquer momento </p>
                            </div>
                        </Col>
                    </Row>
                    <Row><Col> &nbsp; </Col></Row>
                    <Row> 
                        <Col xs={12} md={6}>
                            <img src={about_svg} alt='Desenho de um homem segurando um cifrão. Há gráficos de barras no fundo.' className='image' />
                        </Col>
                        <Col xs={12} md={6} className='paragraph-container'>
                            /*<p> 
                                The financial market will face even more changes in the future, and we offer to individual 
                                investors the opportunity to invest in new companies and, until now inaccessible, private equity funds with
                                relevant profitability history, ensuring reliability using cutting-edge technologies.
                            </p>*/
                            <p> 
                                As mudanças no mercado financeiro estão só começando e nós oferecemos a oportunidade de investidores individuais
                                investirem em novas empresas e fundos antes inacessíveis, exatamente em seu momento de inflexão,
                                onde possuem histórico relevante de rentabilidade, assegurando confiança e tecnologia de ponta em todo o processo.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    )
}

export default About
