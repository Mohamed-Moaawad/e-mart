import React, { useEffect } from 'react'
import Navs from '../components/Navs'
import './Home.css'
import { Link } from 'react-router-dom';
// React bootstrap
import { Col, Container, Placeholder, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


// React Swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import Footer from '../components/Footer';
import LogoBrandsSlide from '../components/LogoBrandsSlide';
import ProductComponent from '../components/ProductComponent';

import { useDispatch, useSelector } from 'react-redux';
import { getProductsToHome } from '../store/productsSlice';



const Home = () => {
    const {data, isLoading, isError} = useSelector((state)=> state.products)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getProductsToHome())
    },[])
    return (
        <div className='home'>
            {/* start nav */}
            <Navs path=""/>
            {/* end nav */}

            {/* start header */}
            <header>
                <Container>
                    <div className="text">
                        <span>New Inspiration 2024</span>
                        <h2>CLOTHING MADE FOR YOU!</h2>
                        <h6>Trending from men and women style collection</h6>
                        <div className="btns">
                            <Link to='/shop'>show shop</Link>
                        </div>
                    </div>
                </Container>
            </header>
            {/* end header */}

            {/* start types */}
                <section className='types'>
                    <Container>
                        <Row>
                            <Col sm={12} md={4} lg={4}>
                                <div className="card-box">
                                    <img src="images/img1.jpg" alt="" />
                                    <div className="text">
                                        <div className="mens">
                                            <h4>men's <br /> collection</h4>
                                            <span>summer exclusive</span>
                                        </div>
                                        <Link to='/shop'>shop now</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={4} lg={4} className='my-4 m-md-0'>
                                <div className="card-box">
                                    <img src="images/img3.jpg" alt="" />
                                    <div className="text">
                                        <div className="mens">
                                            <h4>WOMEN'S  <br /> CLOTHING</h4>
                                            <span>Up to 70% OFF</span>
                                        </div>
                                        <Link to='/shop'>shop now</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={4} lg={4} className='col-box3'>
                            <div className="card-box box3">
                                    <img src="images/img2.jpg" alt="" />
                                    <div className="text">
                                        <div className="mens">
                                            <h4>men's <br /> collection</h4>
                                            <span>summer exclusive</span>
                                        </div>
                                        <Link to='/shop'>shop now</Link>
                                    </div>
                                </div>
                                <div className="card-box box3">
                                    <img src="images/img4.jpg" alt="" />
                                    <div className="text">
                                        <div className="mens">
                                            <h4>men's <br /> collection</h4>
                                            <span>summer exclusive</span>
                                        </div>
                                        <Link to='/shop'>shop now</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            {/* start types */}

            {/* start arrivals */}
            <section className="arrivals">
                <Container>
                    <div className="title-text">
                        <h3>new arrivals</h3>
                        <span></span>
                    </div>
                    <div className="products">
                    <Row>
                        
                        {isLoading 
                            ? 
                            <>
                                <Col sm={12} md={6} lg={3} className='mt-4'>
                                    <Card style={{ width: '100%' }}>
                                        <Placeholder as={Card.Title} animation="glow">
                                            <Placeholder style={{width:'100%', height:'150px'}} />
                                        </Placeholder>
                                        <Card.Body>
                                        <Placeholder as={Card.Title} animation="glow">
                                            <Placeholder xs={6} />
                                        </Placeholder>
                                        <Placeholder as={Card.Text} animation="glow">
                                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                            <Placeholder xs={6} /> <Placeholder xs={8} />
                                        </Placeholder>
                                        <Placeholder.Button variant="primary" xs={6} />
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12} md={6} lg={3} className='mt-4'>
                                    <Card style={{ width: '100%' }}>
                                        <Placeholder as={Card.Title} animation="glow">
                                            <Placeholder style={{width:'100%', height:'150px'}} />
                                        </Placeholder>
                                        <Card.Body>
                                        <Placeholder as={Card.Title} animation="glow">
                                            <Placeholder xs={6} />
                                        </Placeholder>
                                        <Placeholder as={Card.Text} animation="glow">
                                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                            <Placeholder xs={6} /> <Placeholder xs={8} />
                                        </Placeholder>
                                        <Placeholder.Button variant="primary" xs={6} />
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12} md={6} lg={3} className='mt-4'>
                                    <Card style={{ width: '100%' }}>
                                        <Placeholder as={Card.Title} animation="glow">
                                            <Placeholder style={{width:'100%', height:'150px'}} />
                                        </Placeholder>
                                        <Card.Body>
                                        <Placeholder as={Card.Title} animation="glow">
                                            <Placeholder xs={6} />
                                        </Placeholder>
                                        <Placeholder as={Card.Text} animation="glow">
                                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                            <Placeholder xs={6} /> <Placeholder xs={8} />
                                        </Placeholder>
                                        <Placeholder.Button variant="primary" xs={6} />
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12} md={6} lg={3} className='mt-4'>
                                    <Card style={{ width: '100%' }}>
                                        <Placeholder as={Card.Title} animation="glow">
                                            <Placeholder style={{width:'100%', height:'150px'}} />
                                        </Placeholder>
                                        <Card.Body>
                                        <Placeholder as={Card.Title} animation="glow">
                                            <Placeholder xs={6} />
                                        </Placeholder>
                                        <Placeholder as={Card.Text} animation="glow">
                                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                            <Placeholder xs={6} /> <Placeholder xs={8} />
                                        </Placeholder>
                                        <Placeholder.Button variant="primary" xs={6} />
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </>
                            :
                            data.map((product)=>(
                                <Col sm={12} md={6} lg={3} className='mt-4' key={product.id}>
                                    <ProductComponent 
                                    title={product.title}
                                    price={product.price}
                                    image={product.image}
                                    description={product.description}
                                    product={product}
                                    />
                                </Col>
                            ))
                        }
                        {isError && <h3 className='error-data'>{isError}</h3>}

                    </Row>
                    </div>
                </Container>
            </section>
            {/* end arrivals */}

            {/* start bargains */}
            <section className="bargains">
                <div className="text">
                    <span>BEST BARGAINS</span>
                    <h2>Exclusive Deals of This Season!</h2>
                    <Link>view details</Link>
                </div>
            </section>
            {/* end bargains */}
            
            {/* start slider-products */}
            <section className="slider-products">
                <Container>
                    <div className="title-text">
                        <h3>featured products</h3>
                        <span></span>
                    </div>
                        <div className="slider">
                        <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
                            {isLoading 
                            ?
                            <>
                                <SwiperSlide>
                                    <Card style={{ width: '95%' }}>
                                        <Placeholder as={Card.Title} animation="glow">
                                            <Placeholder style={{width:'100%', height:'150px'}} />
                                        </Placeholder>
                                        <Card.Body>
                                        <Placeholder as={Card.Title} animation="glow">
                                            <Placeholder xs={6} />
                                        </Placeholder>
                                        <Placeholder as={Card.Text} animation="glow">
                                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                            <Placeholder xs={6} /> <Placeholder xs={8} />
                                        </Placeholder>
                                        <Placeholder.Button variant="primary" xs={6} />
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card style={{ width: '95%' }}>
                                        <Placeholder as={Card.Title} animation="glow">
                                            <Placeholder style={{width:'100%', height:'150px'}} />
                                        </Placeholder>
                                        <Card.Body>
                                        <Placeholder as={Card.Title} animation="glow">
                                            <Placeholder xs={6} />
                                        </Placeholder>
                                        <Placeholder as={Card.Text} animation="glow">
                                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                            <Placeholder xs={6} /> <Placeholder xs={8} />
                                        </Placeholder>
                                        <Placeholder.Button variant="primary" xs={6} />
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card style={{ width: '95%' }}>
                                        <Placeholder as={Card.Title} animation="glow">
                                            <Placeholder style={{width:'100%', height:'150px'}} />
                                        </Placeholder>
                                        <Card.Body>
                                        <Placeholder as={Card.Title} animation="glow">
                                            <Placeholder xs={6} />
                                        </Placeholder>
                                        <Placeholder as={Card.Text} animation="glow">
                                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                            <Placeholder xs={6} /> <Placeholder xs={8} />
                                        </Placeholder>
                                        <Placeholder.Button variant="primary" xs={6} />
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card style={{ width: '95%' }}>
                                        <Placeholder as={Card.Title} animation="glow">
                                            <Placeholder style={{width:'100%', height:'150px'}} />
                                        </Placeholder>
                                        <Card.Body>
                                        <Placeholder as={Card.Title} animation="glow">
                                            <Placeholder xs={6} />
                                        </Placeholder>
                                        <Placeholder as={Card.Text} animation="glow">
                                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                            <Placeholder xs={6} /> <Placeholder xs={8} />
                                        </Placeholder>
                                        <Placeholder.Button variant="primary" xs={6} />
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card style={{ width: '95%' }}>
                                        <Placeholder as={Card.Title} animation="glow">
                                            <Placeholder style={{width:'100%', height:'150px'}} />
                                        </Placeholder>
                                        <Card.Body>
                                        <Placeholder as={Card.Title} animation="glow">
                                            <Placeholder xs={6} />
                                        </Placeholder>
                                        <Placeholder as={Card.Text} animation="glow">
                                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                            <Placeholder xs={6} /> <Placeholder xs={8} />
                                        </Placeholder>
                                        <Placeholder.Button variant="primary" xs={6} />
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                            </>
                            :
                            data.map((product)=>(
                                <SwiperSlide key={product.id}>
                                    <ProductComponent 
                                    title={product.title}
                                    price={product.price}
                                    image={product.image}
                                    description={product.description}
                                    product={product}
                                    />
                                </SwiperSlide>
                            ))}
                            {isError && <h3 className='error-data'>{isError}</h3>}
                        </Swiper>
                        </div>
                </Container>
            </section>
            {/* end slider-products */}

            {/* start bg-image */}
            <section className="bg-image">
                <Container>
                    <div className="text">
                        <h3>Multi-vendor eCommerce Template</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur 
                            adipisicing elit. Magnam culpa error 
                            recusandae. Esse unde sit similique 
                            aliquam qui accusamus laudantium rem 
                            laborum enim? Eveniet autem veritatis 
                            necessitatibus cumque. Quis, quibusdam?
                        </p>
                        <button>explore</button>
                    </div>
                </Container>
            </section>
            {/* end bg-image */}

            {/* start cards-blog  */}
            <section className="blog">
                <Container>
                    <div className="title-text">
                        <h3>latest blog</h3>
                        <span></span>
                    </div>
                    <div className="cards">
                        <Row>
                            <Col sm={12} md={6} lg={4} >
                                <div className="card overflow-hidden">
                                    <div className="img">
                                        <img src="images/Blog-home/img1.jpg" alt="" />
                                    </div>
                                    <div className="text">
                                        <span>16 april</span>
                                        <h5>Where Trends Going Next</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur 
                                            adipisicing elit. Dolore laboriosam enim cum aspernatur 
                                            praesentium eius consequuntur vitae voluptas. Temporibus 
                                            facere tempore vel minus tempora 
                                            assumenda quae eum est distinctio quidem!
                                        </p>
                                        <button>read more</button>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4} className='mt-4 mt-md-0'>
                                <div className="card overflow-hidden">
                                    <div className="img">
                                        <img src="images/Blog-home/img2.jpg" alt="" />
                                    </div>
                                    <div className="text">
                                        <span>16 april</span>
                                        <h5>Where Trends Going Next</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur 
                                            adipisicing elit. Dolore laboriosam enim cum aspernatur 
                                            praesentium eius consequuntur vitae voluptas. Temporibus 
                                            facere tempore vel minus tempora 
                                            assumenda quae eum est distinctio quidem!
                                        </p>
                                        <button>read more</button>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4} className='mt-4 mt-lg-0'>
                                <div className="card overflow-hidden">
                                    <div className="img">
                                        <img src="images/Blog-home/img3 (2).jpg" alt="" />
                                    </div>
                                    <div className="text">
                                        <span>16 april</span>
                                        <h5>Where Trends Going Next</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur 
                                            adipisicing elit. Dolore laboriosam enim cum aspernatur 
                                            praesentium eius consequuntur vitae voluptas. Temporibus 
                                            facere tempore vel minus tempora 
                                            assumenda quae eum est distinctio quidem!
                                        </p>
                                        <button>read more</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            {/* end cards-blog  */}

            {/* start logo-brands */}
            <LogoBrandsSlide />
            {/* end logo-brands */}

            {/* start footer */}
                <Footer />
            {/* end footer */}
        </div>
    )
}

export default Home
