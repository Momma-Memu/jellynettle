const SEARCH = 'SEARCH';


export const search = (results) => {
    return {
        type: SEARCH,
        results,
    }
}

export const getResults = (value) => async dispatch => {
    console.log('here')
    const res = await fetch('/api/search', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({value}),
    });
    const data = await res.json();
    console.log(data)
    if(res.ok){
        dispatch(search(data))
    }
    return;
}

export default function reducer(state={}, action) {
    switch(action.type){
        case SEARCH:
            return action.results;
        default:
            return state;
    }
}