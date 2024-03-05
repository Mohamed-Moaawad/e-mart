import React from 'react'
import './HeaderPage.css'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

// React Icon
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";


const HeaderPage = ({page}) => {
    return (
    <div className='header-page'>
        <Container>
            <div>
                <h6>
                    <Link to='/'><IoHomeOutline /> home</Link>
                    <MdKeyboardDoubleArrowRight /> 
                    <span>{page}</span>
                </h6>
                <h6>{page}</h6>
            </div>
        </Container>
    </div>
    )
}

export default HeaderPage
