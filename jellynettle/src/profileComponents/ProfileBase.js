import React from 'react';
import MainNav from '../loggedInNavComponents/MainNav';
import ProfileCard from './ProfileCard';

const ProfileBase = (props) => {

    return (
        <div className='profileContainer'>
            <MainNav/>
            <ProfileCard props={props.match.params}/>
        </div>
    )
}

export default ProfileBase;