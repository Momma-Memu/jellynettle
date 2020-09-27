import React from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import loginFieldStyles, { loginContainerStyles } from '../styles/loginSignUpStyle';
import { NavLink } from 'react-router-dom';
import BaseNav from './BaseNav';
import bg1 from '../styles/background1.png'
import bg2 from '../styles/background2.png'

const Login = () => {

    const fieldClasses = loginFieldStyles();
    const containerClasses = loginContainerStyles();

    return(
        <div className="main-background">
            <div className={containerClasses.outerDiv}>
                <BaseNav />
                <Container className={containerClasses.root}>
                    <TextField className={fieldClasses.root}
                    required id="standard-required"
                    label="Email"/>
                    <TextField className={fieldClasses.root}
                    required id="standard-required"
                    label="Password"
                    type="password"
                    autoComplete="current-password"/>
                    <Button className={fieldClasses.Button}>Login</Button>
                    <NavLink exact to='/signup' className={containerClasses.signUp}>
                    Don't have an account? Click here!</NavLink>
                </Container>
                <img src={bg1} className='bg1' alt='people' />
                <img src={bg2} className='bg2' alt='people' />
            </div>
        </div>
    )
}

export default Login;