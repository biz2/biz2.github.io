import React, { useState } from 'react'
import BankForm from './components/Bank'
import GeneralForm from './components/General'
import PersonalForm from './components/Personal'
import ProfessionalForm from './components/Professional'
import { Container, Col, Row } from 'react-bootstrap'

const RegisterForm  = () => {

    const [ step, updateStep ] = useState(0) 
    const [ formData, updateFormData ] = useState({})

    const submitForm = () => {
        console.log('Submitting')
    }

    switch (step) {
        case 0: 
            return ( 
                <Container> 
                    <Row> 
                        <Col>
                            <h3> Passo 1 de 4 - Dados Gerais  </h3>
                        </Col>
                    </Row> 
                    <GeneralForm onNext={() => updateStep(step + 1)} />
                </Container>
            )
        case 1: 
            return ( 
                <Container>  
                    <Row> 
                        <Col>
                            <h3> Passo 2 de 4 - Dados Pessoais </h3>
                        </Col>
                    </Row>
                    <PersonalForm onNext={() => updateStep(step + 1)} />
                </Container>
            )
        case 2: 
        return ( 
            <Container> 
                <Row> 
                    <Col>
                        <h3> Passo 3 de 4 - Dados Profissionais</h3>
                    </Col>
                </Row>
                <ProfessionalForm onNext={() => updateStep(step + 1)} />
            </Container>
            )
        case 3: 
            return ( 
                <Container> 
                    <Row> 
                        <Col>
                        <h3> Passo 4 de 4 - Dados Bancários </h3>
                        </Col>
                    </Row>
                    <BankForm onNext={() => submitForm()} />
                </Container>
        )
    }


}

export default RegisterForm