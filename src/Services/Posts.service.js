import axios from "axios"


const getMaximumPosts = async () => {
    try {
        const {
            data
        } = await axios.get(`${process.env.REACT_APP_API_URL}?limit=${process.env.REACT_APP_MAXIMUM_POSTS}`)

        const formattedData = data.data.children.map(info => {
            const baseData = info.data;
            return {
                id: baseData.id,
                title: baseData.title,
                author: baseData.author_fullname,
                created_utc: baseData.created_utc,
                thumbnail: baseData.thumbnail,
                full_image: baseData.url,
                num_comments: baseData.num_comments,
                visited: baseData.visited,

            }
        })
        return formattedData;

    } catch (error) {
        console.log('Error calling Posts: ', error);
    }

}


export {
    getMaximumPosts
}