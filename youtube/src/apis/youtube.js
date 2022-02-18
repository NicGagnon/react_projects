import axios from 'axios'
const KEY = 'AIzaSyAYLuxzozrvHVEgu8qj35dvJ5dud2XgEMU'


export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }
})