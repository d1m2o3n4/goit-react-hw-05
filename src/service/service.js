import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjAyOGQ4MmU2YTFlZThkNTliYzkyYTVhMGI0NGIxZiIsInN1YiI6IjY2NDE0OWVjMTgzODJjYjAwMTU5Y2Q4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3wz5OJfylMjGCb-cRVcIz9GhrskmnVINNP2CoeyZlAY",
  },
});

export const getFilm = async () => {
  const { data } = await instance.get("/trending/movie/day?language=en-US");
  return data.results;
};
export const getFilmById = async (id) => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};
export const getReviewsById = async (id) => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data;
};
export const getCastById = async (id) => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data;
};
export const getFilmList = async (query) => {
  const { data } = await instance.get(`/search/movie?query=${query}`);
  return data;
};
