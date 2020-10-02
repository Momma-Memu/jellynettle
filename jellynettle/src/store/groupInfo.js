const GET_GROUPS = 'GET_GROUPS';

export const putGroupInfo = (group) => {
    return {
        type: GET_GROUPS,
        group
    }
}

export const getGroupInfo = (id) => async dispatch => {
    const res = await fetch('/api/users/get-groups', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id})
    })
    const groupInfo = await res.json();
    if(res.ok){
        dispatch(putGroupInfo(groupInfo))
    }
}

export default function reducer(state=[], action) {
    switch(action.type){
        case GET_GROUPS:
            return action.group;
        default:
            return state;
    }
}