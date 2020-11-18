import React, { useEffect, useState } from 'react';
import { getComments } from '../store/comments';
import { useSelector, useDispatch } from 'react-redux';

const Comments = ({data}) => {
    const [newComment, setNewComment] = useState('')



    const updateNewComment = e => setNewComment(e.target.value)

    return (
        <div className={'commentsContainer'}>
            <div className='comments-username'>{data.User.userName}</div>
            <div className='comments-message'>{data.message}</div>
            <div className='comment-date'>{data.createdAt.slice(0, 10)}</div>
        </div>
    )
}

export default Comments;