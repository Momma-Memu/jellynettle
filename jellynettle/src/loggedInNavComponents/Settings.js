import React, { useState } from 'react';
import MainNav from './MainNav';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import loginFieldStyles, { signUpContainerStyles } from '../styles/loginSignUpStyle';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../store/updateUser';

const Settings = () => {
    const fieldClasses = loginFieldStyles();
    const containerClasses = signUpContainerStyles();

    const { id } = useSelector(state => state.authentication)

    const [fullName, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [gender, setGender] = useState('');

    const updateFullName = e => setFullname(e.target.value);
    const updateEmail = e => setEmail(e.target.value);
    const updatePassword = e => setPassword(e.target.value);
    const updateConfirmPassword = e => setConfirmPassword(e.target.value);
    const updateUserName = e => setUserName(e.target.value);
    const updateGender = e => setGender(e.target.value);

    const dispatch = useDispatch();

    const handleSubmit = () => {
        const data = {id, fullName, email, password, confirmPassword, userName, gender};
        for(let key in data){
            if(data[key] === ''){
                delete data[key]
            }
        }
        // console.log(data)
        dispatch(updateUser(data))
    }

    return(
        <div className='main-background'>
            <MainNav />
            <Container className={containerClasses.root2}>
                    <TextField className={fieldClasses.root}
                    label="Edit Full Name"
                    value={fullName}
                    onChange={updateFullName}
                    />
                    <TextField className={fieldClasses.root}
                    label="Edit Email"
                    value={email}
                    onChange={updateEmail}
                    type="Email"/>
                    <TextField className={fieldClasses.root}
                    required id="standard-required"
                    label="Edit Password"
                    value={password}
                    onChange={updatePassword}
                    type="password"
                    autoComplete="current-password"/>
                    <TextField className={fieldClasses.root}
                    label="Confirm Edited Password"
                    value={confirmPassword}
                    onChange={updateConfirmPassword}
                    type="password"
                    autoComplete="current-password"/>
                    <TextField className={fieldClasses.root}
                    label="Edit Username"
                    value={userName}
                    onChange={updateUserName}
                    type="Standard"/>
                    <TextField className={fieldClasses.root}
                    label="Change Gender"
                    value={gender}
                    onChange={updateGender}
                    />
                    <Button className={containerClasses.Button}
                    onClick={handleSubmit}>Submit Changes</Button>
                </Container>
                <div className='buffer3'></div>
        </div>
    )
}

export default Settings;