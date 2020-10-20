import React, { useState } from 'react' 
import { Form, Button, Row, Col } from 'react-bootstrap'

const PersonalForm = ({ onNext }) => {
    
    const [ cpf, updateCpf ] = useState('') 
    const [ rg, updateRg ] = useState('') 
    const [ birthday, updateBirthday ] = useState('') 
    const [ status, updateStatus] = useState('')
    const [ phone, updatePhone ] = useState('')
    const [ gender, updateGender ] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        onNext()
    }

    return (
        <Form>
            <Row>

                <Form.Group controlId="cpf" as={Col}>
                    <Form.Label>CPF</Form.Label>
                    <Form.Control type="text" placeholder="" value={cpf} onChange={(e) => updateCpf(e.target.value) } />
                </Form.Group>
                
                <Form.Group controlId="rg" as={Col}>
                    <Form.Label>RG</Form.Label>
                    <Form.Control type="text" placeholder="" value={rg} onChange={(e) => updateRg(e.target.value) } />
                </Form.Group>

            </Row>
            <Row>

                <Form.Group controlId="birthday" as={Col}>
                    <Form.Label>Data de Nascimento</Form.Label>
                    <Form.Control type="date" placeholder="01/01/1900" value={birthday}  onChange={(e) => updateBirthday(e.target.value) } /> 
                </Form.Group>
            
                <Form.Group controlId="status" as={Col}>
                    <Form.Label>Estado Civil</Form.Label>
                    <Form.Control as="select" placeholder="Selecione" value={status}  onChange={(e) => updateStatus(e.target.value) }>
                        <option> Solteiro(a) </option>
                        <option> Casado(a) </option>
                        <option> Separado(a) </option>
                        <option> Viúvo(a) </option>
                        <option> Divorciado(a) </option>
                        
                    </Form.Control>
                </Form.Group>

            </Row>

            <Row>

        
                <Form.Group controlId="phone" as={Col}>
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control type="phone" placeholder="(11) 99999 9999" value={phone}  onChange={(e) => updatePhone(e.target.value) } />
                </Form.Group>
            
                <Form.Group controlId="gender" as={Col}>
                    <Form.Label>Gênero</Form.Label>
                    <Form.Control as="select" placeholder="Selecione" value={gender}  onChange={(e) => updateGender(e.target.value) }>
                        <option> Masculino </option>
                        <option> Feminino </option>
                        <option> Transgênero </option>
                        <option> Transexual </option>
                        <option> Cisgênero </option>
                        <option> Não sei responder </option>
                        <option> Prefiro não responder </option>
                        <option> Outros </option>                    
                    </Form.Control>
                </Form.Group>
            

            </Row>
            <Button variant="primary" type="submit" onClick={ (e) => onSubmit(e) }>
                Next 
            </Button>

        </Form>
    )

}

export default PersonalForm