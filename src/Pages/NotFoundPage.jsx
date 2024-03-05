import React from 'react'
import './NotFoundPage.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div className='not-found-page'>
            <Container>
                <Row className='align-items-center row-content'>
                    <Col sm={12} md={6} lg={16}>
                        <div className="text">
                            <h2>oooppss!!!</h2>
                            <p>The page you are looking for does not exist or another error occurred</p>
                            <Link to='/'>back to home</Link>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={16} className='mb-5 mt-mb-0'>
                        <div className="img">
                            <img src="images/404/404 error with person looking for-amico.svg" alt="404 image" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NotFoundPage
