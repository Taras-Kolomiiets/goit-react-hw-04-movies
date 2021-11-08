import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../api/movies-api";
import classes from "./Cast.module.css";
import PreLoader from "../preLoader";

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState(null);

  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];

  useEffect(() => {
    setStatus("pending");
    getMovieCast(movieId).then((res) => {
      setCast(res.cast);
      setStatus("resolved");
    });
  }, [movieId]);

  const urlComponent = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      {status === "pending" && <PreLoader />}

      {status === "resolved" && (
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
      )}
    </>
  );
};

export default Cast;
