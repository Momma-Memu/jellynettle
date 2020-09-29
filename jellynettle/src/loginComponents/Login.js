import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import loginFieldStyles, { loginContainerStyles } from '../styles/loginSignUpStyle';
import { NavLink } from 'react-router-dom';
import BaseNav from './BaseNav';
import bg1 from '../styles/images/background1.png'
import bg2 from '../styles/images/background2.png'
import { login } from '../store/authentication';


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { id } = useSelector(state => state.authentication)

    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        dispatch(login(email, password))
    }
    const { message } = useSelector(state => state.authentication)

    const fieldClasses = loginFieldStyles();
    const containerClasses = loginContainerStyles();

    if (id) {
        return <Redirect to="/"/>;
    }

    const updateEmail = e => setEmail(e.target.value);
    const updatePassword = e => setPassword(e.target.value);

    return(
        <div className="main-background">
            <div className={containerClasses.outerDiv}>
                <BaseNav />
                <Container className={containerClasses.root}>
                    <p>{message}</p>
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
                    <Button className={fieldClasses.Button} onClick={handleSubmit}>Login</Button>
                    <NavLink exact to='/signup' className={containerClasses.signUp}>
                    Don't have an account? Click here!</NavLink>
                </Container>
                <img src={bg1} className='bg1' alt='people' />
                <img src={bg2} className='bg2' alt='people' />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps)(Login);