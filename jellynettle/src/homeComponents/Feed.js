import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { grabPosts } from '../store/posts';

const Feed = () => {
    const { id } = useSelector(state => state.authentication)
    // const { userPosts } = useSelector(state => state.posts)
    const dispatch = useDispatch();

    dispatch(grabPosts(id))
    // const posts = grabPosts(id)
    // console.log(typeof posts)
    // console.log(posts)
    // posts.map(post => {
    //     return(
    //         <div>{post.message}</div>
    //     )
    // });

    return(
        <div className="">
            <div className="post">

            </div>

        </div>
    )
}

export default Feed;