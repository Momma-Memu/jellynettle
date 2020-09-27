import React from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import loginFieldStyles, { signUpContainerStyles } from '../styles/loginSignUpStyle';
import { NavLink } from 'react-router-dom';
import BaseNav from './BaseNav';
import bg1 from '../styles/background1.png'
import bg2 from '../styles/background2.png'


const SignUp = () => {

    const fieldClasses = loginFieldStyles();
    const containerClasses = signUpContainerStyles();

    return(
        <div className={containerClasses.outerDiv}>
            <BaseNav />
            <Container className={containerClasses.root}>
                <TextField className={fieldClasses.root}
                required id="standard-required"
                label="Full Name"/>
                <TextField className={fieldClasses.root}
                required id="standard-required"
                label="Email" type="Email"/>
                <TextField className={fieldClasses.root}
                required id="standard-required"
                label="Password"
                type="password"
                autoComplete="current-password"/>
                <TextField className={fieldClasses.root}
                required id="standard-required"
                label="Confirm Password"
                type="password"
                autoComplete="current-password"/>
                <TextField className={fieldClasses.root}
                required id="standard-required"
                label="Username"
                type="Standard"/>
                <TextField
                required id="date"
                label="Birthday"
                type="date"
                className={fieldClasses.root}
                InputLabelProps={{
                  shrink: true,
                }}
                />
                <TextField className={fieldClasses.root}
                label="Gender" />
                <Button className={containerClasses.Button}>Sign Up</Button>
                <NavLink exact to='/login' className={containerClasses.signUp}>
                Already have an account? Click here!</NavLink>
            </Container>
            <img src={bg1} className='bg1' alt='people'/>
            <img src={bg2} className='bg2' alt='people'/>
        </div>
    )
}

export default SignUp;