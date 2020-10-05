const FRIEND_REQUESTS = 'FRIEND_REQUESTS';
const JOIN_REQUESTS = 'JOIN_REQUESTS';

export const getRequests = (requests) => {
    return {
        type: FRIEND_REQUESTS,
        requests
    }
}

export const putJoinRequests = (joinRequests) => {
    return {
        type: JOIN_REQUESTS,
        joinRequests
    }
}

export const getRequestNotifications = (id) => {
    return async dispatch => {
        const res = await fetch('/api/add-remove-friend/getRequests', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id})
        });
        const response = await res.json();
        if(response.status === 403){
            dispatch(getRequests({message: 'Uh oh....something went wrong...'}))
            return
        }
        if(res.ok){
            // debugger
            dispatch(getRequests(response))
        }
    }
}

export const getJoinRequests = (ownerId) => {
    return async dispatch => {
        const res = await fetch('/api/create-group/getGroupRequests', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ownerId})
        });
        const data = await res.json();
        if(res.ok){
            dispatch(putJoinRequests(data))
        }
    }
}

export default function reducer(state={}, action) {
    switch(action.type){
        case FRIEND_REQUESTS:
            return action.requests;
        case JOIN_REQUESTS:
            return {...state, joinRequests: action.joinRequests};
        default:
            return state;
    }
}