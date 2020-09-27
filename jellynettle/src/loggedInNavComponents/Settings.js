import React from 'react';
import MainNav from './MainNav';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom';
import loginFieldStyles, { signUpContainerStyles } from '../styles/loginSignUpStyle';

const Settings = () => {
    const fieldClasses = loginFieldStyles();
    const containerClasses = signUpContainerStyles();

    return(
        <div>
            <MainNav />
            <Container className={containerClasses.root}>
                    <TextField className={fieldClasses.root}
                    label="Edit Full Name"/>
                    <TextField className={fieldClasses.root}
                    label="Edit Email" type="Email"/>
                    <TextField className={fieldClasses.root}
                    required id="standard-required"
                    label="Edit Password"
                    type="password"
                    autoComplete="current-password"/>
                    <TextField className={fieldClasses.root}
                    label="Confirm Edited Password"
                    type="password"
                    autoComplete="current-password"/>
                    <TextField className={fieldClasses.root}
                    label="Edit Username"
                    type="Standard"/>
                    <TextField className={fieldClasses.root}
                    label="Change Gender" />
                    <Button className={containerClasses.Button}>Submit Changes</Button>
                </Container>
        </div>
    )
}

export default Settings;