const FRIEND_REQUESTS = 'FRIEND_REQUESTS';

export const getRequests = (requests) => {
    return {
        type: FRIEND_REQUESTS,
        requests
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

export default function reducer(state={}, action) {
    switch(action.type){
        case FRIEND_REQUESTS:
            return action.requests;
        default:
            return state;
    }
}