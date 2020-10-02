import React from 'react';
import MainNav from '../loggedInNavComponents/MainNav';
import Feed from './Feed';
import SideBar from '../loggedInNavComponents/SideBar';

const Home = () => {

    return (
        <div className="main-background">
            <MainNav />
            <div className="main-background2">
                <SideBar />
                <div>
                    <Feed />
                </div>
            </div>
        </div>
    )
}

export default Home;