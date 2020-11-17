import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import onu_image from '../../../../assets/onu.png'

import afro_image from '../../../../assets/afro.svg'
import woman_image from '../../../../assets/woman.svg'
import transgender_image from '../../../../assets/transgender.svg'
import environment_image from '../../../../assets/environment.svg'
import favela_image from '../../../../assets/favela.svg'
import power from '../../../../assets/power.svg'

const WhyUs = () => {
    return (
        <Row> 
            <Col>
                <Container> 
                    <Row>
                        <Col> <h1> Por que a biz2? </h1>   </Col>
                    </Row>
                    <Row>
                        <Col className='banner'> 
                            <h3> For us, is essential that investors know where they are investing and which social causes they support </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4> ONU Sustainable Development Goals </h4>
                            <p> The Sustainable Development Goals (SDGs) or Global Goals are a collection of 17 interlinked goals designed to be a "blueprint to achieve a better and more sustainable future for all" </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src={onu_image} alt='Onu sustainable development goals' />
                        </Col>
                    </Row>
                    <Row> <Col> &nbsp; </Col></Row>
                    <Row> <Col> &nbsp; </Col></Row>
                    <Row>
                        <Col>
                            <h4> Minorities, Underprivileged Communities and Social Causes </h4> 
                            <p> Which entrepreneurs would you like to see prospering? We want to give investors the chance to decide. </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='small-image-container'>
                            <img src={afro_image} alt='Black enterpreneur' className='small-image' /> 
                            <p>Black <br/> enterpreneurs</p>
                        </Col>
                        <Col className='small-image-container'>
                            <img src={woman_image} alt='Woman enterpreneur' className='small-image' />
                            <p>Woman <br/> enterpreneurs</p>
                        </Col>
                        <Col className='small-image-container'>
                            <img src={transgender_image} alt='Transgender enterpreneur' className='small-image' />
                            <p>Transgender <br/> enterpreneurs</p>
                        </Col>
                        <Col className='small-image-container'>                          
                            <img src={environment_image} alt='Environmental enterpreneur' className='small-image' />                              
                            <p>Environmental <br/> causes</p>                          
                        </Col>
                        <Col className='small-image-container'>
                            <img src={favela_image} alt='Favela enterpreneur' className='small-image' />                            
                            <p>Social <br/> causes</p>                          
                        </Col>    
                    </Row> 
                    <Row>
                        <Col> 
                            <img src={power} alt='Power to people' className='small-image' />
                        </Col>
                        <Col>
                            <h5> In our platform, the community has the power. By using consensus, all investors will be responsible for “auditing” companies to make sure they are aligned with the principles they promise. </h5> 
                        </Col>
                    </Row>
                    

                </Container>
            </Col>
        </Row>
    )
}

export default WhyUs