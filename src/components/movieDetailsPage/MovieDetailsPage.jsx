import { useEffect, useState } from "react";
import {
  NavLink,
  useParams,
  useRouteMatch,
  useLocation,
  useHistory,
} from "react-router-dom";
import { getMovieDetails } from "../../api/movies-api";
import classes from "./MovieDetailsPage.module.css";
import PreLoader from "../preLoader";
import SubNavigation from "../subNavigation";
import MovieCard from "../movieCard";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState(null);

  const { slug } = useParams();
  const { url } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  const movieId = slug.match(/[a-z0-9]+$/)[0];

  useEffect(() => {
    setStatus("pending");
    getMovieDetails(movieId).then((movie) => {
      setMovie(movie);
      setStatus("resolved");
    });
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/");
  };

  return (
    <>
      {status === "pending" && <PreLoader />}

      {status === "resolved" && (
        <>
          <button type="button" onClick={onGoBack} className={classes.button}>
            {location?.state?.label ?? "Go back"}
          </button>
          <MovieCard movie={movie} />
          <hr />

          <h3>Aditional information:</h3>
          <ul>
            <li>
              <NavLink
                to={{
                  pathname: `${url}/cast`,
                  state: { from: location?.state?.from },
                }}
                className={classes.link}
                activeClassName={classes.activeLink}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: `${url}/reviews`,
                  state: { from: location?.state?.from },
                }}
                className={classes.link}
                activeClassName={classes.activeLink}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          <hr />
          <SubNavigation />
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
