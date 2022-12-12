const API_KEY = "3058f11e9fc63d81c4bf1d973374e695";
//23.13
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
}

export default requests;