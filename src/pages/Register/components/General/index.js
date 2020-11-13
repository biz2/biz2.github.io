import React, { useState } from 'react' 
import { Form, Button, Col, Row } from 'react-bootstrap'
import MaskedInput from 'react-maskedinput';

const GeneralForm = ({ onNext }) => {
    
    const [ gender, updateGender ] = useState('')
    const [ fullName, updateFullName ] = useState('') 
    const [ accountType, updateAccountType ] = useState('pf') 
    const [ cpf, updateCpf ] = useState('') 
    const [ rg, updateRg ] = useState('') 
    const [ birthday, updateBirthday ] = useState('') 
    const [ status, updateStatus] = useState('')
    const [ phone, updatePhone ] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        onNext()
    }

    return (
        <Form>
            <Form.Group controlId="fullName">
                <Form.Label>Nome Completo</Form.Label>
                <Form.Control type="text" placeholder="" value={fullName} onChange={(e) => updateFullName(e.target.value) } />
            </Form.Group>
            
            <Row>

                <Form.Group controlId="accountType" as={Col}>
                    <Form.Label>Tipo de conta</Form.Label>
                    <Form.Control as="select" placeholder="Selecione" value={accountType}  onChange={(e) => updateAccountType(e.target.value) }>
                        <option> Pessoa Física </option>
                        <option> Pessoa Jurídica </option>          
                    </Form.Control>
                </Form.Group>


            </Row>


            <Row>

                <Form.Group controlId="cpf" as={Col}>
                    <Form.Label>CPF</Form.Label>
                    <Form.Control type="text" placeholder=""  as={MaskedInput} mask='111.111.111-11' value={cpf} onChange={(e) => updateCpf(e.target.value) } />
                </Form.Group>
                
                <Form.Group controlId="rg" as={Col}>
                    <Form.Label>RG</Form.Label>
                    <Form.Control type="text" placeholder="" as={MaskedInput} mask='11.111.111-1' value={rg} onChange={(e) => updateRg(e.target.value) } />
                </Form.Group>

            </Row>
            <Row>

                <Form.Group controlId="birthday" as={Col}>
                    <Form.Label>Data de Nascimento</Form.Label>
                    <Form.Control type="date" dateFormat='DD-MM-YYYY' value={birthday}  onChange={(e) => updateBirthday(e.target.value) } /> 
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
                    <Form.Control type="phone" as={MaskedInput} mask='(11) 11111-1111' value={phone}  onChange={(e) => updatePhone(e.target.value) } />
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
        
            
            <Form.Group className='d-flex justify-content-end'>
                <Button variant="dark" type="submit" onClick={ (e) => onSubmit(e) }>
                    Próximo 
                </Button>
            </Form.Group>

        </Form>
    )

}

export default GeneralForm