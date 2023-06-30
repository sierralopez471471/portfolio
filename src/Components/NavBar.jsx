import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Nav'

function NavBar() {
    return(
        <Container>
            <Navbar bg="dark" data-bs-theme="dark" className="justify-content-center sticky-top">
                <Nav className="me-auto">
                    <Navbar.Link href="/">Home</Navbar.Link>
                    <Navbar.Link href="/About">About Me</Navbar.Link>
                    <Navbar.Link href="/Projects">Projects</Navbar.Link>
                    <Navbar.Link href="/Contact">Contact Me</Navbar.Link>
                </Nav>
            </Navbar>
        </Container>
    )
}

export default NavBar