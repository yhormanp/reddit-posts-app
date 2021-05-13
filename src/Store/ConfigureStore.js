import {
    createStore
} from 'redux'
import allReducers from '../Reducers'


function configureStore (initialState){
    const redditStore = createStore(
        allReducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}

export default configureStore;

