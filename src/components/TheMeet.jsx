import React from 'react'
import './TheMeet.css'
import { Col, Container, Row } from 'react-bootstrap';



// React Icons 
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";

const TheMeet = ({meet}) => {
    return (
        <section className="meet-page">
                    <Container>
                        <div className="title-text">
                            <h3>Meet The {meet}</h3>
                            <span></span>
                        </div>
                        <Row className='mt-5'>
                            <Col sm={12} md={6} lg={4}>
                                <figure className="team-item">
                                    <img src="images/about-page/img1.jpg" alt="team image" />
                                    <figcaption>
                                        <div className="info">
                                            <h6>david givens</h6>
                                            <span>chief technical officer</span>
                                        </div>
                                        <div className="social">
                                            <div className='icon'>
                                                <FaTwitter />
                                            </div>
                                            <div className='icon'>
                                                <FaFacebookF />
                                            </div>
                                            <div className='icon'>
                                                <IoLogoGoogleplus />
                                            </div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <figure className="team-item">
                                    <img src="images/about-page/img2.jpg" alt="team image" />
                                    <figcaption>
                                        <div className="info">
                                            <h6>cadic vegeta</h6>
                                            <span>graphic designer</span>
                                        </div>
                                        <div className="social">
                                            <div className='icon'>
                                                <FaTwitter />
                                            </div>
                                            <div className='icon'>
                                                <FaFacebookF />
                                            </div>
                                            <div className='icon'>
                                                <IoLogoGoogleplus />
                                            </div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <figure className="team-item">
                                    <img src="images/about-page/img3.jpg" alt="team image" />
                                    <figcaption>
                                        <div className="info">
                                            <h6>justyna michallek</h6>
                                            <span>business manager</span>
                                        </div>
                                        <div className="social">
                                            <div className='icon'>
                                                <FaTwitter />
                                            </div>
                                            <div className='icon'>
                                                <FaFacebookF />
                                            </div>
                                            <div className='icon'>
                                                <IoLogoGoogleplus />
                                            </div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </Col>
                        </Row>
                    </Container>
        </section>
    )
}

export default TheMeet
