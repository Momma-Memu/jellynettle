import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
// import Container from '@material-ui/core/Container';
// import Button from '@material-ui/core/Button'
import { useSelector, useDispatch } from 'react-redux';
// import loginFieldStyles, { loginContainerStyles } from '../styles/loginSignUpStyle';
// import { grabPosts } from '../store/posts';
// import { NavLink } from 'react-router-dom'
import { createPost } from '../store/posts';


const MakePost = () => {
    const { id } = useSelector(state => state.authentication);
    const [ message, setMessage ] = useState('');

    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        dispatch(createPost(id, message))
        setMessage('')
    }



    const updateMessage = e => setMessage(e.target.value);

    return (
        <div className='makePostContainer'>
            <TextField id="standard-basic"
            value={message}
            onChange={updateMessage}
            label="What's up?" />
            <div className='postButton' onClick={handleSubmit}>Post</div>
        </div>
    )
}

export default MakePost;