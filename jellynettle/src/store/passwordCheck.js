const CHECK_PASSWORD = 'CHECK_PASSWORD';
const FAILED_CHECK = 'FAILED_CHECK';

export const checkPassword = (bool) => {
    return {
        type: CHECK_PASSWORD,
        bool
    }
}

export const failedCheck = (headers) => {
    return {
        type: FAILED_CHECK,
        headers,
    }
}

export const passwordConfirm = (id, password) => {
    return async dispatch => {
        const res = await fetch('api/session/check', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id, password})
        });
        const data = await res.json();
        if(data.status === 403){
            dispatch(failedCheck(data));
            return
        }
        if(res.ok){
            dispatch(checkPassword(data.success))
        }
    }
}

export default function reducer(state=false, action) {
    switch(action.type){
        case CHECK_PASSWORD:
            return action.bool;
        case FAILED_CHECK:
            return action.headers
        default:
            return state;
    }
}