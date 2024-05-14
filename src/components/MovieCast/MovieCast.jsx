import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCastById } from "../../service/service";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const [castList, setCastList] = useState(null);
  const { moviesid } = useParams();
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {
    const getData = async () => {
      const data = await getCastById(moviesid);
      setCastList(data.cast);
    };
    getData();
  }, [moviesid]);

  return (
    <>
      {castList && (
        <ul className={s.castList}>
          {castList.map((item) => (
            <li key={item.id} className={s.castItem}>
              <img src={imgUrl + item.profile_path} alt="" />
              <p>Character: {item.character}</p>
              <p>Actor name: {item.original_name}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default MovieCast;
