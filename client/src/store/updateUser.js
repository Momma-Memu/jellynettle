const REQUEST_UPDATE = 'REQUEST_UPDATE';
const FAILED_UPDATE = 'FAILED_UPDATE';

export const successUpdate = (successHeader) => {
    return {
        type: REQUEST_UPDATE,
        successHeader
    }
}

export const failedUpdate = (headers) => {
    return {
        type: FAILED_UPDATE,
        headers,
    }
}

export const updateUser = (data) => {
    return async dispatch => {
        const res = await fetch('api/update-user/full', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const response = await res.json();
        if(response.status === 403){
            dispatch(failedUpdate(response));
            return
        }
        if(res.ok){
            // debugger
            dispatch(successUpdate(response))
        }
    }
}


export default function reducer(state={}, action) {
    switch(action.type){
        case REQUEST_UPDATE:
            return action.successHeader;
        case FAILED_UPDATE:
            return action.headers
        default:
            return state;
    }
}