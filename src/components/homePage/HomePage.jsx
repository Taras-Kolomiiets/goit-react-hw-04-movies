import { useEffect, useState } from "react";
import slugify from "slugify";
import { Link, useLocation } from "react-router-dom";
import { getTrendingMovies } from "../../api/movies-api";
import classes from "./HomePage.module.css";
import PreLoader from "../preLoader";

const makeSlug = (string) => slugify(string, { lower: true });

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setStatus("pending");
    getTrendingMovies().then((movies) => {
      setMovies(movies.results);
      setStatus("resolved");
    });
  }, []);

  return (
    <div className={classes.wrapper}>
      {status === "pending" && <PreLoader />}
      <h2>Trending today:</h2>
      {status === "resolved" &&
        movies.map((movie) => {
          return (
            <Link
              to={{
                pathname: `/movies/${makeSlug(`${movie.title} ${movie.id}`)}`,
                state: { from: location, label: "Go to Home" },
              }}
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
