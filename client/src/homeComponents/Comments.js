import React, { useEffect } from 'react';
import { getComments } from '../store/comments';
import { useSelector, useDispatch } from 'react-redux';

const Comments = ({data}) => {

    return (
        <div className={'commentsContainer'}>
            <div>{data.User.userName}</div>
            <div>{data.message}</div>
        </div>
    )
}

export default Comments;