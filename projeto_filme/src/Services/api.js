import axios from "axios"

const api = axios.create({
    baseURL: 'https://imdb.iamidiotareyoutoo.com/search?q='
});

export default api