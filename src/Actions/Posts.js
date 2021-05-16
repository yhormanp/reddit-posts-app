import {
    getMaximumPosts
} from '../Services/Posts.service';
import * as types from './ActionTypes';

// const fetchAllPostFromReddit = (data) => {
//     return {
//         type: types.FETCH_POSTS,
//         posts: data
//     };
// };


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

export const updatePageIndex = data => {
    return {
        type: types.UPDATE_CURRENT_PAGE_INDEX,
        payload: data
    }
}

// function fetchAllPosts () {
//     return  (dispatch) => {
//         try {
//             const postsObtained = await getMaximumPosts();
//             dispatch({
//                 type: types.FETCH_POSTS,
//                 posts: postsObtained
//             });
//         } catch (error) {
//             // dispatch(registerError)
//         }
//     }
// }

// export function fetchPosts() {
//     return (dispatch) => {
//         dispatch(fetchAllPosts)
//     }
// }

function fetchPosts (){
    return async (dispatch) => {
        try {
            const postsObtained = await getMaximumPosts();
            dispatch(fetchAllPostFromReddit(postsObtained))
            // return {
            //     type: types.FETCH_POSTS,
            //     posts: postsObtained
            // };
        } catch (error) {
            // dispatch(registerError)
        }
    }
}


export function getFetchPosts() {
    // return {
    //     type: types.FETCH_POSTS,
    //     data: 'hola'
    //   };
    return (dispatch) => {
        dispatch(fetchPosts())
    }
}