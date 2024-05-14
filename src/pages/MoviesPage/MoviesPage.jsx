import { useEffect, useState } from "react";
import { getFilmList } from "../../service/service";
import { MovieList } from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [film, setfilmList] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  useEffect(() => {
    const getData = async () => {
      const data = await getFilmList(query);
      setfilmList(data);
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
      {film && <MovieList movies={film.results} />}
    </>
  );
};
export default MoviesPage;
