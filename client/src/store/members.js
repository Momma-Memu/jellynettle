// import { get } from "js-cookie";

const GET_MEMBERS = 'GET_MEMBERS';

export const putMembers = (members) => {
    return {
        type: GET_MEMBERS,
        members,
    }
}

export const getMembers = (groupId) => {
    return async dispatch => {
        const res = await fetch('/api/create-group/getMembers', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({groupId})
        });
        const response = await res.json();
        if(res.ok){
            // debugger
            dispatch(putMembers(response))
        }
    }
}


export default function reducer(state=[], action) {
    switch(action.type){
        case GET_MEMBERS:
            return action.members;
        default:
            return state;
    }
}