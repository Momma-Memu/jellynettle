import { get } from "js-cookie";

const FIND_USER = 'REQUEST_UPDATE';

export const getUser = (userInfo) => {
    return {
        type: FIND_USER,
        userInfo
    }
}

export const getUserInfo = (id) => {
    return async dispatch => {
        const res = await fetch('/api/users/', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id})
        });
        const response = await res.json();
        if(response.status === 403){
            dispatch(getUser({message: 'Uh oh....something went wrong...'}))
            return
        }
        if(res.ok){
            // debugger
            dispatch(getUser(response))
        }
    }
}


export default function reducer(state={}, action) {
    switch(action.type){
        case FIND_USER:
            return action.userInfo;
        default:
            return state;
    }
}