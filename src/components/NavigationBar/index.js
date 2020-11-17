import React, { useState, useRef, useEffect } from 'react' 
import logo from '../../assets/logo.png'
import { Nav, Button, Navbar, NavbarBrand } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

const NavigationBar = (props) => {

    const [ navBackground, setNavBackground ] = useState(false)

    const navRef = useRef()
    
    navRef.current = navBackground

    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 50
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, [])

    return (
        
        <Navbar variant='light' ref={navRef} className={ navBackground ? 'light-bg' : 'transparent-bg'} fixed='top'>
            <NavbarBrand> 
                    <Nav.Link  href='/'>
                        <img src={logo} className='nav-logo' alt='biz2 logo'/>
                    </Nav.Link >
            </NavbarBrand>
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => props.history.push(selectedKey)}
                className='mr-auto'
            >
                <Nav.Link href="#about" > About Us </Nav.Link>
                &nbsp;
                <Nav.Link href="#howitworks" > How it Works </Nav.Link>
                &nbsp;
                <Nav.Link href="#whyus" > Why Us </Nav.Link>
                {/* &nbsp;
                <Nav.Link href="/register" > Quero investir  </Nav.Link>
                &nbsp;
                <Nav.Link href="/register" > Quero captar  </Nav.Link> */}
                &nbsp;
                {/* <Nav.Link href="/register" > Projetos captados    </Nav.Link>
                &nbsp;
                <Nav.Link href="/register" > Projetos em captação    </Nav.Link> */}
            </Nav>
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => props.history.push(selectedKey)}
                className='ml-auto'
            >
                {/* <Nav.Link href="/register" > Cadastro </Nav.Link>  */}
                &nbsp;
                <Nav.Link href="/login" as={Button} variant='dark' className='text-white' > Notify me of the launch </Nav.Link>
            </Nav>
        </Navbar>
            
    )
}

export default withRouter(NavigationBar)