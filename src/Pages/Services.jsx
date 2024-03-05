import React from 'react'
import './Services.css'
import Navs from '../components/Navs'
import HeaderPage from '../components/HeaderPage'
import Footer from '../components/Footer'
import { Col, Container, Row } from 'react-bootstrap'

// React Icons 
import { LuUsers } from "react-icons/lu";
import { SlUmbrella } from "react-icons/sl";
import { IoRocketOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineScience } from "react-icons/md";
import { SlScreenTablet } from "react-icons/sl";
import { SlLayers } from "react-icons/sl";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { CgScreen } from "react-icons/cg";
import TheMeet from '../components/TheMeet'
import LogoBrandsSlide from '../components/LogoBrandsSlide'





const Services = () => {
    return (
        <div className='services-page'>
            {/* start nav */}
            <Navs  path=""/>
            {/* end nav */}

            {/* start header page */}
            <HeaderPage page='services'/>
            {/* end header page */}

            <section className="content">
                <Container>
                    <div className="title-text">
                        <h3>our services</h3>
                    </div>
                    <Row className='my-5'>
                        <Col sm={12} md={6} lg={4} className='mt-3'>
                            <div className="services-box">
                                <div className="icon">
                                    <LuUsers />
                                </div>
                                <div className="text">
                                    <h5>Multi-vendor eCommerce</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur 
                                        adipisicing elit. Facere aperiam 
                                        incidunt esse provident, veniam placeat.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className='mt-3'>
                            <div className="services-box">
                                <div className="icon">
                                    <CgScreen />
                                </div>
                                <div className="text">
                                    <h5>Clean Design</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur 
                                        adipisicing elit. Facere aperiam 
                                        incidunt esse provident, veniam placeat.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className='mt-3'>
                            <div className="services-box">
                                <div className="icon">
                                    <HiOutlineShoppingCart />
                                </div>
                                <div className="text">
                                    <h5>100+ eCommerce Elements</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur 
                                        adipisicing elit. Facere aperiam 
                                        incidunt esse provident, veniam placeat.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className='mt-3'>
                            <div className="services-box">
                                <div className="icon">
                                    <SlLayers />
                                </div>
                                <div className="text">
                                    <h5>Included Business Pages</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur 
                                        adipisicing elit. Facere aperiam 
                                        incidunt esse provident, veniam placeat.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className='mt-3'>
                            <div className="services-box">
                                <div className="icon">
                                    <SlScreenTablet />
                                </div>
                                <div className="text">
                                    <h5>Fully Responsive</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur 
                                        adipisicing elit. Facere aperiam 
                                        incidunt esse provident, veniam placeat.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className='mt-3'>
                            <div className="services-box">
                                <div className="icon">
                                    <MdOutlineScience />
                                </div>
                                <div className="text">
                                    <h5>Cutting-edge Features</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur 
                                        adipisicing elit. Facere aperiam 
                                        incidunt esse provident, veniam placeat.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className='mt-3'>
                            <div className="services-box">
                                <div className="icon">
                                    <IoSettingsOutline />
                                </div>
                                <div className="text">
                                    <h5>Completely Customizable</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur 
                                        adipisicing elit. Facere aperiam 
                                        incidunt esse provident, veniam placeat.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className='mt-3'>
                            <div className="services-box">
                                <div className="icon">
                                    <IoRocketOutline />
                                </div>
                                <div className="text">
                                    <h5>Fast and Well-optimized</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur 
                                        adipisicing elit. Facere aperiam 
                                        incidunt esse provident, veniam placeat.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className='mt-3'>
                            <div className="services-box">
                                <div className="icon">
                                    <SlUmbrella />
                                </div>
                                <div className="text">
                                    <h5>Rich Doc and Support</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur 
                                        adipisicing elit. Facere aperiam 
                                        incidunt esse provident, veniam placeat.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* start Meet */}
                    <TheMeet meet='team'/>
                    {/* end Meet */}
                </Container>
            </section>
            

            {/* start logo-brands */}
            <LogoBrandsSlide />
            {/* end logo-brands */}

            {/* start footer */}
            <Footer />
            {/* end footer */}
        </div>
    )
}

export default Services
