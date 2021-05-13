import { FETCH_POSTS  } from '../Actions/ActionTypes'
import {initialState} from  './initialState'


export default function postsReducer (state = initialState().posts, action){
    let list;
    switch (action.type) {
        case FETCH_POSTS:
            list = state.topPosts;
            list= [...list, ...action.payload]
            return {...state, topPosts: list}
        default:
            return state;
    }
}