import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFriends } from '../store/friends';
import { NavLink } from 'react-router-dom'

const SideBar = () => {
    const { id } = useSelector(state => state.authentication);
    const { friends } = useSelector(state => state.friends);
    // const [friendArray, setFriendArray] = useState(friends)


    const dispatch = useDispatch();

    useEffect(() => {
        // if(friends) return;
        dispatch(getFriends(id))
    }, []);

    const friendMapper = () => {
        console.log(friends)
        // if(!friends) return null;
        return friends.map(friend => {
            return (
                <NavLink to={`/profile/${friend.friendId}`} className='sideBarFriendLink'>
                    <div className='sideBarFriend'>{friend.friendName}</div>
                </NavLink>
            )
        })
    }
    return (
        <div className='sideBarContainer'>
            <div className='friendsContainer'>
                <p>Friends:</p>
                {!friends ? null : friendMapper()}
            </div>
            <div className='groupsContainer'>
                <p>Groups:</p>
            </div>
        </div>
    )
}

export default SideBar;