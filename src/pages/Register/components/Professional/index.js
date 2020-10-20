import React, { useState } from 'react' 
import { Form, Button } from 'react-bootstrap'

const GeneralForm = ({ onNext }) => {
    
    const [ fullName, updateFullName ] = useState('') 
    const [ email, updateEmail ] = useState('') 
    const [ accountType, updateAccountType ] = useState('pf') 
    const [ password, updatePassword ] = useState('')
    const [ confirmPassword, updateConfirmPassword ] = useState('')

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
            
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => updateEmail(e.target.value) } />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
        
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password}  onChange={(e) => updatePassword(e.target.value) } /> 
            </Form.Group>
        
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirmar senha</Form.Label>
                <Form.Control type="password" placeholder="Password" value={confirmPassword}  onChange={(e) => updateConfirmPassword(e.target.value) } />
            </Form.Group>
            
            <Button variant="primary" type="submit" onClick={ (e) => onSubmit(e) }>
                Next 
            </Button>

        </Form>
    )

}

export default GeneralForm