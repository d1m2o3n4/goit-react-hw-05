import { useEffect, useState } from "react";
import { getFilmList } from "../../service/service";
import { MovieList } from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [film, setfilmList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      const data = await getFilmList(query);
      setfilmList(data.results);
      console.log(data);
    };
    getData();
  }, [query]);
  const onSubmit = (event) => {
    event.preventDefault();
    setSearchParams({ query: event.target.search.value });
    if (event.target.search.value === "") {
      alert("Введіть текст!");
      return;
    }
  };
  console.log(film);
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
      {film.length > 0 && <MovieList movies={film} />}
    </>
  );
};
export default MoviesPage;
