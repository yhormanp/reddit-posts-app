import {
    getMaximumPosts
} from '../Services/Posts.service';
import * as types from './ActionTypes';


const fetchAllPostFromReddit = data => {
    return {
      type: types.FETCH_POSTS,
      payload: data
    };
  };

export const updateUnreadStatusOnPost = data => {
    return {
        type: types.UPDATE_UNREAD_STATUS,
        payload: data
    }
}

export const dismissAPost = data => {
    return {
        type: types.DISSMISS_POST,
        payload: data
    }
}

export const dismissAllPosts = () => {
    return {
        type: types.DISSMISS_ALL_POSTS
    }
}

export const updatePageIndex = data => {
    return {
        type: types.UPDATE_CURRENT_PAGE_INDEX,
        payload: data
    }
}

function fetchPosts (){
    return async (dispatch) => {
        try {
            const postsObtained = await getMaximumPosts();
            dispatch(fetchAllPostFromReddit(postsObtained))
          
        } catch (error) {
            // dispatch(registerError)
        }
    }
}


export function getFetchPosts() {
    
    return (dispatch) => {
        dispatch(fetchPosts())
    }
}