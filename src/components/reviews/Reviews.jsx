import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../api/movies-api";
import classes from "./Reviews.module.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];

  useEffect(() => {
    getMovieReviews(movieId).then((res) => setReviews(res.results));
  }, [movieId]);

  return (
    <>
      <ul className={classes.list}>
        {reviews.length > 0 &&
          reviews.map(({ id, author, content }) => {
            return (
              <li key={id} className={classes.item}>
                <h4 className={classes.author}>
                  <span className={classes.descr}>Author: </span>
                  {author}
                </h4>
                <p className={classes.content}>
                  <span className={classes.descr}>Review: </span>
                  {content}
                </p>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Reviews;
