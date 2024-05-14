import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";
export const MovieList = ({ movies }) => {
  const imgUrl = "https://image.tmdb.org/t/p/w200";
  const location = useLocation();
  return (
    <>
      {movies && (
        <ul className={s.movieList}>
          {movies.map((movie) => (
            <li key={movie.id} className={s.movieListItem}>
              <Link to={`/movies/${movie.id}`} state={location}>
                <img src={imgUrl + movie.poster_path} alt="" />
              </Link>
              {movie.original_title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
