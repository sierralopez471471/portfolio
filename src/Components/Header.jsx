import React from 'react'
import Container from 'react-bootstrap/Container'
import '../css/Header.css'

function Header() {
    return(
        <Container fluid className="mt-0" style={{backgroundColor: "lightblue"}}>
            <h1>Sierra Lopez</h1>
            <h2>Software Developer</h2>
        </Container>
    )
}

export default Header