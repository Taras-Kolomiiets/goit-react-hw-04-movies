import { Route, Switch } from "react-router-dom";
import HomePage from "./components/homePage";
import MoviesPage from "./components/moviesPage";
import MovieDetailsPage from "./components/movieDetailsPage";
import ErrorPage from "./components/errorPage";
import Container from "./components/container";
import Navigation from "./components/navigation";

const App = () => {
  return (
    <Container>
      <Navigation />

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
    </Container>
  );
};

export default App;
