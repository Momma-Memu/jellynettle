import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import Comments from './Comments';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';


const Post = ({post}) => {

    const handleDropDown = (e) => {
        console.log(e.target)
        if(dropBool){
            setDropBool(false)
        } else {
            setDropBool(true)
        }
    }

    const [dropBool, setDropBool] = useState(false);

    const { userPosts } = useSelector(state => state.posts)

    const comments = post.Comments.map((comment) => <Comments key={comment.message} data={comment} /> )

    return (
        <div className='postContainer' key={post.message}>
            <NavLink to={`/profile/${post.userId}`}  className='userNameLink'>
                <div className='userName'>{post.User.userName}</div>
            </NavLink>
            <div className='userPost'>{post.message}</div>
            <div className='postDate'>{post.createdAt.slice(0, 10)}</div>
            <div className='upvotes'></div>
            <div className='postNav'>
            <div className='commentsButton' onClick={handleDropDown}>Comments
                <ArrowDropDownRoundedIcon onClick={handleDropDown} className='commentsIcon'/>
            </div>
            <div className='likeButton'>Like</div>
            </div>
            {dropBool ? comments : null}
        </div>
    )
}

export default Post;