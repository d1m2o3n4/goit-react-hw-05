import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { getFilmById } from "../../service/service";
import s from "./MovieDetailsPage.module.css";
const MovieDetailsPage = () => {
  const imgUrl = "https://image.tmdb.org/t/p/w200";
  const [movie, setMovie] = useState(null);
  const { moviesid } = useParams();
  const location = useLocation();

  const goBackRef = useRef(location.state ?? "/");
  useEffect(() => {
    const getData = async () => {
      const data = await getFilmById(moviesid);
      setMovie(data);
    };
    getData();
  }, [moviesid]);
  return (
    <>
      <NavLink to={goBackRef.current} className={s.backLink}>
        Go back
      </NavLink>
      {movie && (
        <div>
          <div className={s.infoWrapper}>
            <img src={imgUrl + movie.poster_path} alt="" />
            <div className={s.moviesInfo}>
              <h2>{movie.original_title}</h2>
              <p>Rating {movie.vote_average} / 10</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres:</h3>
              <ul>
                {movie.genres.map((gen) => (
                  <li key={gen.id}>{gen.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <nav>
              <ul>
                <li>
                  <NavLink to="cast">Cast</NavLink>
                </li>
                <li>
                  <NavLink to="reviews">Reviews</NavLink>
                </li>
              </ul>
            </nav>
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};
export default MovieDetailsPage;
