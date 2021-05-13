import {
    createStore,
    applyMiddleware,
    compose
} from 'redux'
import thunk from 'redux-thunk';
import allReducers from '../Reducers'


function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
    const redditStore = createStore(
        allReducers,
        composeEnhancers(
            applyMiddleware(thunk)
        )
    )

    return redditStore;
}

export default configureStore;