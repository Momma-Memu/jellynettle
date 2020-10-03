const GET_POSTS = 'GET_POSTS';
const MAKE_POST = 'MAKE_POST';
const GET_GROUP_POSTS = 'GET_GROUP_POSTS';
const MAKE_GROUP_POST = 'MAKE_GROUP_POST';


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

export const getGroupPosts = (posts) => {
    return {
        type: GET_GROUP_POSTS,
        posts
    }
}

export const makeGroupPost = (post) => {
    return {
        type: MAKE_GROUP_POST,
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
    const res = await fetch('/api/posts/make', {
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


export const grabGroupPosts = (id) => async dispatch => {
    const res = await fetch('/api/create-group/getPosts', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id}),
    });
    const data = await res.json();
    if(res.ok){
        dispatch(getGroupPosts(data))
    }
    return;
}

export const createGroupPost = (groupId, userId, message) => async dispatch => {
    // const res = await fetch('api/posts/make', {
    //     method: 'post',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({id, message}),
    // })
    // const data = await res.json();
    // if(res.ok){
    //     dispatch(makePost(data));
    // }
    return;
}

export default function reducer(state={ userPosts: [], friendPosts: [] }, action) {
    switch(action.type){
        case GET_POSTS:
            return action.posts;
        case MAKE_POST:
            const arr = [...state.userPosts]
            arr.unshift(action.post)
            return {...state, userPosts: arr }
        case GET_GROUP_POSTS:
            return action.posts;
        case MAKE_GROUP_POST:
            const arr2 = [...state.groupPosts]
            arr2.unshift(action.post)
            return {...state, groupPosts: arr}
        default:
            return state;
    }
}