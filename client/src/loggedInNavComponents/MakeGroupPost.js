import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { createGroupPost } from '../store/posts';


const MakeGroupPost = (props) => {
    const { id } = useSelector(state => state.authentication);
    const [ message, setMessage ] = useState('');

    const dispatch = useDispatch()

    const groupId = props.groupId;

    const handleSubmit = async (e) => {
        dispatch(createGroupPost(id, groupId, message))
        setMessage('')
    }



    const updateMessage = e => setMessage(e.target.value);

    return (
        <div className='makePostContainer'>
            <TextField id="standard-basic"
            value={message}
            onChange={updateMessage}
            label="What's up, group?" />
            <div className='postButton' onClick={handleSubmit}>Post</div>
        </div>
    )
}

export default MakeGroupPost;