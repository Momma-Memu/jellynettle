import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import loginFieldStyles, { loginContainerStyles } from '../styles/loginSignUpStyle';
import { NavLink } from 'react-router-dom';
import BaseNav from './BaseNav';
import bg1 from '../styles/images/background1.png'
import bg2 from '../styles/images/background2.png'


const Login = (props) => {

    const fieldClasses = loginFieldStyles();
    const containerClasses = loginContainerStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [currentUserId, setCurrentUserId] = useState(null)

    const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/session`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email, password}),
        });

        if (response.ok) {
            const { user } = await response.json();
            // props.updateUser(user.id); what is this??
            setCurrentUserId(user.id)
        }
    }

    const updateEmail = e => setEmail(e.target.value);
    const updatePassword = e => setPassword(e.target.value);

    return(
        <div className="main-background">
            <div className={containerClasses.outerDiv}>
                <BaseNav />
                <Container className={containerClasses.root}>
                    <TextField className={fieldClasses.root}
                    required id="standard-required"
                    value={email}
                    onChange={updateEmail}
                    label="Email"/>
                    <TextField className={fieldClasses.root}
                    required id="standard-required"
                    label="Password"
                    value={password}
                    onChange={updatePassword}
                    type="password"
                    autoComplete="current-password"/>
                    <Button className={fieldClasses.Button} onclick={handleSubmit}>Login</Button>
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