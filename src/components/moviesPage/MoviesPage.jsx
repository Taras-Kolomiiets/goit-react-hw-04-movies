import { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { getSearchedMovies } from "../../api/movies-api";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const { url } = useRouteMatch();

  const changeQuery = (e) => {
    setQuery(e.target.value);
  };

  const findMovies = () => {
    getSearchedMovies(query).then((movies) => setMovies(movies.results));
    setQuery("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="find movies"
        value={query}
        onChange={changeQuery}
      />
      <button type="button" onClick={findMovies}>
        Search
      </button>
      {movies.length > 0 &&
        movies.map((movie) => {
          return (
            <Link to={`${url}/${movie.id}`} key={movie.id}>
              {movie.title}
            </Link>
          );
        })}
    </>
  );
};

export default MoviesPage;
