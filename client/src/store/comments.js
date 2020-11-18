const GET_COMMENTS = 'GET_COMMENTS';

export const putComments = (comments) => {
    return {
        type: GET_COMMENTS,
        comments
    }
}

export const getComments = (id) => async dispatch => {
    const res = await fetch('/api/comments/get', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id})
    })
    const comments = await res.json();
    if(res.ok){
        dispatch(putComments(comments))
    }
}

export default function reducer(state=[], action) {
    switch(action.type){
        case GET_COMMENTS:
            return action.comments;
        default:
            return state;
    }
}