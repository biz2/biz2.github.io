import React, { useState } from 'react' 
import { Form, Button } from 'react-bootstrap'

const ProfessionalForm = ({ onNext }) => {
    
    const [ ocupation, updateOcupation ] = useState('') 
    const [ company, updateCompany ] = useState('') 
    const [ role, updateRole ] = useState('') 

    const onSubmit = (e) => {
        e.preventDefault()
        onNext()
    }

    return (
        <Form>
            <Form.Group controlId="fullName">
                <Form.Label>Ocupação</Form.Label>
                <Form.Control type="text" placeholder="" value={ocupation} onChange={(e) => updateOcupation(e.target.value) } />
            </Form.Group>
            
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Empresa</Form.Label>
                <Form.Control type="text" placeholder="Enter email" value={company} onChange={(e) => updateCompany(e.target.value) } />
            </Form.Group>
        
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Cargo</Form.Label>
                <Form.Control type="text" placeholder="Password" value={role}  onChange={(e) => updateRole(e.target.value) } /> 
            </Form.Group>
        
            
            <Button variant="dark" type="submit" onClick={ (e) => onSubmit(e) }>
                Next 
            </Button>

        </Form>
    )

}

export default ProfessionalForm