import React, { useState } from 'react' 
import { Form, Button, Col, Row } from 'react-bootstrap'

const LoginForm = ({ onNext }) => {
    
    const [ email, updateEmail ] = useState('') 
    const [ password, updatePassword ] = useState('')
    const [ confirmPassword, updateConfirmPassword ] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        onNext()
    }

    return (
        <Form>
            
            <Row>

                <Form.Group controlId="formBasicEmail" as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="" value={email} onChange={(e) => updateEmail(e.target.value) } />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" as={Col}>
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="" value={password}  onChange={(e) => updatePassword(e.target.value) } /> 
                </Form.Group>
            
                <Form.Group controlId="formBasicPassword" as={Col}>
                    <Form.Label>Confirmar senha</Form.Label>
                    <Form.Control type="password" placeholder="" value={confirmPassword}  onChange={(e) => updateConfirmPassword(e.target.value) } />
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

export default LoginForm