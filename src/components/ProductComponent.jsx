import React, { useState } from 'react'
import './ProductComponent.css'
import { Link } from 'react-router-dom';
// React Icon 
import { FiHeart } from "react-icons/fi";
import { TiHeart } from "react-icons/ti";
import { BsCart4 } from "react-icons/bs";
import { MdOutlineStarOutline } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
// end React Icon
import { addToCart, insertCart } from '../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import favoriteSlice, { addProductToFavorite } from '../store/favoriteSlice';




const ProductComponent = ({productStyle , title, price, description, image, product, heartStyle}) => {

    const [inFav, setInfav] = useState('')

    const favorite = useSelector((state)=> state.favorite)

    const dispatch = useDispatch() 

    const addToCartProduct = ()=>{
        dispatch(addToCart(product))
    }

    const addFavoriteProduct = ()=>{
        // dispatch(addToFavorite(product))
        dispatch(addProductToFavorite(product))
        setInfav('in-fav')
    }



    return (
        <div className='product-component mb-4'>
                <div className={`product ${productStyle}`} >
                <div className="img">
                    <img src={image} alt="image product" />
                    <Link to={`/details/${product.id}`}>show details<IoEyeOutline /></Link>
                </div>
                <div className="product-text">
                    <div className='name-and-cart'>
                        <h5>{title.slice(0, 25)}...</h5>
                        <div className="cart-and-fav-icons">
                            <div className="add-cart" onClick={addToCartProduct}>
                            <BsCart4 />
                            </div>
                            <div className={`add-fav ${inFav}`} onClick={addFavoriteProduct}>
                                <FiHeart  className={`heart1 ${heartStyle}`}/>
                                <TiHeart  className='heart2 '/>
                                <TiHeart  className='heart3 '/>
                                <TiHeart  className='heart4 '/>
                            </div>
                        </div>
                    </div>
                    <div className='price-and-star'>
                        <h6>${price}</h6>
                        <div className="star-icons">
                        <MdOutlineStarOutline />
                        <MdOutlineStarOutline />
                        <MdOutlineStarOutline />
                        <MdOutlineStarOutline />
                        <MdOutlineStarOutline />
                        </div>
                    </div>
                    <p className="desc">{description}</p>
                </div>
                </div>
        </div>
    )
}

export default ProductComponent
