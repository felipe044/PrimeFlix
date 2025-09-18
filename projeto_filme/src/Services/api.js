import axios from "axios"

const api = axios.create({
    baseURL: 'https://imdb.iamidiotareyoutoo.com/search'
});

export default api