import React, { useState } from 'react'
import BankForm from './components/Bank'
import GeneralForm from './components/General'
import AddresslForm from './components/Address'
import ProfessionalForm from './components/Professional'
import LoginForm from './components/Login'
import { Container, Col, Row } from 'react-bootstrap'

const RegisterForm  = () => {

    const [ step, updateStep ] = useState(0) 
    // const [ formData, updateFormData ] = useState({})

    const submitForm = () => {
        console.log('Submitting')
    }

    switch (step) {
        case 0: 
            return ( 
                <Container className='form-container'> 
                    <LoginForm onNext={() => updateStep(step + 1)} />
                </Container>
            )
        case 1: 
            return ( 
                <Container className='form-container'> 
                    <Row> 
                        <Col>
                            <h3> Passo 1 de 4 - Dados Gerais  </h3>
                        </Col>
                    </Row> 
                    <GeneralForm onNext={() => updateStep(step + 1)} />
                </Container>
            )
        case 2: 
            return ( 
                <Container className='form-container'>  
                    <Row> 
                        <Col>
                            <h3> Passo 2 de 4 - Informações de Endereço </h3>
                        </Col>
                    </Row>
                    <AddresslForm onNext={() => updateStep(step + 1)}  onPrevious={() =>  updateStep(step - 1)} />
                </Container>
            )
        case 3: 
            return ( 
                <Container className='form-container'>  
                    <Row> 
                        <Col>
                            <h3> Passo 3 de 4 - Informações Profissionais </h3>
                        </Col>
                    </Row>
                    <ProfessionalForm onNext={() => updateStep(step + 1)} onPrevious={() =>  updateStep(step - 1)} />
                </Container>
                )
        case 4: 
            return ( 
                <Container className='form-container'>  
                    <Row> 
                        <Col>
                        <h3> Passo 4 de 4 - Informações Bancárias </h3>
                        </Col>
                    </Row>
                    <BankForm onNext={() => submitForm()} onPrevious={() =>  updateStep(step - 1)} />
                </Container>
            )
        default: 
            return null
    }


}

export default RegisterForm