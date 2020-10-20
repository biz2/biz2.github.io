import React, { useState } from 'react' 
import { Form, Button } from 'react-bootstrap'

const BankForm = ({ onNext }) => {
    
    const [ bank, updateBank ] = useState('') 
    const [ agency, updateAgency] = useState('') 
    const [ account, updateAccount ] = useState('') 

    const onSubmit = (e) => {
        e.preventDefault()
        onNext()
    }

    return (
        <Form>
            <Form.Group controlId="fullName">
                <Form.Label>Banco</Form.Label>
                <Form.Control type="text" placeholder="" value={bank} onChange={(e) => updateBank(e.target.value) } />
            </Form.Group>
            
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Agência</Form.Label>
                <Form.Control type="email" placeholder="" value={agency} onChange={(e) => updateAgency(e.target.value) } />
            </Form.Group>
        
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Conta</Form.Label>
                <Form.Control type="text" placeholder="" value={account}  onChange={(e) => updateAccount(e.target.value) } /> 
            </Form.Group>

            <Button variant="primary" type="submit" onClick={ (e) => onSubmit(e) }>
                Next 
            </Button>

        </Form>
    )

}

export default BankForm