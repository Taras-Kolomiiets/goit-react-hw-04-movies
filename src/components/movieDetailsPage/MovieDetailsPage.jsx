import { useEffect, useState } from "react";
import {
  NavLink,
  useParams,
  useRouteMatch,
  Route,
  Switch,
} from "react-router-dom";
import { getMovieDetails } from "../../api/movies-api";
import Cast from "../cast";
import Reviews from "../reviews";
import classes from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});

  const { movieId } = useParams();
  const { url } = useRouteMatch();

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const urlComponent = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      <div className={classes.wrapper}>
        <img
          src={urlComponent + movie.poster_path}
          alt={movie.title}
          className={classes.image}
        />
        <div className={classes.innerWrapper}>
          <h1>{movie.title}</h1>
          <p>
            <span className={classes.decsr}>Release date: </span>
            {movie.release_date}
          </p>
          <p>
            <span className={classes.decsr}>Rating: </span> {movie.vote_average}
          </p>
          <p className={classes.overview}>
            <span className={classes.decsr}>Overview: </span> {movie.overview}
          </p>
        </div>
      </div>
      <hr />
      <h3>Aditional information:</h3>
      <ul>
        <li>
          <NavLink
            to={`${url}/cast`}
            className={classes.link}
            activeClassName={classes.activeLink}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${url}/reviews`}
            className={classes.link}
            activeClassName={classes.activeLink}
          >
            Reviews
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route path={`/movies/:movieId/cast`}>
          <Cast />
        </Route>
        <Route path={`/movies/:movieId/reviews`}>
          <Reviews />
        </Route>
      </Switch>
    </>
  );
};

export default MovieDetailsPage;
