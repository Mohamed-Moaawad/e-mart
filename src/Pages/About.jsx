import React from 'react'
import './About.css'
import Navs from '../components/Navs'
import Footer from '../components/Footer';
import HeaderPage from '../components/HeaderPage';
import { Col, Container, Row } from 'react-bootstrap';
import LogoBrandsSlide from '../components/LogoBrandsSlide';
import TheMeet from '../components/TheMeet';






const About = () => {
    return (
        <div className='about'>
            {/* start nav */}
            <Navs  path=""/>
            {/* end nav */}

            {/* start header page */}
            <HeaderPage page='about us'/>
            {/* end header page */}

            {/* start welcome-to */}
            <section className="welcome-to">
                <Container >
                    <Row>
                        <Col sm={12} md={12} lg={6}>
                            <div className="img">
                                <img src="images/about-page/shop.jpg" alt="image shop" />
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={6} className='mt-4 mt-lg-0'>
                            <div className="text">
                                <h5>welcome to egypt</h5>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad debitis 
                                    porro dolorem consectetur sint ea distinctio fugit at nisi praesentium fugiat, 
                                    repudiandae mollitia, corrupti id sed nam in obcaecati illo.
                                    repudiandae mollitia, corrupti id sed nam in obcaecati illo.id sed nam in obcaecati illo.
                                </p>
                                <br />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Inventore numquam, fuga voluptatum optio tempore natus! 
                                    Corrupti, eligendi facilis. Est repellendus quidem culpa 
                                    inventore dolore incidunt deleniti itaque odit necessitatibus? 
                                    Aspernatur, praesentium. Quod, eius, voluptatibus officia recusandae ratione molestias quae 
                                    necessitatibus debitis id asperiores natus aspernatur adipisci fugit deserunt autem odit!
                                    necessitatibus debitis id asperiores natus aspernatur adipisci fugit deserunt autem odit!
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* end welcome-to */}

            {/* start Meet */}
            <TheMeet meet='members'/>
            {/* end Meet */}

            {/* start logo-brands */}
                <LogoBrandsSlide />
            {/* end logo-brands */}

             {/* start footer */}
                <Footer />
            {/* end footer */}
        </div>
    )
}

export default About
