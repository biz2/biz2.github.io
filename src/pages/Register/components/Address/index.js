import React, { useState } from 'react' 
import MaskedInput from 'react-maskedinput';
import { Form, Button, Row, Col } from 'react-bootstrap'

const PersonalForm = ({ onNext, onPrevious }) => {
    
    const [ address, updateAddress ] = useState('')
    const [ cep, updateCep] = useState('')
    const [ city, updateCity ] = useState('')
    const [ neighborhood, updateNeighborhood] = useState('')
    const [ complement, updateComplement ] = useState('')
    const [ state, updateState] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        onNext()
    }

    const handlePreviousClick = (e) => {
      e.preventDefault() 
      onPrevious()
  }


    return (
        <Form>
            <Form.Group controlId="address">
                <Form.Label>Endereço</Form.Label>
                <Form.Control type="text" placeholder="" value={address} onChange={(e) => updateAddress(e.target.value) } />
            </Form.Group>

            
            <Row> 
                <Form.Group controlId="cpf" as={Col}>
                    <Form.Label>Número</Form.Label>
                    <Form.Control type="number" placeholder="" value={''} onChange={(e) => updateAddress(e.target.value) } />
                </Form.Group>
                <Form.Group controlId="cpf" as={Col}>
                    <Form.Label>Complemento</Form.Label>
                    <Form.Control type="text" placeholder="" value={complement} onChange={(e) => updateComplement(e.target.value) } />
                </Form.Group>
            </Row>
            
            <Row>
            <Form.Group controlId="cpf" as={Col}>
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control type="number" placeholder="" value={neighborhood} onChange={(e) => updateNeighborhood(e.target.value) } />
                </Form.Group>
                <Form.Group controlId="city" as={Col}>
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control type="number" placeholder="" value={city} onChange={(e) => updateCity(e.target.value) } />
                </Form.Group>
            </Row>

            <Row>
                <Form.Group controlId="state" as={Col}>
                    <Form.Label>Estado</Form.Label>
                    <Form.Control type="text" placeholder="" value={state} onChange={(e) => updateState(e.target.value) } />
                </Form.Group>
                <Form.Group controlId="cep" as={Col}>
                    <Form.Label>CEP</Form.Label>
                    <Form.Control type="text" placeholder="" value={cep} onChange={(e) => updateCep(e.target.value) } />
                </Form.Group>
            </Row>

            

            
            <Form.Group className='d-flex justify-content-end'>
                <Button variant="light" type="submit" onClick={ (e) => handlePreviousClick(e) }>
                    Voltar 
                </Button>
                &nbsp;
                <Button variant="dark" type="submit" onClick={ (e) => onSubmit(e) }>
                    Próximo 
                </Button>
            </Form.Group>

        </Form>
    )

}

export default PersonalForm