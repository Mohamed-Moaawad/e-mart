import React from 'react'
import './FAQs.css'
import Navs from '../components/Navs'
import HeaderPage from '../components/HeaderPage'
import Footer from '../components/Footer'
import { Col, Container, Row } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom'

const FAQs = () => {
    return (
        <div className='faqs-page'>
            
            {/* start nav */}
            <Navs  path=""/>
            {/* end nav */}

            {/* start header page */}
            <HeaderPage page='FAQs'/>
            {/* end header page */}

                <section className="contect">
                    <Container>
                        <div className="title-text">
                            <h3>FREQUENTLY ASKED QUESTIONS</h3>
                            <p>Last Updated on October 14, 2017</p>
                        </div>
                        <Row className='my-5'>
                            <Col className='col-12'>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><span>1#</span> Do you ship internationally?</Accordion.Header>
                                    <Accordion.Body>
                                        Anim pariatur cliche reprehenderit, enim eiusmod 
                                        high life accusamus terry richardson ad squid. 3 wolf
                                        moon officia aute. non cupidatat skateboard dolor brunch.
                                        Foosd truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf 
                                        moon tempor, sunt alqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim ke ffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lome. Leggings occaecat. craft beer farmto-tab le, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. Nihil anim keffiyeh helvetica, craft beer labore wes ande rso cred nesciunt sapiente ea proident Ad vegan excepteur butcher vice lomo. Leggings occaecat caaft beer farmto-tab le,
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><span>2#</span> Who shouldi to contact if i Have any question?</Accordion.Header>
                                    <Accordion.Body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life 
                                    accusamus terry richardson ad squid. 3 wolf moon officia aute, 
                                    non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt 
                                    laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on 
                                    it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim 
                                    keffiyeh helvetica, craft beer labore wes 
                                    anderson cred nesciunt sapiente ea proident.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><span>3#</span> How can i cancel or change my order?</Accordion.Header>
                                    <Accordion.Body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life 
                                    accusamus terry richardson ad squid. 3 wolf moon officia aute. 
                                    non cupidatat skateboard dolor brunch. Foosd truck quinoa nesciunt 
                                    laborum eiusmod. Brunch 3 wolf moon tempor, sunt alqua put a bird on it 
                                    squid single-origin coffee nulla assumenda shoreditch et. Nihil anim ke ffiyeh 
                                    helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad 
                                    vegan excepteur butcher vice lome. Leggings occaecat. craft beer farmto-tab le, 
                                    denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. Nihil anim keffiyeh helvetica, craft beer labore wes ande rso cred nesciunt sapiente ea proident Ad vegan excepteur butcher vice lomo. 
                                    Leggings occaecat caaft beer farmto-tab le,
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header><span>4#</span> How can i Return A Product?</Accordion.Header>
                                    <Accordion.Body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high 
                                    life accusamus terry richardson ad squid. 3 wolf moon officia 
                                    aute. non cupidatat skateboard dolor brunch. Foosd truck quinoa 
                                    nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt alqua put a 
                                    bird on it squid single-origin coffee nulla assumenda shoreditch et. 
                                    Nihil anim ke ffiyeh helvetica, craft beer labore wes anderson cred 
                                    nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lome. 
                                    Leggings occaecat. craft beer farmto-tab le, raw denim aesthetic synth 
                                    nesciunt you probably haven't heard of them accusamus labore sustainable 
                                    VHS. Nihil anim keffiyeh helvetica, craft beer labore wes ande rso cred 
                                    nesciunt sapiente ea proident Ad vegan excepteur butcher vice lomo. 
                                    Leggings occaecat caaft beer farmto-tab le,
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header><span>5#</span> How Long will it take to get my package?</Accordion.Header>
                                    <Accordion.Body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute. non cupidatat skateboard dolor brunch. Foosd truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt alqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim ke ffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lome. Leggings occaecat. craft beer farmto-tab le, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. Nihil anim keffiyeh helvetica, craft beer labore wes ande rso cred nesciunt sapiente ea proident Ad vegan excepteur butcher vice lomo. Leggings occaecat caaft beer farmto-tab le,
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header><span>6#</span> What shipping methods are available?</Accordion.Header>
                                    <Accordion.Body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute. non cupidatat skateboard dolor brunch. Foosd truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt alqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim ke ffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lome. Leggings occaecat. craft beer farmto-tab le, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. Nihil anim keffiyeh helvetica, craft beer labore wes ande rso cred nesciunt sapiente ea proident Ad vegan excepteur butcher vice lomo. Leggings occaecat caaft beer farmto-tab le,
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="6">
                                    <Accordion.Header><span>7#</span> Do You Provide any warranty?</Accordion.Header>
                                    <Accordion.Body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute. non cupidatat skateboard dolor brunch. Foosd truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt alqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim ke ffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lome. Leggings occaecat. craft beer farmto-tab le, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. Nihil anim keffiyeh helvetica, craft beer labore wes ande rso cred nesciunt sapiente ea proident Ad vegan excepteur butcher vice lomo. Leggings occaecat caaft beer farmto-tab le,
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="7">
                                    <Accordion.Header><span>8#</span> Do You Have replacenment guarantee?</Accordion.Header>
                                    <Accordion.Body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute. non cupidatat skateboard dolor brunch. Foosd truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt alqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim ke ffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lome. Leggings occaecat. craft beer farmto-tab le, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. Nihil anim keffiyeh helvetica, craft beer labore wes ande rso cred nesciunt sapiente ea proident Ad vegan excepteur butcher vice lomo. Leggings occaecat caaft beer farmto-tab le,
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="8">
                                    <Accordion.Header><span>9#</span> How Can i cancel or change My order?</Accordion.Header>
                                    <Accordion.Body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute. non cupidatat skateboard dolor brunch. Foosd truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt alqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim ke ffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lome. Leggings occaecat. craft beer farmto-tab le, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. Nihil anim keffiyeh helvetica, craft beer labore wes ande rso cred nesciunt sapiente ea proident Ad vegan excepteur butcher vice lomo. Leggings occaecat caaft beer farmto-tab le,
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            </Col>
                        </Row>
                        <div className="still-have-box">
                            <h3>Still Have Questions? Contact Us</h3>
                            <Link to='/contact'>contact</Link>
                        </div>
                    </Container>
                </section>

            {/* start footer */}
            <Footer />
            {/* end footer */}

        </div>
    )
}

export default FAQs
