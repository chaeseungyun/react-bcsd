import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function NavibarSignUp() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand>회원가입</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" />
                    <Nav>
                        <Link to='/'><div style={{ color: 'white', marginRight: '10px' }}>Sign In</div></Link>
                        <Link to='/SignUpPage'><div style={{ color: 'white' }}>Sign Up</div></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavibarSignUp;