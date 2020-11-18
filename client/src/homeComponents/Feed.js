import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { grabPosts } from '../store/posts';
import { NavLink } from 'react-router-dom'
import MakePost from './MakePost';
// import Comments from './Comments';
import { getComments } from '../store/comments';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import Post from './Post';


const Feed = () => {
    const { id } = useSelector(state => state.authentication)
    const { userPosts } = useSelector(state => state.posts)
    const { friendPosts } = useSelector(state => state.posts)

    const dispatch = useDispatch();

    // let comments = false;

    useEffect(() => {
        dispatch(grabPosts(id))
    }, []);

    const handleDropDown = (e) => {
        console.log(e.target)
    }


    const comments = (comments) => {
        return comments.map(comment => {
            return (
                <div className='commentsContainer'>
                    <div>{comment.message}</div>
                </div>
            )
        })
    }

    const posts = (userPosts) => {
        return userPosts.map(post => <Post key={post.id} post={post}/>)
    }

    const mapFriendPosts = (friendPosts) => {
        return friendPosts.map(post => <Post key={post.id} post={post} />)
    }

    if(!userPosts){
        return null;
    } else {

        const shuffle = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        const combine = (arr1, arr2) => {
            const array = arr1.concat(arr2)
            return shuffle(array)
        }


        return(
            <>
                <MakePost />
                <div className="userFeed">

                    {combine(posts(userPosts), mapFriendPosts(friendPosts))}
                    <div className='buffer2'></div>
                </div>
            </>
        )

    }
}

export default Feed;