import React, { useEffect } from 'react';
import MainNav from './MainNav';
import { useSelector, useDispatch } from 'react-redux';
import { getResults } from '../store/Search'
import { NavLink } from 'react-router-dom'

const SearchResults = (props) => {
    const value = props.match.params.value;

    const dispatch = useDispatch();

    const { users } = useSelector(state => state.search)
    const { groups } = useSelector(state => state.search);
    const { id } = useSelector(state => state.authentication);
    const { userName } = useSelector(state => state.authentication);



    useEffect(() => {
        dispatch(getResults(value))
    }, [value]);

    const handleSubmit = async(e) => {
        e.target.classList.add('tempHide')
        const sent = document.querySelector('.request')
        sent.classList.remove('tempHide')

        const groupId = Number(e.target.classList[1])
        const data = {userId: id, userName: userName, groupId: groupId }
        const res = await fetch('/api/create-group/request', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
    }

    const userResults = (users) => {
        return users.map(user => {
            return (

                <div className='resultsContainer' key={user.id}>
                    <NavLink to={`/profile/${user.id}`} className='removeUnderline'>
                        <div className='userSearchResults' key={user.userName}>{user.userName}</div>
                    </NavLink>
                </div>
            )
        })
    }

    const groupResults = (groups) => {
        return groups.map(group => {
            return (
                <div className='resultsContainer' key={group.id}>
                    <div className='groupSearchResults' key={group.name}>{group.name}</div>
                    <div className={`joinGroup ${group.id}`} onClick={handleSubmit}>Join</div>
                    <p className='request tempHide'>Request sent.</p>
                </div>
            )
        })
    }


    if(!users){
        return (
            <div>
                <MainNav />
            </div>
        )
    }
    return(
        <div className='main-background'>
            <MainNav />
            <p className='resultUsers'>Users: </p>
            {userResults(users)}

            <p className='resultGroups'>Groups: </p>
            {!groups ? null : groupResults(groups)}
            <div className='buffer2'></div>
        </div>
    )
}

export default SearchResults;