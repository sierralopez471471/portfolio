import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import picMe from '../assets/picMe.jpg'

function About(){
    return (
        <Container style={{borderColor: "black", borderStyle: "solid"}}>
            <Row>
                <Col xs={12} md={6} style={{borderColor: "black", borderStyle: "solid"}}>
                    <Image 
                        src={picMe} 
                        alt="Me" 
                        rounded 
                        fluid
                        width="225"
                        height="300"
                    />
                </Col>
                <Col xs={12} md={6}>
                    <h2>About Me</h2>
                    <p>I'm a prospective Software Engineer 
                        looking for a Junior Developer position. 
                        I recalled how much I enjoyed my computer
                        science class learning C++ and decided
                        to make the career change from Bioengineering
                        to Software Engineering. I completed a coding
                        bootcamp, acquiring skills in full stack
                        development as well as Git/GitHub and 
                        working with a development team to create 
                        full CRUD applications. I am most proficient
                        in JavaScript, Node.js, React.js and HTML/CSS, 
                        but I am more than willing to pick up any languages 
                        and frameworks that could be required of me 
                        in any professional position.</p>
                </Col>
            </Row>
        </Container>
    )
}
export default About