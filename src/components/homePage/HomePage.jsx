import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTrendingMovies } from "../../api/movies-api";
import classes from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then((movies) => setMovies(movies.results));
  }, []);

  return (
    <div className={classes.wrapper}>
      {movies.map((movie) => {
        return (
          <Link
            to={`/movies/${movie.id}`}
            key={movie.id}
            className={classes.link}
          >
            {movie.title}
          </Link>
        );
      })}
    </div>
  );
};

export default HomePage;
