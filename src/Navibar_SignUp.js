import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';

function NavibarSignUp() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand>회원가입</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" />
                    <Nav>
                        <Nav.Link href="/react-bcsd"><span style={{ color: 'white' }}>Sign In</span></Nav.Link>
                        <Nav.Link eventKey={2} href="/react-bcsd/SignUpPage">
                            <span style={{ color: 'white' }}>Sign Up</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavibarSignUp;