import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import afro_image from '../../../../assets/afro.svg'
import woman_image from '../../../../assets/woman.svg'
import transgender_image from '../../../../assets/transgender.svg'
import environment_image from '../../../../assets/environment.svg'
import favela_image from '../../../../assets/favela.svg'
import power from '../../../../assets/community.svg'
import { ReactSVG } from 'react-svg' 

import goal_01 from '../../../../assets/onu/goal_01.jpg'
import goal_02 from '../../../../assets/onu/goal_02.jpg'
import goal_03 from '../../../../assets/onu/goal_03.jpg'
import goal_04 from '../../../../assets/onu/goal_04.jpg'
import goal_05 from '../../../../assets/onu/goal_05.jpg'
import goal_06 from '../../../../assets/onu/goal_06.jpg'
import goal_07 from '../../../../assets/onu/goal_07.jpg'
import goal_08 from '../../../../assets/onu/goal_08.jpg'
import goal_09 from '../../../../assets/onu/goal_09.jpg'
import goal_10 from '../../../../assets/onu/goal_10.jpg'
import goal_11 from '../../../../assets/onu/goal_11.jpg'
import goal_12 from '../../../../assets/onu/goal_12.jpg'
import goal_13 from '../../../../assets/onu/goal_13.jpg'
import goal_14 from '../../../../assets/onu/goal_14.jpg'
import goal_15 from '../../../../assets/onu/goal_15.jpg'
import goal_16 from '../../../../assets/onu/goal_16.jpg'
import goal_17 from '../../../../assets/onu/goal_17.jpg'
import goal from '../../../../assets/onu/goal.png'

const goals = [
    goal_01, goal_02, goal_03, goal_04, goal_05, 
    goal_06, goal_07, goal_08, goal_09, goal_10, 
    goal_11, goal_12, goal_13, goal_14, goal_15, 
    goal_16, goal_17, goal
]

const WhyUs = () => {
    return (
        <Row id='whyus'> 
            <Col>
                <Container className='page-section'> 
                    <Row>
                        <Col> <h1> Why Us? </h1>   </Col>
                    </Row>
                    <Row>
                        <Col className='banner'> 
                            //<h3> For us, it is essential that investors know where they are investing and which social causes they support </h3>
                            <h3> Para nós, é essencial que os investidores saibam onde estão investindo e quais causas apoiam </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            /*
                            <h4> ONU Sustainable Development Goals </h4>
                            <p> The Sustainable Development Goals (SDGs) or Global Goals is a collection of 17 interlinked goals designed to be a "blueprint to achieve a better and more sustainable future for all" </p>
                            */
                            <h4> Metas de Desenvolvimento Sustentável da ONU </h4>
                            <p> As metas de desenvolvimento sustentável ou metas globais é uma coleção de 17 metas interligadas desenvolvidas para serem a "direção para alcançarmos um futuro melhor e mais sustentável para todos  </p>
                        </Col>
                    </Row>
                    <Row className='p-1'>
                        {
                            goals.map( (g, i) => {
                                return (
                                    <Col xs={4} md={2} className='p-0'>
                                        <img src={g} key={i} alt='Onu goal' className='onu-image' />
                                    </Col>
                                    
                                )
                            })
                        }
                    </Row>
                    <Row> <Col> &nbsp; </Col></Row>
                    <Row> <Col> &nbsp; </Col></Row>
                    <Row>
                        <Col>
                            /*
                            <h4> Minorities, Underprivileged Communities and Social Causes </h4> 
                            <p> Which entrepreneurs would you like to see prospering? We want to give investors the <strong> chance to decide</strong>. </p>
                            */
                            <h4> Minorias, Comunidades Desprevilegiadas e Causas Sociais </h4> 
                            <p> Quais empreendedores você gostaria de ver prosperando? Nós proporcionamos aos investidores <strong>a chance de decidir</strong>. </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='small-image-container remove-stroke'>
                            <ReactSVG src={afro_image} alt='Black enterpreneur' className='small-image' /> 
                            //<p>Black <br/> enterpreneurs</p>
                        </Col>
                        <Col className='small-image-container remove-stroke'>
                            <ReactSVG src={woman_image} alt='Woman enterpreneur' className='small-image' />
                            //<p>Women <br/> enterpreneurs</p>
                        </Col>
                        <Col className='small-image-container'>
                            <ReactSVG src={transgender_image} alt='Transgender enterpreneur' className='small-image' />
                            //<p>LGBT+ <br/> enterpreneurs</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='small-image-container'>                          
                            <ReactSVG src={environment_image} alt='Environmental enterpreneur' className='small-image' />                              
                            //<p>Environmental <br/> causes</p>                          
                        </Col>
                        <Col className='small-image-container'>
                            <ReactSVG src={favela_image} alt='Favela enterpreneur' className='small-image' />                            
                            //<p>Social <br/> causes</p>                          
                        </Col>   
                    </Row> 
                    <Row> <Col> &nbsp; </Col></Row>
                    <Row> <Col> &nbsp; </Col></Row>
                    <Row> 
                        <Col> 
                            /*
                            <h4> Power to the People </h4> 
                            <p> In our platform, the community has the power. </p>
                            */
                            <h4> Poder ao Povo </h4> 
                            <p> Na nossa plataforma, a comunidade detém o poder. </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <img src={power} alt='Power to people' className='image' />
                        </Col>
                        <Col xs={12} md={6} className='d-flex flex-column justify-content-center align-items-center'>
                            //<h5 className='text-left'> By using consensus, all investors will be responsible for “auditing” companies to make sure they are aligned with the principles they promise. </h5>
                            <h5 className='text-left'> Por consenso, os investidores serão co-responsáveis pela "auditoria" das empresas, para garantir que estão alinhados com os príncipios estabelecidos. </h5>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    )
}

export default WhyUs
