import React, { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Navs from '../components/Navs'
import './LogIn.css'
// React Icon 
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { useDispatch } from 'react-redux'
import { insertAuth } from '../store/authSlice'


const SignUp = () => {
    const inputName = useRef()
    const inputEmail = useRef()
    const inputPass = useRef()
    const errorRef = useRef()
    const eyeShow = useRef()
    const eyeOff = useRef()

    const dispatch = useDispatch()


    const handleSubmit = (e)=>{
        e.preventDefault()
        const userData = {
            userName : inputName.current.value,
            userEmail : inputEmail.current.value,
            userPass : inputPass.current.value
        }
        if(inputName.current.value === ''){
            errorRef.current.innerHTML = 'Please enter your Username'
            inputName.current.style.border = '1px solid #e20000'
            return
        }
        if(inputEmail.current.value === ''){
            errorRef.current.innerHTML = 'Please enter your email'
            inputEmail.current.style.border = '1px solid #e20000'
            return
        }
        if(!inputEmail.current.value.includes('@')){
            errorRef.current.innerHTML = "Please enter '@' in the email field"
            inputEmail.current.style.border = '1px solid #e20000'
            return
        }
        if(inputPass.current.value === ''){
            errorRef.current.innerHTML = 'Please enter your password'
            inputPass.current.style.border = '1px solid #e20000'
            return
        }
        else{
            errorRef.current.innerHTML = 'Success Sign up'
            errorRef.current.style.color = 'green'
            setTimeout(()=>{
                errorRef.current.innerHTML = ''
                dispatch(insertAuth(userData))
                console.log(userData);
            },3000)
        }

    }




    const handleKeyName = ()=>{
        if(inputName.current.value !== ''){
            inputName.current.style.border = '1px solid #cecece'
            inputName.current.style.outLine = 'none'
        }else{
            inputName.current.style.border = '1px solid #e20000'
            inputName.current.style.outLine = 'none'
            errorRef.current.innerHTML = 'Please enter your Username'
            errorRef.current.style.color = '#e20000'
        }
    }
    const handleKeyEmail = ()=>{
        if(inputEmail.current.value !== ''){
            inputEmail.current.style.border = '1px solid #cecece'
            inputEmail.current.style.outLine = 'none'
        }else{
            inputEmail.current.style.border = '1px solid #e20000'
            inputEmail.current.style.outLine = 'none'
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
            inputPass.current.style.outLine = 'none'
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
                        
                        <Col className='d-none d-lg-flex  col-lg-6'>
                            <div className="img">
                                <img src="images/login/Computer login-rafiki.png" alt="log-in-image" />
                            </div>
                        </Col>

                        <Col className='col-12 col-lg-6'>
                            <div className="form">
                                <form onSubmit={handleSubmit} noValidate>
                                    <div className="text">
                                        <h3>Creat a new account</h3>
                                        <p>Please Register using account detail bellow.</p>
                                    </div>
                                    <input type="text" placeholder='Username' onKeyUp={handleKeyName} ref={inputName}/>
                                    <input type="email" placeholder='Email'  onKeyUp={handleKeyEmail} ref={inputEmail}/>
                                    <div className="pass">
                                        <input type="password" placeholder='Password' onKeyUp={handleKeyPass} data-status='hide' ref={inputPass}/>
                                        <div className='eye' onClick={showAndHidePass}>
                                            <span ref={eyeShow}><LuEye /></span>
                                            <span  ref={eyeOff}><LuEyeOff /></span>
                                        </div>
                                    </div>
                                        <p className='error' ref={errorRef}></p>
                                    <button type="submit">sign up</button>
                                    <p>Already have an account? <Link to='/log-in'>logIn</Link></p>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </div>
    )
}

export default SignUp
