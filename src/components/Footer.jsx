import React from 'react'
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap'
// React Icons
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';




const Footer = () => {
    return (
        <footer>
            <Container className='mb-5 mb-lg-0'>
                <Row className='py-5'>
                    <Col sm={12} md={6} lg={3}>
                        <div className="footer-contact">
                            <h5>contact us</h5>
                            <ul>
                                <li>
                                    <span>
                                        <IoHomeOutline />
                                    </span>
                                    <div>
                                        <p>el salam city, cairo, egypt</p>
                                    </div>
                                </li>
                                <li>
                                    <span>
                                        <MdOutlinePhoneInTalk />
                                    </span>
                                    <div>
                                        <a href='tel:+201062026826'>+201062026826</a>
                                    </div>
                                </li>
                                <li>
                                    <span>
                                        <IoMailOutline />
                                    </span>
                                    <div className='mail'>
                                        <a href='mailto:mohamedmoawad531@icloud.com'>mohamedmoawad531@icloud.com</a>
                                        <a href='mailto:moawadmohamed084@gmail.com'>moawadmohamed084@gmail.com</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3} className='mt-4 mt-md-0'>
                        <div className="footer-links">
                            <h5>useful links</h5>
                            <ul>
                                <li>
                                    <Link to='/contact'>contact</Link>
                                </li>
                                <li>
                                    <Link to='/shop'>shop</Link>
                                </li>
                                <li>
                                    <Link to='/not-found'>404 page</Link>
                                </li>
                                <li>
                                    <Link to='/blog'>blog</Link>
                                </li>
                                <li>
                                    <Link to='/FAQs'>FAQs</Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3} className='mt-4 mt-lg-0'>
                        <div className="footer-tags">
                            <h5>product tags</h5>
                            <ul>
                                <li>
                                    <Link>accessories</Link>
                                </li>
                                <li>
                                    <Link>bags</Link>
                                </li>
                                <li>
                                    <Link>Bestseller</Link>
                                </li>
                                <li>
                                    <Link>Handpicked</Link>
                                </li>
                                <li>
                                    <Link>Dresses</Link>
                                </li>
                                <li>
                                    <Link>Men Fashion</Link>
                                </li>
                                <li>
                                    <Link>sell off</Link>
                                </li>
                                <li>
                                    <Link>shoes</Link>
                                </li>
                                <li>
                                    <Link>specials</Link>
                                </li>
                                <li>
                                    <Link>women Fashion</Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3} className='mt-4 mt-lg-0'>
                        <div className="footer-news">
                            <h5>newsletter</h5>
                            <div className='news'>
                                <p>
                                Quisque a nunc interdum tellus placerat cursus. 
                                Quisque facilisis dapibus facilisis! 
                                Vivamus dictum lectus ut porta volutpat.
                                </p>
                                <input type="email" name="" id="" placeholder='Enter Email'/>
                                <button type="submit">subscribe</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="copyright">
                <Container className='container-copyright'>
                    <p>© Novine is Proudly Owned by <span>Mohamed Moawad</span></p>
                    <ul>
                        <li>
                            <img src="images/copyright/expresscard.png" alt="image-card" />
                        </li>
                        <li>
                            <img src="images/copyright/mastercard.png" alt="image-card" />
                        </li>
                        <li>
                            <img src="images/copyright/mastercard2.png" alt="image-card" />
                        </li>
                        <li>
                            <img src="images/copyright/visa.png" alt="image-card" />
                        </li>
                        <li>
                            <img src="images/copyright/visa2.png" alt="image-card" />
                        </li>
                    </ul>
                </Container>
            </div>
        </footer>
    )
}

export default Footer
