import { createStore, applyMiddleWare, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

const reducer = combineReducers({

});

const configureStore = () => {
    return createStore(
        reducer,
        composeEnhancers(applyMiddleWare(thunk)),
    );
};

export default configureStore;
