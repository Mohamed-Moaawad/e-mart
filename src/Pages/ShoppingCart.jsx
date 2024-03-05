import React from 'react'
import './ShoppingCart.css'
import Navs from '../components/Navs'
import HeaderPage from '../components/HeaderPage'
import Footer from '../components/Footer'
import { Col, Container, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';

// React Icons
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearFromCart, decrementQuantity, deleteFromCart, incrementQuantity } from '../store/cartSlice'
// end React Icons

const ShoppingCart = () => {
    const cart = useSelector((state)=> state.cart)
    
    const dispatch = useDispatch()

    const totalAllPrice = cart.reduce((acc, product)=>{
        acc += product.price * product.quantity
        return acc
    },0)

    return (
        <div className='shopping-cart-page'>
            
            {/* start nav */}
            <Navs path=''/>
            {/* end nav */}

            {/* start header page */}
            <HeaderPage page='cart'/>
            {/* end header page */}

            <section className="content mb-5">
                <Container>
                    <div className="title-text">
                        <h3>shopping cart</h3>
                        <p>Shopping cart-Checkout-Order complete</p>
                    </div>
                    <Row>
                        <Col className='col-12 table-parent-box'>
                            <Table striped>
                                <thead>
                                    <tr>
                                    {/* <th>#</th> */}
                                    <th>product</th>
                                    <th>name</th>
                                    <th>price</th>
                                    <th>quantity</th>
                                    <th>total</th>
                                    <th>close</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((product)=>(
                                        <tr key={product.id}>
                                            {/* <td>1</td> */}
                                            <td><img src={product.image} alt="" /></td>
                                            <td><div>{product.description.slice(0,80)}...</div></td>
                                            <td><div>${product.price}</div></td>
                                            <td className='quantity'>
                                                <button onClick={()=> dispatch(decrementQuantity(product))}>-</button>
                                                <div>{product.quantity}</div>
                                                <button onClick={()=> dispatch(incrementQuantity(product))}>+</button>
                                            </td>
                                            <td>
                                                <div>${product.price * product.quantity.toFixed(2)}</div>
                                            </td>
                                            <td>
                                                <div>
                                                    <button onClick={()=>dispatch(deleteFromCart(product))}>
                                                        <RiDeleteBinLine />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            {cart.length >= 1 
                            ?
                            <button className='btn-delete-all' onClick={()=>dispatch(clearFromCart())}>clear All Cart</button> 
                            : ''}
                        </Col>
                        <Col className='col-12 d-flex justify-content-center'>
                            <div className="total-box">
                                <h4>cart totals</h4>
                                <ul>
                                    <li>
                                        <h5>subtotal</h5>
                                        <span>${totalAllPrice.toFixed(2)}</span>
                                    </li>
                                    <li>
                                        <h5>shopping</h5>
                                        <span>{cart.length}</span>
                                    </li>
                                    <li>
                                        <h5>total</h5>
                                        <span>${totalAllPrice.toFixed(2)}</span>
                                    </li>
                                </ul>
                                <Link to='/shop'>shop</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* start footer */}
            <Footer />
            {/* end footer */}
        </div>
    )
}

export default ShoppingCart
