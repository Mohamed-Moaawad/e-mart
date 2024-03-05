import React, { useEffect, useRef, useState } from 'react'
import './Shop.css'
import Navs from '../components/Navs'
import HeaderPage from '../components/HeaderPage'
import Footer from '../components/Footer'
import { Col, Container, Row } from 'react-bootstrap'
// React Icon
import { GoSearch } from "react-icons/go";
import { CiBoxList } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";

// end React Icon
import Swal from 'sweetalert2'


import ProductComponent from '../components/ProductComponent'


import { useDispatch, useSelector } from 'react-redux'
import { getProducts, sortLowToHigh, sortHighToLow, sortAToZ, sortZToA, searchInProducts, filterProductsByPrice, filterProductsMen, filterProductsWeman, filterProductsElectronics } from '../store/productsSlice'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

const Shop = () => {
    const iconGrid = useRef()
    const iconList = useRef()
    const colorActive = useRef()
    const inputSearch = useRef()
    const minPrice = useRef()
    const maxPrice = useRef()

    const [productStyle, setProductStyle] = useState('')
    const [colListLg, setColListLg] = useState(3)
    const [colListMd, setColListmd] = useState(6)


    // ========  Redux = get products from API  

    const { data , isLoading , isError } = useSelector((state)=> state.products)
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getProducts())
    },[])
    // ======== end Redux = get products from API  



    const opstions = [
        {lable: 'alphabetically, A-Z', value: 1},
        {lable: 'alphabetically, Z-A', value: 2},
        {lable: 'price, high to low', value: 3},
        {lable: 'price, low to high', value: 4}
    ]
    // sort products 
    const sortProducts =(e)=>{
        if(e.target.value == ''){
            dispatch(getProducts())
        }
        if(e.target.value == 1){
            dispatch(sortAToZ())
        } 
        if(e.target.value == 2){
            dispatch(sortZToA())
        } 
        if(e.target.value == 3){
            dispatch(sortHighToLow())
        } 
        if(e.target.value == 4){
            dispatch(sortLowToHigh())
        } 
    }
    // search in product
    const searchProducts = ()=>{
        const resultData = inputSearch.current.value
        dispatch(searchInProducts(resultData))
    }
    //filter products by price  
    const filterByPrice = ()=>{
        const allPrice = {
            min: minPrice.current.value,
            max: maxPrice.current.value
        }
        dispatch(filterProductsByPrice(allPrice))
        minPrice.current.value = ''
        maxPrice.current.value = ''
    }
    //filter products men
    const filterMen = ()=>{
        dispatch(filterProductsMen())
    }
    const filterWomen = ()=>{
        dispatch(filterProductsWeman())
    }
    const filterElectronics = ()=>{
        dispatch(filterProductsElectronics())
    }


    const productsGrid = ()=>{
        iconGrid.current.style.color = '#fff'
        iconList.current.style.color = '#3F51B5'
        colorActive.current.classList.remove('active')
        setProductStyle('')
        setColListLg(3)
        setColListmd(6)
    }
    const productsList = ()=>{
        iconList.current.style.color = '#fff'
        iconGrid.current.style.color = '#3F51B5'
        colorActive.current.classList.add('active')
        setProductStyle('product-list')
        setColListLg(12)
        setColListmd(12)
    }

    const MessageError = ()=>{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: isError,
            footer: '<a href="/">Go To Home</a>'
        })
    }
    return (
        <div className='shop-page'>
            {isError &&
                <MessageError />
            }
            {/* start nav */}
            <Navs  path=""/>
            {/* end nav */}
            {/* start header page */}
            <HeaderPage page='shop'/>
            {/* end header page */}

            <section className="content">
                <Container>
                    <Row>
                        {/* start section-filters */}
                        <Col className='col-12 col-md-3 col-lg-3 '>
                            <div className="section-filters">
                                <div className="search-box">
                                    <input type="text" name="" id="" placeholder='Search here...' 
                                    onKeyUp={searchProducts} ref={inputSearch}/>
                                    <button>
                                        <GoSearch />
                                    </button>
                                </div>
                                <div className="categories">
                                    <h4>categories</h4>
                                    <ul>
                                        <li onClick={filterMen}>men</li>
                                        <li  onClick={filterWomen}>women</li>
                                        <li  onClick={filterElectronics}>electronics</li>
                                    </ul>
                                </div>
                                <div className="filter-price">
                                    <h4>filter by price</h4>
                                    <div className="inpt">
                                        <div>
                                            <label>From $</label>
                                            <input type="text" placeholder='$0' ref={minPrice}/>
                                        </div>
                                        <div>
                                        <label>To $</label>
                                            <input type="text" placeholder='$0' ref={maxPrice}/>
                                        </div>
                                    </div>
                                    <button onClick={filterByPrice}>filter price</button>
                                    <button onClick={()=>dispatch(getProducts())}>show all</button>
                                </div>
                                <div className="img d-none d-md-flex">
                                    <img src="images/Shop/banner-left.jpg" alt="image" />
                                </div>
                            </div>
                        </Col>
                        {/* end section-filters */}
                        
                        {/* start products */}
                        <Col className='col-12 col-md-9 col-lg-9 mt-5 mt-md-0'>
                            <div className="header-top-products px-1 px-md-3">
                                <div className="grid-and-list">
                                    <div className="icon-grid" ref={iconGrid} onClick={productsGrid}>
                                        <CiGrid41 />
                                    </div>
                                    <div className="icon-list" ref={iconList}onClick={productsList}>
                                        <CiBoxList />
                                    </div>
                                    <span className='' ref={colorActive}></span>
                                </div>
                                <div className="sort-products">
                                    <label htmlFor='sortSelect' className='d-none d-md-inline'>sort by :</label>
                                    <select name="" id="sortSelect" onChange={sortProducts}>
                                        <option value="">featured</option>
                                        {opstions.map((opstion)=>(
                                        <option key={opstion.value} value={opstion.value}>{opstion.lable}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            {/* start products */}
                            <Row className='py-5'>
                                {isLoading ? 
                                <div className='loading-cards row'>
                                    <h1>Loading...</h1>
                                        <Col sm={12} md={6} lg={3} className='mt-4'>
                                            <Card style={{ width: '100%', border:'1px solid #eee' }}>
                                                <Placeholder as={Card.Title} animation="glow">
                                                    <Placeholder style={{height: '150px'}}  xs={12} />
                                                </Placeholder>
                                                <Card.Body>
                                                <Placeholder as={Card.Title} animation="glow">
                                                    <Placeholder xs={9} />
                                                </Placeholder>
                                                <Placeholder as={Card.Text} animation="glow">
                                                    <Placeholder xs={6} /> <Placeholder xs={4} />
                                                    <Placeholder xs={4} />{' '}
                                                    <Placeholder xs={7} /> <Placeholder xs={8} />
                                                </Placeholder>
                                                
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col sm={12} md={6} lg={3} className='mt-4'>
                                            <Card style={{ width: '100%', border:'1px solid #eee' }}>
                                                <Placeholder as={Card.Title} animation="glow">
                                                    <Placeholder style={{height: '150px'}}  xs={12} />
                                                </Placeholder>
                                                <Card.Body>
                                                <Placeholder as={Card.Title} animation="glow">
                                                    <Placeholder xs={9} />
                                                </Placeholder>
                                                <Placeholder as={Card.Text} animation="glow">
                                                    <Placeholder xs={6} /> <Placeholder xs={4} />
                                                    <Placeholder xs={4} />{' '}
                                                    <Placeholder xs={7} /> <Placeholder xs={8} />
                                                </Placeholder>
                                                
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col sm={12} md={6} lg={3} className='mt-4'>
                                            <Card style={{ width: '100%', border:'1px solid #eee' }}>
                                                <Placeholder as={Card.Title} animation="glow">
                                                    <Placeholder style={{height: '150px'}}  xs={12} />
                                                </Placeholder>
                                                <Card.Body>
                                                <Placeholder as={Card.Title} animation="glow">
                                                    <Placeholder xs={9} />
                                                </Placeholder>
                                                <Placeholder as={Card.Text} animation="glow">
                                                    <Placeholder xs={6} /> <Placeholder xs={4} />
                                                    <Placeholder xs={4} />{' '}
                                                    <Placeholder xs={7} /> <Placeholder xs={8} />
                                                </Placeholder>
                                                
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col sm={12} md={6} lg={3} className='mt-4'>
                                            <Card style={{ width: '100%', border:'1px solid #eee' }}>
                                                <Placeholder as={Card.Title} animation="glow">
                                                    <Placeholder style={{height: '150px'}}  xs={12} />
                                                </Placeholder>
                                                <Card.Body>
                                                <Placeholder as={Card.Title} animation="glow">
                                                    <Placeholder xs={9} />
                                                </Placeholder>
                                                <Placeholder as={Card.Text} animation="glow">
                                                    <Placeholder xs={6} /> <Placeholder xs={4} />
                                                    <Placeholder xs={4} />{' '}
                                                    <Placeholder xs={7} /> <Placeholder xs={8} />
                                                </Placeholder>
                                                
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col sm={12} md={6} lg={3} className='mt-4'>
                                            <Card style={{ width: '100%', border:'1px solid #eee' }}>
                                                <Placeholder as={Card.Title} animation="glow">
                                                    <Placeholder style={{height: '150px'}}  xs={12} />
                                                </Placeholder>
                                                <Card.Body>
                                                <Placeholder as={Card.Title} animation="glow">
                                                    <Placeholder xs={9} />
                                                </Placeholder>
                                                <Placeholder as={Card.Text} animation="glow">
                                                    <Placeholder xs={6} /> <Placeholder xs={4} />
                                                    <Placeholder xs={4} />{' '}
                                                    <Placeholder xs={7} /> <Placeholder xs={8} />
                                                </Placeholder>
                                                
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col sm={12} md={6} lg={3} className='mt-4'>
                                            <Card style={{ width: '100%', border:'1px solid #eee' }}>
                                                <Placeholder as={Card.Title} animation="glow">
                                                    <Placeholder style={{height: '150px'}}  xs={12} />
                                                </Placeholder>
                                                <Card.Body>
                                                <Placeholder as={Card.Title} animation="glow">
                                                    <Placeholder xs={9} />
                                                </Placeholder>
                                                <Placeholder as={Card.Text} animation="glow">
                                                    <Placeholder xs={6} /> <Placeholder xs={4} />
                                                    <Placeholder xs={4} />{' '}
                                                    <Placeholder xs={7} /> <Placeholder xs={8} />
                                                </Placeholder>
                                                
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col sm={12} md={6} lg={3} className='mt-4'>
                                            <Card style={{ width: '100%', border:'1px solid #eee' }}>
                                                <Placeholder as={Card.Title} animation="glow">
                                                    <Placeholder style={{height: '150px'}}  xs={12} />
                                                </Placeholder>
                                                <Card.Body>
                                                <Placeholder as={Card.Title} animation="glow">
                                                    <Placeholder xs={9} />
                                                </Placeholder>
                                                <Placeholder as={Card.Text} animation="glow">
                                                    <Placeholder xs={6} /> <Placeholder xs={4} />
                                                    <Placeholder xs={4} />{' '}
                                                    <Placeholder xs={7} /> <Placeholder xs={8} />
                                                </Placeholder>
                                                
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col sm={12} md={6} lg={3} className='mt-4'>
                                            <Card style={{ width: '100%', border:'1px solid #eee' }}>
                                                <Placeholder as={Card.Title} animation="glow">
                                                    <Placeholder style={{height: '150px'}}  xs={12} />
                                                </Placeholder>
                                                <Card.Body>
                                                <Placeholder as={Card.Title} animation="glow">
                                                    <Placeholder xs={9} />
                                                </Placeholder>
                                                <Placeholder as={Card.Text} animation="glow">
                                                    <Placeholder xs={6} /> <Placeholder xs={4} />
                                                    <Placeholder xs={4} />{' '}
                                                    <Placeholder xs={7} /> <Placeholder xs={8} />
                                                </Placeholder>
                                                
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        
                                </div>
                                :
                                data.map((product)=> (
                                    <Col sm={12} md={colListMd} lg={colListLg} key={product.id}>
                                        <ProductComponent productStyle={productStyle} 
                                        title={product.title}
                                        price={product.price}
                                        description={product.description}
                                        image={product.image}
                                        product={product}
                                        />
                                    </Col>
                                ))
                                }
                            </Row>
                            {/* end products */}
                        </Col>
                        {/* end products */}
                    </Row>
                </Container>
            </section>

            {/* start Footer */}
            <Footer />
            {/* end Footer */}
        </div>
    )
}

export default Shop
