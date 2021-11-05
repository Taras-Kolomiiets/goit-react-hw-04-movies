import HomePage from "./components/homePage";
import MoviesPage from "./components/moviesPage";
import MovieDetailsPage from "./components/movieDetailsPage";
import ErrorPage from "./components/errorPage";
import { Route, Switch, NavLink } from "react-router-dom";

const App = () => {
  return (
    <>
      <nav>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
