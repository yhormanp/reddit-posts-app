export const initialState = () => ({
    posts:{
        paginate: {
            page: 1,
            pageSize: 10
        },
        topPosts: [],
        currentPosts: [],
        loading: true
    }
   

})
