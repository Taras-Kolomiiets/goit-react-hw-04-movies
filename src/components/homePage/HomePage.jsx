import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTrendingMovies } from "../../api/movies-api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then((movies) => setMovies(movies.results));
  }, []);

  return (
    <>
      {movies.map((movie) => {
        return (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            {movie.title}
          </Link>
        );
      })}
    </>
  );
};

export default HomePage;
