import React, { useRef } from 'react'
import './LogIn.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Navs from '../components/Navs'

// React Icon 
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";



const LogIn = () => {
    const inputEmail = useRef()
    const inputPass = useRef()
    const errorRef = useRef()
    const eyeShow = useRef()
    const eyeOff = useRef()



    const handleSubmit = (e)=>{
        e.preventDefault()
        if(inputEmail.current.value === ''){
            inputEmail.current.style.border = '1px solid #e20000'
            errorRef.current.innerHTML = 'Please enter your email'
            errorRef.current.style.color = '#e20000'
            return
        }
        if(inputPass.current.value === '' ){
            inputPass.current.style.border = '1px solid #e20000'
            errorRef.current.innerHTML = 'Please enter your password'
            errorRef.current.style.color = '#e20000'
            return
        }
        else{
            errorRef.current.style.color = 'green'
            errorRef.current.innerHTML = 'Success Log in'
            setTimeout(()=>{
                errorRef.current.innerHTML = ''
            },3000)
        }
    }

    const handleKeyName = ()=>{
        if(inputEmail.current.value !== ''){
            inputEmail.current.style.border = '1px solid #cecece'
            inputEmail.current.style.outLine = 'none'
            
        }else{
            inputEmail.current.style.border = '1px solid #e20000'
            errorRef.current.innerHTML = 'Please enter your email'
            errorRef.current.style.color = '#e20000'
        }
        if(inputEmail.current.value !== '' && !inputEmail.current.value.includes('@')){
            errorRef.current.innerHTML = "Please enter '@' in the email field"
            inputEmail.current.style.border = '1px solid #e20000'
            return
        }
    }
    const handleKeyPass = ()=>{
        if(inputPass.current.value !== ''){
            inputPass.current.style.border = '1px solid #cecece'
            inputPass.current.style.outLine = 'none'
        }else{
            inputPass.current.style.border = '1px solid #e20000'
            errorRef.current.innerHTML = 'Please enter your password'
            errorRef.current.style.color = '#e20000'
        }
    }


    const showAndHidePass = ()=>{
        if(inputPass.current.dataset.status === 'hide'){
            inputPass.current.setAttribute('type', 'text')
            eyeShow.current.style.display = 'unset'
            eyeOff.current.style.display = 'none'
            inputPass.current.dataset.status = 'show'
        }else{
            inputPass.current.setAttribute('type', 'password')
            eyeShow.current.style.display = 'none'
            eyeOff.current.style.display = 'unset'
            inputPass.current.dataset.status = 'hide'
        }
    }

    return (
        <div className='log-in-and-sign-up-page'>
            <Navs  path=""/>
            <section className="content">
                <div className="container-fluid">
                    <Row>
                    <Col className='col-12 col-lg-6'>
                            <div className="form">
                                <form onSubmit={handleSubmit}>
                                    <div className="text">
                                        <h3>Log in</h3>
                                        <p>Please Register using account detail bellow.</p>
                                    </div>
                                    <input type="text" placeholder='Email or username' onKeyUp={handleKeyName}  ref={inputEmail}/>
                                    <div className="pass">
                                        <input type="password" placeholder='Password' onKeyUp={handleKeyPass} data-status='hide' ref={inputPass}/>
                                        <div className='eye' onClick={showAndHidePass}>
                                            <span ref={eyeShow}><LuEye /></span>
                                            <span  ref={eyeOff}><LuEyeOff /></span>
                                        </div>
                                    </div>
                                    <p className='error' ref={errorRef}></p>
                                    <button type="submit">Log In</button>
                                    <p>Don`t have an account? <Link to='/sign-up'>sign up</Link></p>
                                </form>
                            </div>
                        </Col>
                        <Col className='d-none d-lg-flex  col-lg-6'>
                            <div className="img">
                                <img src="images/login/Computer login-rafiki.png" alt="log-in-image" />
                            </div>
                        </Col>
                        
                    </Row>
                </div>
            </section>
        </div>
    )
}

export default LogIn
