import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Form = () => {

    return (
        <Row id='form'>
            <Col className='form-section'>
                <Container>
                    <Row>
                        <Col>
                            //<h1> Know when our platform is ready! </h1>
                            <h1> Saiba quando nossa plataforma estiver pronta! </h1>
                        </Col>
                    </Row>
                    <Row id="mc_embed_signup">
                        <Col>
                            <form className='container' action="https://biz2.us7.list-manage.com/subscribe/post?u=72d3816dbc554b164a0e191dd&amp;id=51bcdd45ac" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate>
                            
                                <Row>
                                    <div class="mc-field-group col p-1">
                                        //<label for="mce-FNAME">Full Name</label>
                                        <label for="mce-FNAME">Nome</label>
                                        <input type="text" name="FNAME" class="" id="mce-FNAME" />
                                    </div>
                                </Row>

                                <Row>
                                    <div class="mc-field-group col-xs-12 col-md-6 p-1">
                                        <label for="mce-EMAIL">Email </label>
                                        <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" />
                                    </div>
                                    <div class="mc-field-group col-xs-12 col-md-6 p-1">
                                        //<label for="mce-MMERGE3">Phone Number </label>
                                        <label for="mce-MMERGE3">Telefone</label>
                                        <input type="text" name="MMERGE3" class="" id="mce-MMERGE3" />
                                    </div>
                                </Row>
                                
                                
                                <div id="mce-responses" class="clear">
                                    <div class="response" id="mce-error-response" style={{display: 'none'}}></div>
                                    <div class="response" id="mce-success-response" style={{display: 'none'}}></div>
                                </div>    

                                <Row>
                                    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_72d3816dbc554b164a0e191dd_51bcdd45ac" tabindex="-1" value="" /></div>
                                    <div class="clear col-xs-12 p-1"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" /></div>    
                                </Row>
                            
                            </form>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    )
   
}

export default Form
