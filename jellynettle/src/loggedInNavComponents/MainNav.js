import React from 'react';
import logo from '../styles/LogoMakr_9328RJ.png'
import { baseNavStyles } from '../styles/loginSignUpStyle';
import mainNavStyles from '../styles/mainNavStyles';
import MenuIcon from '@material-ui/icons/Menu';
import Tooltip from '@material-ui/core/Tooltip';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { NavLink } from 'react-router-dom'



const MainNav = () => {
    const logoClass = baseNavStyles();
    const navClass = mainNavStyles();
    return (
        <div className={`${navClass.bar} mainNavBar`}>
            <Tooltip title ='My Groups'>
            <MenuIcon className={navClass.hamburger}/>
            </Tooltip>
            <img src={logo} className={logoClass.logo2} alt='logo' />
            <h3 className={navClass.title}>JellyNettle</h3>
            <Tooltip title='Messages'>
                <MailOutlineIcon className={navClass.messages} />
            </Tooltip>
            <Tooltip title='Notifications'>
                <NotificationsNoneIcon className={navClass.notifications} />
            </Tooltip>
            <Tooltip title='Profile'>
                <NavLink exact to='/profile'>
                    <AccountCircleIcon className={navClass.account}/>
                </NavLink>
            </Tooltip>
            <Tooltip title='Settings'>
                <NavLink exact to='/settings'>
                    <SettingsIcon className={navClass.settings} />
                </NavLink>
            </Tooltip>
            <Tooltip title='Logout'>
                <NavLink exact to='/login'>
                    <MeetingRoomIcon className={navClass.logout}/>
                </NavLink>
            </Tooltip>
        </div>
    )
}

export default MainNav