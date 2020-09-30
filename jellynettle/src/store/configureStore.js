import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import authentication from './authentication';
import posts from './posts';
import checkPass from './passwordCheck';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    authentication,
    posts,
    checkPass,
});


const configureStore = () => {
    return createStore(
        reducer,
        composeEnhancers(applyMiddleware(thunk)),
    );
};


export default configureStore;
