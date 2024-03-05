import React, { useEffect, useState } from 'react'
import './ProductDetails.css'
import { useParams } from 'react-router-dom'
import Navs from '../components/Navs'
import HeaderPage from '../components/HeaderPage'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../components/Footer'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice'


const ProductDetails = () => {
    const params = useParams()
    const [product, setProduct] = useState({})

    const dispatch = useDispatch()

    useEffect(()=>{
        fetch(`http://localhost:4000/products/${params.id}`)
        .then((res)=>res.json())
        .then((product)=> setProduct(product))
    },[])

    const addToCartProduct = ()=>{
        dispatch(addToCart(product))
    }
    return (
        <div className='product-details'>
            {/* start nav */}
            <Navs path="../"/>
            {/* end nav */}

            {/* start headre page */}
            |<HeaderPage page='product details'/>
            {/* end headre page */}

                    <section className="content">
                        <Container>
                            <Row>
                                <Col sm={12} md={6} lg={6} className='justify-content-center align-items-center'>
                                    <div className="img">
                                        <img src={`../${product.image}`} alt="product image" />
                                    </div>
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                    <div className="text">
                                        <h3>{product.title}</h3>
                                        <h5>$ {product.price}</h5>
                                        <h6>quick overview</h6>
                                        <p>{product.description}</p>
                                        <h6>category</h6>
                                        <h4>{product.category}</h4>
                                        <button onClick={addToCartProduct}>add to cart</button>
                                    </div>
                                </Col>
                            </Row>
                            {/* <h1>product - {product.title}</h1> */}
                        </Container>
                    </section>

                    {/* start footer */}
                    <Footer />
                    {/* end footer */}
                
        </div>
    )
}

export default ProductDetails
