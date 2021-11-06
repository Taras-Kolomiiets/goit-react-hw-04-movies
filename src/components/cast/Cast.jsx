import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../api/movies-api";
import classes from "./Cast.module.css";

const Cast = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then((res) => setCast(res.cast));
  }, [movieId]);

  const urlComponent = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      <ul className={classes.list}>
        {cast.length > 0 &&
          cast.map((actor) => {
            return (
              <li key={actor.id} className={classes.item}>
                <img
                  src={urlComponent + actor.profile_path}
                  alt={actor.name}
                  className={classes.image}
                />
                <p>{actor.name}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Cast;
