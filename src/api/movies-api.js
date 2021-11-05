import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjI2ZDJjYmI3ZWQ0OGZlM2YzZTcwZDNjNzU3NDYwMiIsInN1YiI6IjYxNTVlZjE0ZGQ3MzFiMDA2MjA0ZTZhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kX2wm4V3sop5bu7gINsXfhNmhSJC64YPPiIbFqqCReM";

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`/trending/movie/week?page=1`);
    const data = await response.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getSearchedMovies = async (query) => {
  try {
    const response = await axios.get(
      `/search/movie?language=en-US&query=${query}&page=1&include_adult=false`
    );
    const data = await response.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await axios.get(`/movie/${id}&language=en-US`);
    const data = await response.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getMovieCast = async (id) => {
  try {
    const response = await axios.get(`/movie/${id}/credits?language=en-US`);
    const data = await response.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getMovieReviews = async (id) => {
  try {
    const response = await axios.get(
      `/movie/${id}/reviews?language=en-US&page=1`
    );
    const data = await response.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};
