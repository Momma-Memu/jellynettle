import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMembers } from '../store/members';
import { NavLink } from 'react-router-dom';

const SideBar = (props) => {
    // const { id } = useSelector(state => state.authentication);
    // const { friends } = useSelector(state => state.friends);
    const members = useSelector(state => state.members);
    const id = props.groupId
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMembers(id))
    }, []);

    const memberMapper = (members) => {
        return members.map(member => {
            return (
                <NavLink to={`/profile/${member.userId}`} className='sideBarFriendLink'>
                    <div className='sideBarFriend'>{member.userName}</div>
                </NavLink>
            )
        })
    }

    return (
        <div className='sideBarContainer'>
            <div className='friendsContainer'>
                <p className='friendsSection'>Members:</p>
                {!members ? null : memberMapper(members)}
            </div>
            <div className='sideBarBuffer'></div>
        </div>
    )
}

export default SideBar;