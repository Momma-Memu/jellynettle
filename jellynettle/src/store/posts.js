import Cookies from "js-cookie";
const GET_POSTS = 'GET_POSTS';


export const getPosts = (posts) => {
    return {
        type: GET_POSTS,
        posts,
    }
}

export const grabPosts = (id) => async dispatch => {
    const res = await fetch('/api/posts', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id}),
    });
    const data = await res.json();
    if(res.ok){
        dispatch(getPosts(data))
    }
    console.log(data)
    return data

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


export default function reducer(state=loadUser(), action) {
    switch(action.type){
        case GET_POSTS:
            return action.posts;
        default:
            return state;
    }
}