// import { get } from "js-cookie";

const CREATE_GROUP = 'CREATE_GROUP';

export const createGroup = (newGroup) => {
    return {
        type: CREATE_GROUP,
        newGroup,
    }
}

export const makeNewGroup = (name, description, ownerId) => {
    return async dispatch => {
        const res = await fetch('/api/create-group/make', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name, description, ownerId})
        });
        const response = await res.json();
        if(res.ok){
            // debugger
            dispatch(createGroup(response))
        }
    }
}


export default function reducer(state={}, action) {
    switch(action.type){
        case CREATE_GROUP:
            return action.newGroup;
        default:
            return state;
    }
}