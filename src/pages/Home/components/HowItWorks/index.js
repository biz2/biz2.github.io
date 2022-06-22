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
                            //<h1> How it Works </h1>
                            <h1> Como funciona </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className='banner'>
                            <div> 
                                //<p> New economy needs new assets – Tokens linked to and backed by real assets </p>
                                <p> A nova economia precisa de novos ativos - Tokens representando e com garantia em ativos reais </p>
                            </div>
                        </Col>
                    </Row>
                    <Row><Col> &nbsp; </Col></Row>
                    <Row> 
                        <Col xs={12} md={6}>
                            <img src={image_6} alt='Desenho de um homem segurando um cifrão. Há gráficos de barras no fundo.' className='image' />
                        </Col>
                        <Col xs={12} md={6} className='paragraph-container'>
                            /*<p> The biz2 Platform is a tokenized platform connected to the blockchain technology in the private secondary market. </p>
                            <p> 
                                We builded a bridge between the secondary market investment world and the Blockchain space
                                that allows investors to diversify their portfolio by getting access to tokens linked to and backed by
                                real assets, such as shares of small and medium enterprises (SMEs), pre-IPO startups and quotas of established funds.
                            </p>
                            */
                            <p> A biz2 é uma plataforma tokenizada conectada pela tecnologia blockchain no mercado secundário privado </p>
                            <p> 
                                Nós construímos uma ponte entre o mundo de mercado secundário de investimento e o universo do blockchain
                                que permite que investidores diversifiquem seu portfólio pelo acesso a tokens com garantia em ativos reais,
                                como ações de pequenas e médias empresas (PMEs), pre-IPO startup e cotas de fundos iliquidos tradicionais.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Col>
            <Col xs={12} className='banner'>
                <Container>
                    <Row>
                        <Col xs={12} md={6} lg={4} >
                            <Card className='d-flex flex-column justify-content-around align-items-center step-card'>
                                <Card.Title> Investimento </Card.Title>
                                <ReactSVG src={investment_image} />
                                <Card.Text> 
                                    Selecionamos ativos criteriosamente e coletamos todas informações necessárias 
                                    para que os investidores possam tomar a decisão de realizar um investimento.
                                    Também acreditamos e investimos em todos os ativos.
                                </Card.Text>
                            </Card>
                        </Col>
                        <Col xs={12} md={6} lg={4} >
                            <Card className='d-flex flex-column justify-content-around align-items-center step-card'>
                                <Card.Title> Acompanhamento </Card.Title>
                                <ReactSVG src={growth_image} />
                                <Card.Text> 
                                    De acordo com os nossos termos as empresas (ou fundos) são obrigados a disponibilizar
                                    informações sobre como o ativo está sendo gerido, bem como seus resultados.
                                    Também acompanhamos e somos representantes de nossos investidores.
                                </Card.Text>
                            </Card>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Card className='d-flex flex-column justify-content-around align-items-center step-card'>
                                <Card.Title> Conversão </Card.Title>
                                <ReactSVG src={conversion_image} />                                
                                <Card.Text> 
                                    Não acreditamos em um mundo com travas! Nossa crença é que todos investidores devem
                                    estar livres para ir a qualquer momento e é função dos gestores reter e garantir 
                                    a rentabilidade dos investimentos que foram realizados.
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
