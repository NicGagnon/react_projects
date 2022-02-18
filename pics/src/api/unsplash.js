import axios from 'axios'

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 017ZqFZDkw7XrU5XysHaUKj5AoLJeO1jUlm6jXiHGwk"
    }
})