// Local Storage Keys
export const STORAGE_KEYS = {
  SELECTED_PROFILE: 'selectedProfile',
};

// Movie Categories
export const MOVIE_CATEGORIES = {
  NETFLIX_ORIGINALS: 'Netflix Originals',
  TOP_RATED: 'Top Rated',
  POPULAR: 'Popular Now',
  TV_SHOWS: 'TV Shows',
  COMEDIES: 'Comedies',
  ACTION: 'Action Movies',
  DOCUMENTARIES: 'Documentaries',
  HORROR: 'Horror Movies',
};

// API Constants
export const API = {
  KEY: process.env.REACT_APP_MOVIES_DB_API_KEY,
  BASE_URL: process.env.REACT_APP_API_BASE_URL,
  IMAGE_BASE_URL: process.env.REACT_APP_IMAGE_BASE_URL,
  LANGUAGE: 'en-US',
  DEFAULT_PAGE: 1,
  ENDPOINTS: {
    TRENDING: '/trending/all/week',
    TOP_RATED: '/movie/top_rated',
    POPULAR: '/movie/popular',
    TV_POPULAR: '/tv/popular',
    DISCOVER: '/discover/movie',
  },
  GENRE_IDS: {
    COMEDY: 35,
    ACTION: 28,
    DOCUMENTARY: 99,
    HORROR: 27,
  },
};

// API Endpoints are handled in requests.js

// Common text
export const COMMON_TEXT = {
  APP_NAME: 'Netflix Clone',
}; 