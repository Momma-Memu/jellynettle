import React, { useEffect, useState } from 'react';
import MainNav from './MainNav';
import { useSelector, useDispatch } from 'react-redux';
import { getResults } from '../store/Search'
import { NavLink } from 'react-router-dom'

const SearchResults = (props) => {
    const value = props.match.params.value;
    console.log(value)

    const dispatch = useDispatch();

    const { users } = useSelector(state => state.search)

    useEffect(() => {
        dispatch(getResults(value))
    }, [value]);

    const results = (users) => {
        return users.map(user => {
            return (
                <div className='resultsContainer'>
                    <div className=''>{user.userName}</div>
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