const FRIENDS = 'FRIENDS';
const GROUPS = 'GROUPS';


export const putFriends = (friends) => {
    return {
        type: FRIENDS,
        friends,
    }
}

export const putGroups = (groups) => {
    return {
        type: GROUPS,
        groups,
    }
}

export const getFriends = (id) => async dispatch => {
    const res = await fetch('/api/users/friends', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id})
    })
    const friends = await res.json();
    if(res.ok){
        dispatch(putFriends(friends))
    }
    return;
}

export const getGroups = (id) => async dispatch => {
    const res = await fetch('/api/users/groups', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id})
    })
    const groups = await res.json();
    if(res.ok){
        dispatch(putGroups(groups))
    }
}

export default function reducer(state={ friends: [], groups: []}, action) {
    switch(action.type){
        case FRIENDS:
            return action.friends;
        case GROUPS:
            return {...state, groups: action.groups};
        default:
            return state;
    }
}