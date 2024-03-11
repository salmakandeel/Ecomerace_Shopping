import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/images/logo/logo.png"
const NavItems = () => {
    const [menuToggle, setMenuToggle] = useState(false)
    const [socialToggle, setsocialToggle] = useState(false)
    const [headerFixed, setHeaderFixed] = useState(false)
    window.addEventListener('scroll', () => {
        window.screenY > 200 ? setHeaderFixed(true) : setHeaderFixed(false)
        // console.log( window.screenY);
    })
    return (
        <header className={`header-section style-4 ${headerFixed == true ? "header-fixed fadeInUp" : ""} `}>
            {/*  header top start */}
            <div className={`header-top d-md-none  ${socialToggle == true ? "open" : ""}`}>
                <div className='container'>
                    <div className='header-top-area'>

                        <Link to="/signup" className='lab-btn me-3'>Create Account</Link>
                        <Link to="/login">log in</Link>
                    </div>

                </div>
            </div>
            {/*  header bottom start */}
            <div className='header-bottom'>
                <div className='container'>
                    <div className='header-wrapper'>
                        {/* logo */}
                        <div className="logo-search-acte">
                            <Link to={"/"}>
                                <img src={logo} /></Link>
                        </div>
                        {/* menu area */}
                        <div className="menu-area">
                            <div className="menu">
                                <ul className={`lab-ul ${menuToggle?"active":""}`}>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop">Shop</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </ul>
                               </div>
                               {/* sign in && log in  */}
                               <Link to="/sign-up" className="lab-btn me-3 d-none d-md-block">Create Account</Link>
                                <Link to="/login" className='d-none d-md-block'>Log In</Link>
                            {/*menu toggler  */}
                            <div onClick={()=>setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle?"active":""}`}>
                                <span>
                                </span>
                                <span>
                                </span>
                                <span>
                                </span>
                            </div>
                            {/* social toggle */}
                            <div className="ellepis-bar d-md-none"
                            onClick={()=>setsocialToggle(!socialToggle)}
                            >
                            <i className="icofont-info"></i>
                            
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </header>

    )
}

export default NavItems