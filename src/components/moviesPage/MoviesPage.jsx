import { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { getSearchedMovies } from "../../api/movies-api";
import classes from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const { url } = useRouteMatch();

  const changeQuery = (e) => {
    setQuery(e.target.value);
  };

  const findMovies = () => {
    if (query === "") {
      alert("Please input movie.");
      return;
    }
    getSearchedMovies(query).then((movies) => setMovies(movies.results));
    setQuery("");
  };

  console.log(movies);

  return (
    <>
      <div className={classes.wrapper}>
        <input
          className={classes.input}
          type="text"
          placeholder="find movies"
          value={query}
          onChange={changeQuery}
        />
        <button type="button" onClick={findMovies} className={classes.button}>
          Search
        </button>
      </div>
      {movies.length > 0 &&
        movies.map((movie) => {
          return (
            <Link
              to={`${url}/${movie.id}`}
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
