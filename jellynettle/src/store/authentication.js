import Cookies from "js-cookie";
const SET_USER = 'SET_USER';
const REMOVE_USER = 'REMOVE_USER';
const FAILED_LOGIN = 'FAILED_LOGIN';


export const setUser = (user) => {
    return {
        type: SET_USER,
        user
    }
}

export const removeUser = () => {
    debugger
    return {
        type: REMOVE_USER,
    }
}

export const failedLogin = (headers) => {
    return {
        type: FAILED_LOGIN,
        headers,
    }
}

export const login = (email, password) => {
    return async dispatch => {
        dispatch(setUser(''))
        const response = await fetch(`/api/session`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email, password}),
        });
        const data = await response.json();
        if(data.status === 403){
            dispatch(failedLogin(data))
            return response;
        }

        if (response.ok) {
            // const { user } = await response.json();
            dispatch(setUser(data));
        }
    }
}


function loadUser() {
    const authToken = Cookies.get("token");
    if (authToken) {
        try {
            const payload = authToken.split(".")[1];
            const decodedPayload = atob(payload);
            const payloadObj = JSON.parse(decodedPayload);
            const { data } = payloadObj;
            return data;
        } catch (e) {
            Cookies.remove("token");
        }
    }
    return { authentication: { message: '' }, token: authToken };
}

export const logout = () => async dispatch => {
    dispatch(removeUser());
}

export default function reducer(state=loadUser(), action) {
    switch(action.type){
        case SET_USER:
            return action.user;
        case REMOVE_USER:
            debugger
            return {};
        case FAILED_LOGIN:
            return action.headers
        default:
            return state;
    }
}