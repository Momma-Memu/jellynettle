import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import authentication from './authentication';
import posts from './posts';
import checkPass from './passwordCheck';
import search from './Search'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    authentication,
    posts,
    checkPass,
    search,
});


const configureStore = () => {
    return createStore(
        reducer,
        composeEnhancers(applyMiddleware(thunk)),
    );
};


export default configureStore;
