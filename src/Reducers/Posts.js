import {
    FETCH_POSTS,
    UPDATE_UNREAD_STATUS,
    DISSMISS_POST,
    UPDATE_CURRENT_PAGE_INDEX,
    DISSMISS_ALL_POSTS
} from '../Actions/ActionTypes'
import {
    initialState
} from './initialState'

function getCurrentPagedPosts(postsList, paginateValues) {
    const indexOfLastPost = paginateValues.page * paginateValues.pageSize;
    const indexOfFirstPost = indexOfLastPost - paginateValues.pageSize;
    const currentPosts = postsList.slice(indexOfFirstPost, indexOfLastPost)
    console.log('posts filtered:', currentPosts)

    return currentPosts;
}

export default function postsReducer(state = initialState().posts, action) {
    let list, postIndex, updatedCurrentPosts;
    list = state.topPosts;
  
    switch (action.type) {
        case FETCH_POSTS:
            list = state.topPosts;
            postIndex = state.topPosts.findIndex(p => p.id === action.payload.id);
            updatedCurrentPosts = getCurrentPagedPosts(action.payload, state.paginate);

            list = [...list, ...action.payload]
            return {
                ...state, topPosts: list, currentPosts: updatedCurrentPosts
            };
        case UPDATE_UNREAD_STATUS:
            postIndex = state.topPosts.findIndex(p => p.id === action.payload.id);
            if (postIndex >= 0) {
                list = [
                    ...state.topPosts.slice(0, postIndex),
                    {
                        ...state.topPosts[postIndex],
                        visited: true
                    },
                    ...state.topPosts.slice(postIndex + 1)
                ];
            }

            updatedCurrentPosts = getCurrentPagedPosts(list, state.paginate);
            return {
                ...state, topPosts: list, currentPosts: updatedCurrentPosts
            };

        case DISSMISS_POST:
            postIndex = state.topPosts.findIndex(p => p.id === action.payload.id);
            if (postIndex >= 0) {
                list = [
                    ...state.topPosts.slice(0, postIndex),
                    ...state.topPosts.slice(postIndex + 1)
                ];
                updatedCurrentPosts = getCurrentPagedPosts(list, state.paginate);
            }
            return {
                ...state, topPosts: list, currentPosts: updatedCurrentPosts
            };
        case UPDATE_CURRENT_PAGE_INDEX:
            const newPaginate = {
                ...state.paginate,
                page: action.payload
            }
            
            updatedCurrentPosts = getCurrentPagedPosts(list, newPaginate);
            return {
                ...state, currentPosts: updatedCurrentPosts, paginate: newPaginate
            }
        
        case DISSMISS_ALL_POSTS:

        return{
            ...state, currentPosts: [], topPosts: []
        }
            default:
                return state;
    }
}