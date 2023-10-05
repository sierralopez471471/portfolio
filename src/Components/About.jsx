import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'

function About(){
    return (
        <Container>
            <Row>
                <Col xs={12} md={4}>
                    <Image 
                        src="/my-portfolio/src/assets/me.jpg" 
                        alt="Me" 
                        rounded 
                        fluid
                    />
                </Col>
                <Col xs={12} md={8}>
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