import React from 'react'
import './LogoBrandsSlide.css'
import { Container } from 'react-bootstrap'


const LogoBrandsSlide = () => {
    return (
            <section className="logo-brands">
                <Container>
                    <marquee behavior="scroll" direction="">
                        <div className="img">
                            <img src="images/logo-brands/logo-01.png" alt="logo-brand" />
                        </div>
                        <div className="img">
                            <img src="images/logo-brands/logo-02.png" alt="logo-brand" />
                        </div>
                        <div className="img">
                            <img src="images/logo-brands/logo-03.png" alt="logo-brand" />
                        </div>
                        <div className="img">
                            <img src="images/logo-brands/logo-04.png" alt="logo-brand" />
                        </div>
                        <div className="img">
                            <img src="images/logo-brands/logo-05.png" alt="logo-brand" />
                        </div>
                        <div className="img">
                            <img src="images/logo-brands/logo-06.png" alt="logo-brand" />
                        </div>
                        <div className="img">
                            <img src="images/logo-brands/logo-07.png" alt="logo-brand" />
                        </div>
                        <div className="img">
                            <img src="images/logo-brands/logo-08.png" alt="logo-brand" />
                        </div>
                    </marquee>
                </Container>
            </section>
    )
}

export default LogoBrandsSlide
