const API_KEY = "REDACTED_TMDB_API_KEY";
//23.13
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
}

export default requests;