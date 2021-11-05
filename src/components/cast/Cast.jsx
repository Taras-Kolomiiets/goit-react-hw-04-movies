import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../api/movies-api";

const Cast = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then((res) => setCast(res.cast));
  }, [movieId]);

  return (
    <>
      <h1>Cast</h1>
      <ul>
        {cast.length > 0 &&
          cast.map((actor) => {
            return (
              <li key={actor.id}>
                <p>{actor.name}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Cast;
