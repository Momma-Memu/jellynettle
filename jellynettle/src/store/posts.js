const GET_POSTS = 'GET_POSTS';
const MAKE_POST = 'MAKE_POST';


export const getPosts = (posts) => {
    return {
        type: GET_POSTS,
        posts,
    }
}

export const makePost = (post) => {
    return {
        type: MAKE_POST,
        post
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
    return;
}

export const createPost = (id, message) => async dispatch => {
    const res = await fetch('api/posts/make', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id, message}),
    })
    const data = await res.json();
    if(res.ok){
        dispatch(makePost(data));
    }
    return;
}


// function loadUser() {
//     const authToken = Cookies.get("token");
//     if (authToken) {
//         try {
//             const payload = authToken.split(".")[1];
//             const decodedPayload = atob(payload);
//             const payloadObj = JSON.parse(decodedPayload);
//             const { data } = payloadObj;
//             return data;
//         } catch (e) {
//             Cookies.remove("token");
//         }
//     }
//     return { authentication: { message: '' }, token: authToken };
// }


export default function reducer(state={ userPosts: [], friendPosts: [] }, action) {
    switch(action.type){
        case GET_POSTS:
            return action.posts;
        case MAKE_POST:
            const arr = [...state.userPosts]
            arr.unshift(action.post)
            return {...state, userPosts: arr }
        default:
            return state;
    }
}