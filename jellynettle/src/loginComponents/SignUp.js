import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import loginFieldStyles, { signUpContainerStyles } from '../styles/loginSignUpStyle';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import BaseNav from './BaseNav';
import bg1 from '../styles/images/background1.png'
import bg2 from '../styles/images/background2.png'
import { signUpUser } from '../store/authentication';


const SignUp = () => {

    const fieldClasses = loginFieldStyles();
    const containerClasses = signUpContainerStyles();

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userName, setUsername] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');

    const { message } = useSelector(state => state.authentication)

    const updateFullName = e => setFullName(e.target.value)
    const updateEmail = e => setEmail(e.target.value);
    const updatePassword = e => setPassword(e.target.value);
    const updateConfirmPassword = e => setConfirmPassword(e.target.value)
    const updateUserName = e => setUsername(e.target.value)
    const updateDob = e => setDob(e.target.value)
    const updateGender = e => setGender(e.target.value)

    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        const data = { fullName, email, password, confirmPassword, userName, dob, gender }
        dispatch(signUpUser(data))
    }

    const { id } = useSelector(state => state.authentication)

    if (id) {
        return <Redirect to="/"/>;
    }

    return(
        <div className={containerClasses.outerDiv}>
            <BaseNav />
            <Container className={containerClasses.root}>
                <p>{message}</p>
                <TextField className={fieldClasses.root}
                required id="standard-required"
                value={fullName}
                onChange={updateFullName}
                label="Full Name"/>
                <TextField className={fieldClasses.root}
                required id="standard-required"
                value={email}
                onChange={updateEmail}
                label="Email" type="Email"/>
                <TextField className={fieldClasses.root}
                required id="standard-required"
                label="Password"
                value={password}
                onChange={updatePassword}
                type="password"
                autoComplete="current-password"/>
                <TextField className={fieldClasses.root}
                required id="standard-required"
                label="Confirm Password"
                value={confirmPassword}
                onChange={updateConfirmPassword}
                type="password"
                autoComplete="current-password"/>
                <TextField className={fieldClasses.root}
                required id="standard-required"
                label="Username"
                value={userName}
                onChange={updateUserName}
                type="Standard"/>
                <TextField
                required id="date"
                label="Birthday"
                value={dob}
                onChange={updateDob}
                type="date"
                className={fieldClasses.root}
                InputLabelProps={{
                  shrink: true,
                }}
                />
                <TextField className={fieldClasses.root}
                label="Gender"
                value={gender}
                onChange={updateGender}
                />
                <Button className={containerClasses.Button} onClick={handleSubmit}>Sign Up</Button>
                <NavLink exact to='/login' className={containerClasses.signUp}>
                Already have an account? Click here!</NavLink>
            </Container>
            <img src={bg1} className='bg1' alt='people'/>
            <img src={bg2} className='bg2' alt='people'/>
        </div>
    )
}

export default SignUp;