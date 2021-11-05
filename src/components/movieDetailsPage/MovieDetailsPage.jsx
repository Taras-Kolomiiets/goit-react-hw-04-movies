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

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});

  const { movieId } = useParams();
  //   const { url } = useRouteMatch();

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <h1>{movie.title}</h1>
      <h2>Aditional information</h2>
      <ul>
        <li>
          <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
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
