import React from 'react';
import { Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import loginFieldStyles, { loginContainerStyles } from '../styles/loginSignUpStyle';
import { NavLink } from 'react-router-dom';
import BaseNav from './BaseNav';
import bg1 from '../styles/images/background1.png'
import bg2 from '../styles/images/background2.png'


class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateEmail = this.updateValue('email');
        this.updatePassword = this.updateValue('password');
    }

    async handleSubmit(e) {
        e.preventDefault();
        const response = await fetch(`/api/session`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.state),
        });

        if (response.ok) {
          const { player } = await response.json();
          this.props.updateUser(player.id);
          this.setState({ currentUserId: player.id });
        }
    }

    updateValue = name => e => {
        this.setState({ [name]: e.target.value });
    }

    render(){
        const fieldClasses = loginFieldStyles();
        const containerClasses = loginContainerStyles();
        if (this.state.currentUserId) {
            return <Redirect to="/" />;
        }

        return(
            <div className="main-background">
                <div className={containerClasses.outerDiv}>
                    <BaseNav />
                    <Container className={containerClasses.root}>
                        <TextField className={fieldClasses.root}
                        required id="standard-required"
                        value={this.state.email}
                        onChange={this.updateEmail}
                        label="Email"/>
                        <TextField className={fieldClasses.root}
                        required id="standard-required"
                        label="Password"
                        value={this.state.password}
                        onChange={this.updatePassword}
                        type="password"
                        autoComplete="current-password"/>
                        <Button className={fieldClasses.Button} onClick={this.handleSubmit}>Login</Button>
                        <NavLink exact to='/signup' className={containerClasses.signUp}>
                        Don't have an account? Click here!</NavLink>
                    </Container>
                    <img src={bg1} className='bg1' alt='people' />
                    <img src={bg2} className='bg2' alt='people' />
                </div>
            </div>
        )
    }
}

export default Login;