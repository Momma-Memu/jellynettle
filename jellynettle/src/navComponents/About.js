import React from 'react';
import BaseNav from '../loginComponents/BaseNav';
import { NavLink } from 'react-router-dom'

const About = () => {

    return (
        <div>
            <BaseNav />
            <h1 className='infoHeader'>Our Mission</h1>
            <p className='paragraphs'>JellyNettle aims to be a place for all gamers, of all backgrounds.</p>
            <p className='paragraphs'>Video games should be fun. We provide people a way to build safe and
            friendly communities, teams for competitive players, or just casual and informative groups.
            </p>
            <p className='paragraphs'>Find out how we work hard to make this platform safe.</p>
            <div className='safetyLinkBox'>
                <NavLink exact to='/safety' className='safetyLink'>Safety</NavLink>
            </div>
        </div>
    )
}

export default About;