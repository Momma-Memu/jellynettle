import React from 'react';
import logo from '../styles/images/LogoMakr_9328RJ.png'
import { baseNavStyles } from '../styles/loginSignUpStyle';
import mainNavStyles from '../styles/mainNavStyles';
import MenuIcon from '@material-ui/icons/Menu';
import Tooltip from '@material-ui/core/Tooltip';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import SettingsAccess from './SettingsAccess';
import { NavLink } from 'react-router-dom'
import Cookies from "js-cookie";
import { logout } from '../store/authentication';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';


const MainNav = () => {
    const { id } = useSelector(state => state.authentication)
    const logoClass = baseNavStyles();
    const navClass = mainNavStyles();
    const dispatch = useDispatch();
    const handleLogout = () => {
        Cookies.remove("token");
        dispatch(logout())
    }


    return (
        <div className={`${navClass.bar} mainNavBar`}>
            <Tooltip title ='My Groups'>
            <MenuIcon className={navClass.hamburger}/>
            </Tooltip>
            <NavLink exact to='/'>
                <img src={logo} className={logoClass.logo2} alt='logo' />
            </NavLink>
            <h3 className={navClass.title}>JellyNettle</h3>
            <div className='searchBar'>
                <TextField id="standard-search" label="Search" type="search"/>
                <SearchIcon className={navClass.search}/>
            </div>
            <Tooltip title='Messages'>
                <MailOutlineIcon className={navClass.messages}  />
            </Tooltip>
            <Tooltip title='Notifications'>
                <NotificationsNoneIcon className={navClass.notifications} />
            </Tooltip>
            <Tooltip title='Profile'>
                <NavLink to={`/profile/${id}`}>
                    <AccountCircleIcon className={navClass.account}/>
                </NavLink>
            </Tooltip>
            <Tooltip title='Settings'>
                <div>
                    <SettingsAccess />
                </div>
            </Tooltip>
            <Tooltip title='Logout'>
                <NavLink exact to='/login'>
                    <MeetingRoomIcon onClick={handleLogout} className={navClass.logout}/>
                </NavLink>
            </Tooltip>
        </div>
    )
}

export default MainNav