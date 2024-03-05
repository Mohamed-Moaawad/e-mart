import React from 'react'
import './Contact.css'
import Navs from '../components/Navs'
import HeaderPage from '../components/HeaderPage'
import Footer from '../components/Footer'
import { Col, Container, Row } from 'react-bootstrap'
// React Icon
import { SlLocationPin } from "react-icons/sl";
import { SlScreenSmartphone } from "react-icons/sl";
import { IoIosSend } from "react-icons/io";




const Contact = () => {
    return (
        <div className='contact'>
            {/* start nav */}
            <Navs  path=""/>
            {/* end nav */}

            {/* start header page */}
            <HeaderPage page='contact'/>
            {/* end header page */}

            {/* start content */}
            <section className="content-all">
                {/* start content info */}
                <div className="content-info">
                    <Container>
                        <Row>
                            <Col sm={12} md={6} lg={4}>
                                <div className="location item">
                                    <h5>address</h5>
                                    <div className="icon">
                                    <SlLocationPin />
                                        <p>el salam city, cairo, egypt</p>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <div className="phone item">
                                    <h5>phone</h5>
                                    <div className="icon">
                                    <SlScreenSmartphone />
                                        <p><a href="tel:+201062026826">+201062026826</a></p>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                            <div className="mail item">
                                    <h5>E-mail</h5>
                                    <div className="icon">
                                    <IoIosSend />
                                        <p>
                                            <a href="mailto:mohamedmoawad531@icloud.com">mohamedmoawad531@icloud.com</a>
                                            <a href="mailto:moawadmohamed084@gmail.com">moawadmohamed084@gmail.com</a>
                                        </p>
                                        
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* end content info */}

                {/* start form */}
                <div className="form">
                    <Container>
                    <div className="title-text">
                        <h3>Send us a messages</h3>
                        <span>Aenean a turpis finibus euismod augue et facilisis elit. In sed quam et dui.</span>
                    </div>

                        <form>
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <input type="text" placeholder='Full Name'/>
                                    <input type="email" placeholder='mail@sitename.com'/>
                                    <input type="text" placeholder='Subject'/>
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                    <textarea name="" id=""  placeholder='Message'></textarea>
                                </Col>
                                <Col className='col-12'>
                                    <button>send message</button>
                                </Col>
                            </Row>
                        </form>
                    </Container>
                    
                    {/* start map */}
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2090.5524788363987!2d31.420814519422237!3d30.177858153399306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581150f6d147c5%3A0xc86131ec17e53832!2z2YXZitiv2KfZhiDYp9mE2KXYs9mD2YbYr9ix2YrYqQ!5e1!3m2!1sar!2seg!4v1705273244396!5m2!1sar!2seg" width="600" height="450"  loading="lazy"></iframe>
                        </div>
                        {/* end map */}
                </div>
                {/* end form */}

            </section>
            {/* end content */}

            {/* start footer */}
            <Footer />
            {/* end footer */}
        
        </div>
    )
}

export default Contact
