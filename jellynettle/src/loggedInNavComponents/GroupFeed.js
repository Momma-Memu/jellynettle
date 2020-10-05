import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { grabGroupPosts } from '../store/posts';
import { NavLink } from 'react-router-dom'
import MakeGroupPost from './MakeGroupPost';


const Feed = (props) => {
    const id = props.groupId
    const { groupPosts } = useSelector(state => state.posts);

    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(grabGroupPosts(id))
    }, []);

    const posts = (groupPosts) => {
        return groupPosts.map(post => {
            return (
                <div className='postContainer' key={post.message}>
                    <NavLink to={`/profile/${post.userId}`}  className='userNameLink'>
                        <div className='userName'>{post.User.userName}</div>
                    </NavLink>
                    <div className='userPost'>{post.message}</div>
                    <div className='postDate'>{post.createdAt.slice(0, 10)}</div>
                    <div className='upvotes'></div>
                </div>
            )
        })
    }

    if(!groupPosts){
        return null;
    } else {
        return(
            <>
                <MakeGroupPost groupId={id}/>
                <div className="userFeed">
                    {!groupPosts ? null : posts(groupPosts)}
                    <div className='buffer2'></div>
                </div>
            </>
        )

    }
}

export default Feed;