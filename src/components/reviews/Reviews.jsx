import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../api/movies-api";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then((res) => setReviews(res.results));
  }, [movieId]);

  console.log(reviews);

  return (
    <>
      <h1>Reviews</h1>
      <ul>
        {reviews.length > 0 &&
          reviews.map((review) => {
            return (
              <li key={review.id}>
                <h4>{review.author}</h4>
                <p>{review.content}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Reviews;
