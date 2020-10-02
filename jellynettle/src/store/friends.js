const FRIENDS = 'FRIENDS';


export const putFriends = (friends) => {
    return {
        type: FRIENDS,
        friends,
    }
}

export const getFriends = (id) => async dispatch => {
    const res = await fetch('/api/users/friends', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id})
    })
    const friends = await res.json();
    console.log(friends)
    if(res.ok){
        dispatch(putFriends(friends))
    }
    return;
}

export default function reducer(state={ friends: []}, action) {
    switch(action.type){
        case FRIENDS:
            return action.friends;
        default:
            return state;
    }
}