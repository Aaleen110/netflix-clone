import { API } from '../utils/constants';

const requests = {
    fetchTrending: `${API.ENDPOINTS.TRENDING}?api_key=${API.KEY}&language=${API.LANGUAGE}`,
    fetchTopRated: `${API.ENDPOINTS.TOP_RATED}?api_key=${API.KEY}&language=${API.LANGUAGE}`,
    fetchPopular: `${API.ENDPOINTS.POPULAR}?api_key=${API.KEY}&language=${API.LANGUAGE}`,
    fetchTVShows: `${API.ENDPOINTS.TV_POPULAR}?api_key=${API.KEY}&language=${API.LANGUAGE}&page=${API.DEFAULT_PAGE}`,

    fetchComedy: `${API.ENDPOINTS.DISCOVER}?api_key=${API.KEY}&with_genres=${API.GENRE_IDS.COMEDY}`,
    fetchAction: `${API.ENDPOINTS.DISCOVER}?api_key=${API.KEY}&with_genres=${API.GENRE_IDS.ACTION}`,
    fetchDocumentaries: `${API.ENDPOINTS.DISCOVER}?api_key=${API.KEY}&with_genres=${API.GENRE_IDS.DOCUMENTARY}`,
    fetchHorror: `${API.ENDPOINTS.DISCOVER}?api_key=${API.KEY}&with_genres=${API.GENRE_IDS.HORROR}`,
}

export default requests;