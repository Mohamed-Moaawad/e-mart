import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navs.css'

// react icon 
import { BsCart } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
import { useSelector } from 'react-redux';



const Navs = ({path}) => {
    const parentMenuLinks = useRef()
    const menuLiPages = useRef()
    const backMenuPages = useRef()

    const [openMenu, setOpenMenu] = useState('')


    const openMenuPages = () =>{
        if(window.innerWidth <= 991){
            parentMenuLinks.current.classList.add('go-to-left')
            menuLiPages.current.classList.add('go-to-right')
            backMenuPages.current.style.left = '0px'
        }else{
            console.log('Sorry, this screen is larger than 991');
        }
    }
    const closeMenuPages = () =>{
        parentMenuLinks.current.classList.remove('go-to-left')
        menuLiPages.current.classList.remove('go-to-right')
        backMenuPages.current.style.left = '-200px'
    }

    useEffect(()=>{
        if(window.innerHeight <= 720){
            backMenuPages.current.style.top = '12%'
        }else{
            backMenuPages.current.style.top = '20%'
        }
    },[])



    const { data } = useSelector((state)=> state.favorite)
    const cart = useSelector((state)=> state.cart)
    
    return (
        <div>
            <nav>
                <Container>
                    <Row className='d-flex align-items-center'>
                        <Col className='col-4 col-lg-2'>
                            <div className="log">
                                <Link to='/'>
                                    <img src={`${path}images/logo.png`} alt="logo" />
                                </Link>
                            </div>
                        </Col>
                        <Col className={`links-box d-lg-flex col-7 ${openMenu}`}>
                            <div className="links ">
                            <h5 onClick={closeMenuPages} ref={backMenuPages} ><FaArrowLeft  /> back</h5>
                                <ul className='' ref={parentMenuLinks}>
                                    <li><span>1.</span><Link to='/'>home</Link></li>
                                    <li><span>2.</span><Link to='/about'>about</Link></li>
                                    <li><span>3.</span><Link to='/shop'>shop</Link></li>
                                    <li className='li-pages' onClick={openMenuPages}><span>4.</span><Link>pages <FaAnglesRight /></Link>
                                        <ul className='' ref={menuLiPages}>
                                            <li><span>1.</span><Link to='/about'>about us</Link></li>
                                            <li><span>2.</span><Link to='/services'>services</Link></li>
                                            <li><span>3.</span><Link to='/contact'>contact us</Link></li>
                                            <li><span>4.</span><Link to='/blog'>blog</Link></li>
                                            <li><span>5.</span><Link to='/shopping-cart'>shopping cart</Link></li>
                                            <li><span>6.</span><Link to='/shop'>shop</Link></li>
                                            <li><span>7.</span><Link to='/faqs'>FAQs</Link></li>
                                            <li><span>8.</span><Link to='/not-found'>404 error</Link></li>
                                        </ul>
                                    </li>
                                    <li><span>5.</span><Link to='/blog'>blog</Link></li>
                                    <li><span>6.</span><Link to='/contact'>contact</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col className='col-6 col-lg-3'>
                            <div className="log-icons">
                                <div className="log-in">
                                    <Link to='/log-in'>log in</Link>
                                    |
                                </div>
                                <div className="cart-fav">
                                    <Link to='/favorite-cart'>
                                        <IoMdHeartEmpty />
                                        <span>{data.length}</span>
                                    </Link>
                                    <Link to='/shopping-cart'>
                                        
                                        <BsCart />
                                        <span>{cart.length}</span>
                                    </Link>
                                    
                                    
                                </div>
                            </div>
                        </Col>
                        <Col className='d-sm-flex d-lg-none col-2 justify-content-end'>
                            <div className="menu-box d-flex " 
                            onClick={()=>{
                                setOpenMenu(openMenu === '' ? 'open-menu' : '')
                            }}>
                                <input type='checkbox'/>
                                <div className="menu" >
                                    <span className='spn1'></span>
                                    <span className='spn2'></span>
                                    <span className='spn3'></span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </nav>
        </div>
    )
}

export default Navs
