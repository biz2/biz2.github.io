import React from 'react' 
import { Container, Row, Col, Card } from 'react-bootstrap'

import rodrigo_image from '../../../../assets/rodrigo.jpeg'
import danilo_image from '../../../../assets/danilo.jpeg'
import vitor_image from '../../../../assets/vitor.jpeg' 

const team = [
    {
        name: 'Rodrigo Hernandes', 
        role: "CEO", 
        quote: "Favorite quote - Author", 
        description: "After four years programming complex financial systems, Rodrigo initiated his career in financial markets, advising more than 25 companies in the last seven years, working in and leading Strategic Planning projects, M&A transactions (surpassing a combined amount of R$ 100 MM) and Private Equity firms. ", 
        image: rodrigo_image
    }, 
    {
        name: 'Danilo Moura', 
        role: "CFO", 
        description: "", 
        quote: "Favorite quote - Author", 
        image: danilo_image
    }, 
    {
        name: 'Vitor Bigelli', 
        role: "CTO", 
        quote: '"Feel the fear and do it anyway" - Susan Jeffers',
        description: "Web developer since 2011, holds a techinical degree in Internet Informatics and Udacity Nanodegrees in Front-End and React Development.  Enthusiast of Artificial Intelligence and passionated about learning and teaching, he believes in technology as the tool to build a better world", 
        image: vitor_image
    }, 
]

const Team = () => {

    return (
        <Row id='team'>
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
                                <p> 
                                    We are a group of 
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row><Col> &nbsp; </Col></Row>
                    <Row> 
                        { team.map( (member, index) => {
                            return (
                                <Col>
                                    <Card className='d-flex flex-column justify-content-around align-items-center team-card'>
                                        <Card.Img src={member.image} bsPrefix='team-img' />
                                        <Card.Title> { member.name } </Card.Title>
                                        <Card.Text> { member.role } </Card.Text>
                                        <Card.Text> { member.description } </Card.Text>
                                        <Card.Text> Favorite quote: <br /> { member.quote } </Card.Text>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </Col>
            
        </Row>
    )
    
}

export default Team