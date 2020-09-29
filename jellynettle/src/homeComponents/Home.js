import React from 'react';
import MainNav from '../loggedInNavComponents/MainNav';
import Feed from './Feed';

const Home = () => {

    return (
        <div className="main-background">
            <MainNav />
            <Feed />
        </div>
    )
}

export default Home;