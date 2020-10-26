import React from 'react' 
import logo from '../../assets/logo.png'
import { Nav, Button, Navbar, NavbarBrand } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'

const NavigationBar = (props) => {

    return (
        <Navbar bg='light' variant='light'>
            <NavbarBrand> 
                    <img src={logo} className='nav-logo' />
            </NavbarBrand>
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => props.history.push(selectedKey)}
                className='mr-auto'
            >
                <Nav.Link href="/register" > Quem somos </Nav.Link>
                &nbsp;
                <Nav.Link href="/register" > Como funciona </Nav.Link>
                &nbsp;
                <Nav.Link href="/register" > Quero investir  </Nav.Link>
                &nbsp;
                <Nav.Link href="/register" > Quero captar  </Nav.Link>
            </Nav>
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => props.history.push(selectedKey)}
                className='ml-auto'
            >
                <Nav.Link href="/register" > Cadastro </Nav.Link> 
                &nbsp;
                <Nav.Link href="/login" as={Button} variant='dark' className='text-white' > Login </Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default withRouter(NavigationBar)