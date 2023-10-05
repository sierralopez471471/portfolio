import React from 'react'
import {Container, Image, Row, Col} from 'react-bootstrap'

function Contact(){
    return(
        <Container style={{borderColor: "pink", borderStyle: "solid"}}>
            <Row>
                <Col>
                    <div className="icon-container">
                        <div className="icon">
                            <a href="mailto:sierralopez1006@gmail.com">
                                <i className="fas fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="icon-container">
                        <div className="icon">
                            <i className="fas fa-phone"></i>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="icon-container">
                        <div className="icon">
                            <i className="fab fa-linkedin"></i>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="icon-container">
                        <div className="icon">
                            <i className="fab fa-github"></i>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact