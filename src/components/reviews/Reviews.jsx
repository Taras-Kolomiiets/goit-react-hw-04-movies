import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../api/movies-api";
import classes from "./Reviews.module.css";
import PreLoader from "../preLoader";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState(null);

  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];

  useEffect(() => {
    setStatus("pending");
    getMovieReviews(movieId).then((res) => {
      setReviews(res.results);
      setStatus("resolved");
    });
  }, [movieId]);

  return (
    <>
      {status === "pending" && <PreLoader />}

      {reviews.length === 0 && (
        <h1>Sorry, we haven't reviews for that film.</h1>
      )}

      {status === "resolved" && (
        <ul className={classes.list}>
          {reviews.map(({ id, author, content }) => {
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
      )}
    </>
  );
};

export default Reviews;
