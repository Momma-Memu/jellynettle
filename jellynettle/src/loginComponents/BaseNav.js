import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import Container from '@material-ui/core/Container';
// import Button from '@material-ui/core/Button'
import { baseNavStyles } from '../styles/loginSignUpStyle';
import { NavLink } from 'react-router-dom';
import logo from '../styles/LogoMakr_9328RJ.png'

const BaseNav = () => {
    const container = baseNavStyles();
    return (
        <header className={container.root}>
            <img src={logo} className={container.logo}/>
            <div className={container.link}>
                <NavLink exact to='/safety' className={container.linkText}>
                Safety</NavLink>
            </div>
            <div className={container.link}>
                <NavLink exact to='/about' className={container.linkText}>
                What is JellyNettle?</NavLink>
            </div>
            <div className={container.link}>
                <NavLink exact to='/about' className={container.linkText}>
                Support</NavLink>
            </div>
        </header>
    )
}

export default BaseNav