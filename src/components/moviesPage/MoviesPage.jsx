import { useState, useEffect } from "react";
import slugify from "slugify";
import { Link, useRouteMatch, useLocation, useHistory } from "react-router-dom";
import { getSearchedMovies } from "../../api/movies-api";
import classes from "./MoviesPage.module.css";
import SearchBar from "../searchBar";

const makeSlug = (string) => slugify(string, { lower: true });

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  const { url } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (query) {
      getSearchedMovies(query)
        .then(({ results }) => {
          if (results.length === 0) {
            alert("Sorry, we haven't such movie.");
            return;
          }

          setMovies(results);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [query]);

  const onSeachSubmit = (query) => {
    history.push({ ...location, search: `query=${query}` });
  };

  return (
    <>
      <SearchBar onSubmit={onSeachSubmit} />

      {movies.length > 0 &&
        movies.map((movie) => {
          return (
            <Link
              to={{
                pathname: `${url}/${makeSlug(`${movie.title} ${movie.id}`)}`,
                state: { from: location, label: "Go to searched movies" },
              }}
              key={movie.id}
              className={classes.link}
            >
              {movie.title}
            </Link>
          );
        })}
    </>
  );
};

export default MoviesPage;
