import axios from "axios";


const networkService = axios.create({
    baseURL:"https://api.themoviedb.org/3"
});

export default networkService