import React, { useEffect } from 'react';
import MainNav from './MainNav';
import { useSelector, useDispatch } from 'react-redux';
import { getResults } from '../store/Search'
import { NavLink } from 'react-router-dom'

const SearchResults = (props) => {
    const value = props.match.params.value;

    const dispatch = useDispatch();

    const { users } = useSelector(state => state.search)

    useEffect(() => {
        dispatch(getResults(value))
    }, [value]);

    const results = (users) => {
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


    if(!users){
        return (
            <div>
                <MainNav />
            </div>
        )
    }
    return(
        <div>
            <MainNav />
            {results(users)}
        </div>
    )
}

export default SearchResults;