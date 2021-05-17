import axios from "axios"


const getMaximumPosts = async () => {
    try {

        const calculateCreatedHours = (createdTimestamp) => {
            const currentTimestamp = new Date().getTime();
            let differeceTimestamp = currentTimestamp - createdTimestamp

            var daysDifference = Math.floor(differeceTimestamp / 1000 / 60 / 60 / 24);
            differeceTimestamp -= daysDifference * 1000 * 60 * 60 * 24

            var hoursDifference = Math.floor(differeceTimestamp / 1000 / 60 / 60);
            differeceTimestamp -= hoursDifference * 1000 * 60 * 60

            return hoursDifference;
        }
        const {
            data
        } = await axios.get(`${process.env.REACT_APP_API_URL}?limit=${process.env.REACT_APP_MAXIMUM_POSTS}`)
        console.log('received data', data);
        const formattedData = data.data.children.map(info => {
            const baseData = info.data;

            return {
                id: baseData.id,
                title: baseData.title,
                author: baseData.author_fullname,
                created_utc: baseData.created_utc,
                since: calculateCreatedHours(baseData.created_utc),
                thumbnail: baseData.thumbnail.indexOf("http") != -1 ? baseData.thumbnail : null,
                // thumbnail: baseData.thumbnail,

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