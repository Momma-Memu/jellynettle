import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import Container from '@material-ui/core/Container';
// import Button from '@material-ui/core/Button'
import { baseNavStyles } from '../styles/loginSignUpStyle';
import { NavLink } from 'react-router-dom';
import logo from '../styles/images/LogoMakr_9328RJ.png'

const BaseNav = () => {
    const container = baseNavStyles();
    return (
        <header className={container.root}>
            <img src={logo} className={container.logo} alt='logo'/>
            <div className={container.link}>
                <NavLink exact to='/safety' className={container.linkText}>
                Safety</NavLink>
            </div>
            <div className={container.link}>
                <NavLink exact to='/about' className={container.linkText}>
                What is JellyNettle?</NavLink>
            </div>
            <div className={container.link}>
                <NavLink exact to='/login' className={container.linkText}>
                Login</NavLink>
            </div>
            <div className={container.link}>
                <NavLink exact to='/signup' className={container.linkText}>
                Sign Up</NavLink>
            </div>

        </header>
    )
}

export default BaseNav