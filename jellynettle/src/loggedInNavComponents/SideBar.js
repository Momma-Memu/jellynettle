import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFriends, getGroups } from '../store/friends';
import { NavLink } from 'react-router-dom'

const SideBar = () => {
    const { id } = useSelector(state => state.authentication);
    const { friends } = useSelector(state => state.friends) || [];
    const { groups } = useSelector(state => state.friends) || [];

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFriends(id))
        dispatch(getGroups(id))
    }, []);

    const friendMapper = (friends) => {
        return friends.map(friend => {
            return (
                <NavLink to={`/profile/${friend.friendId}`} className='sideBarFriendLink'>
                    <div className='sideBarFriend'>{friend.friendName}</div>
                </NavLink>
            )
        })
    }

    const groupMapper = (groups) => {
        return groups.map(group => {
            return (
                <NavLink to={`/group/${group.id}`} className='sideBarFriendLink'>
                    <div className='sideBarFriend'>{group.name}</div>
                </NavLink>
            )
        })
    }
    return (
        <div className='sideBarContainer'>
            <div className='friendsContainer'>
                <p className='friendsSection'>Friends:</p>
                {!friends ? null : friendMapper(friends)}
            </div>
            <div className='groupsContainer'>
                <p className='groupsSection'>Groups:</p>
                {!groups ? null : groupMapper(groups)}
            </div>
            <div className='sideBarBuffer'></div>
        </div>
    )
}

export default SideBar;