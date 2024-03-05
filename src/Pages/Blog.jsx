import React, { useEffect, useState } from 'react'
import './Blog.css'
import Navs from '../components/Navs'
import Footer from '../components/Footer'
import HeaderPage from '../components/HeaderPage'

// React Icons
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";

import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../store/postsSlice'

import Swal from 'sweetalert2'




const Blog = () => {

    const {data, isLoading, isError} = useSelector((state)=> state.posts)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPosts())
    },[])

    const errorMessage = ()=>{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: isError,
            footer: '<a href="/">go to home</a>'
        });
    }

    return (
        <div className='blog-page'>
            {isError &&
                errorMessage()
            }
            
            {/* start nav */}
            <Navs  path=""/>
            {/* end nav */}

            {/* start header page */}
            <HeaderPage page='blog'/>
            {/* end header page */}

            {/* start content */}
            <section className="content">
                <Container>
                    <Row>
                        {isLoading ?
                        <div className="">
                            <Col className='col-12'>
                                <Card style={{ width: '100%', border:'1px solid #f1f1f1' }}>
                                    <Placeholder as={Card.Title} animation="glow">
                                        <Placeholder xs={12} style={{height:'220px'}} />
                                    </Placeholder>
                                    <Card.Body>
                                    <Placeholder as={Card.Title} animation="glow">
                                        <Placeholder xs={6} />
                                    </Placeholder>
                                    <Placeholder as={Card.Text} animation="glow">
                                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                        <Placeholder xs={6} /> <Placeholder xs={8} />
                                    </Placeholder>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className='col-12'>
                                <Card style={{ width: '100%', border:'1px solid #f1f1f1' }}>
                                    <Placeholder as={Card.Title} animation="glow">
                                        <Placeholder xs={12} style={{height:'220px'}} />
                                    </Placeholder>
                                    <Card.Body>
                                    <Placeholder as={Card.Title} animation="glow">
                                        <Placeholder xs={6} />
                                    </Placeholder>
                                    <Placeholder as={Card.Text} animation="glow">
                                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                        <Placeholder xs={6} /> <Placeholder xs={8} />
                                    </Placeholder>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className='col-12'>
                                <Card style={{ width: '100%', border:'1px solid #f1f1f1' }}>
                                    <Placeholder as={Card.Title} animation="glow">
                                        <Placeholder xs={12} style={{height:'220px'}} />
                                    </Placeholder>
                                    <Card.Body>
                                    <Placeholder as={Card.Title} animation="glow">
                                        <Placeholder xs={6} />
                                    </Placeholder>
                                    <Placeholder as={Card.Text} animation="glow">
                                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                        <Placeholder xs={6} /> <Placeholder xs={8} />
                                    </Placeholder>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className='col-12'>
                                <Card style={{ width: '100%', border:'1px solid #f1f1f1' }}>
                                    <Placeholder as={Card.Title} animation="glow">
                                        <Placeholder xs={12} style={{height:'220px'}} />
                                    </Placeholder>
                                    <Card.Body>
                                    <Placeholder as={Card.Title} animation="glow">
                                        <Placeholder xs={6} />
                                    </Placeholder>
                                    <Placeholder as={Card.Text} animation="glow">
                                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                        <Placeholder xs={6} /> <Placeholder xs={8} />
                                    </Placeholder>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </div>
                        :
                        data.map((post)=>(
                            <Col className='col-12 mb-5' key={post.id}>
                                <div className="blog-post">
                                    <div className="img">
                                        <img src={post.image} alt="" />
                                    </div>
                                    <div className="blog-text">
                                        <h4>{post.title}</h4>
                                            <ul>
                                                <li>
                                                <FaRegUser />
                                                    shamyiyo
                                                </li>
                                                <li>
                                                <MdOutlineMessage />
                                                    245 coments
                                                </li>
                                                <li>
                                                <FaRegCalendarAlt />
                                                    18-01-2024
                                                </li>
                                            </ul>
                                            <p>{post.description}</p>
                                    </div>
                                </div>
                            </Col>
                        ))
                        }
                        
                    </Row>
                </Container>
            </section>
            {/* end content */}


            {/* start footer */}
            <Footer />
            {/* end footer */}
        </div>
    )
}

export default Blog
