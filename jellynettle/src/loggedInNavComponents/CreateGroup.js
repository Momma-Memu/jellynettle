import React, { useState } from 'react';
import loginFieldStyles, { loginContainerStyles } from '../styles/loginSignUpStyle';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import MainNav from './MainNav';


const CreateGroup = () => {
    const fieldClasses = loginFieldStyles();
    const containerClasses = loginContainerStyles();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async () => {
        // dispatch(login(email, password))
    }

    const { id } = useSelector(state => state.authentication)

    const updateName = e => setName(e.target.value);
    const updateDescription = e => setDescription(e.target.value);

    return(
        <div>
            <MainNav />
            <div className='createGroupForm'>
                <Container className={containerClasses.root}>
                    <h3>Create Group</h3>
                    <TextField className={fieldClasses.root}
                    required id="standard-required"
                    value={name}
                    onChange={updateName}
                    label="Name"/>
                    <TextField className={fieldClasses.root}
                    required id="standard-required"
                    label="Group Description"
                    value={description}
                    onChange={updateDescription}/>
                    <Button className={fieldClasses.Button} onClick={handleSubmit}>Create</Button>
                </Container>
            </div>
        </div>
    )
}



export default CreateGroup