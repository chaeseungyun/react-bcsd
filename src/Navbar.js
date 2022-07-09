import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';

function NavibarSignIn() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand>로그인</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" />
                    <Nav>
                        <Nav.Link href="/"><span style={{ color: 'white' }}>Sign In</span></Nav.Link>
                        <Nav.Link eventKey={2} href="/SignUpPage">
                            <span style={{ color: 'white' }}>Sign Up</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavibarSignIn;