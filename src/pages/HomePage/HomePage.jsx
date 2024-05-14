import { MovieList } from "../../components/MovieList/MovieList";

import { useEffect, useState } from "react";
import { getFilm } from "../../service/service";
const HomePage = () => {
  const [weekMovies, setWeekMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getFilm();
      setWeekMovies(data);
      // console.log(data);
    };
    getData();
  }, []);
  return (
    <>
      <MovieList movies={weekMovies} />
    </>
  );
};
export default HomePage;
