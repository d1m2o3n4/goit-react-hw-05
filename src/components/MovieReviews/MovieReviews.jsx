import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewsById } from "../../service/service";
import s from "./MovieReviews.module.css";
const MovieReviews = () => {
  const [reviews, setReviews] = useState(null);
  const { moviesid } = useParams();

  useEffect(() => {
    const getData = async () => {
      const data = await getReviewsById(moviesid);
      setReviews(data.results);
    };
    getData();
  }, [moviesid]);
  return (
    <>
      {reviews && (
        <ul className={s.revList}>
          {reviews.map((rev) => (
            <li key={rev.id} className={s.revItem}>
              <h3>{rev.author}</h3>
              <p>{rev.content}</p>
              <p>{rev.updated_at}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default MovieReviews;
