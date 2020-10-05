import React, { useState, useEffect } from 'react';
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
import NotificationsTab from './Notifications';
import { getRequestNotifications, getJoinRequests } from '../store/notifications';
import AddBoxIcon from '@material-ui/icons/AddBox';


const MainNav = () => {
    const { id } = useSelector(state => state.authentication)
    const requests = useSelector(state => state.notifications.requests);
    const joinRequests = useSelector(state => state.notifications.joinRequests);
    const [ value, setValue ] = useState('');

    const logoClass = baseNavStyles();
    const navClass = mainNavStyles();

    const dispatch = useDispatch();

    const handleLogout = () => {
        Cookies.remove("token");
        dispatch(logout())
    }
    useEffect(() => {
        dispatch(getRequestNotifications(id))
        dispatch(getJoinRequests(id))
    }, [])
    // dispatch(getRequestNotifications(id))

    const updateValue = e => setValue(e.target.value);
    let amount;
    if(requests){
        amount = requests.length;
    }

    if(joinRequests){
        amount += joinRequests.length;
    }


    return (
        <div className={`${navClass.bar} mainNavBar`}>
            <Tooltip title ='Create Group'>
            <div>
            <NavLink exact to='/create-group'>
            <AddBoxIcon className={navClass.hamburger}/>
            </NavLink>
            </div>
            </Tooltip>
            <NavLink exact to='/'>
                <img src={logo} className={logoClass.logo2} alt='logo' />
            </NavLink>
            <div className='searchBar'>
                <NavLink to={`/search/${value}`}>
                    <SearchIcon className={navClass.search}/>
                </NavLink>
                <TextField id="standard-search"
                label="Search"
                value={value}
                onChange={updateValue}
                type="search"/>
            </div>
            <Tooltip title='Messages'>
                <MailOutlineIcon className={navClass.messages}  />
            </Tooltip>
            <Tooltip title='Notifications'>
                <div className='notifications'>
                    <NotificationsTab />
                    <p className='numNotifications'>{!amount ? null : amount}</p>
                </div>
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

// <p>{!requests ? null : requests.length}</p>