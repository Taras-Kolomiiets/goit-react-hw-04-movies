import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Container from "./components/container";
import Navigation from "./components/navigation";
// import { Loading } from "notiflix";

const HomePage = lazy(() =>
  import("./components/homePage" /*webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("./components/moviesPage" /*webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./components/movieDetailsPage" /*webpackChunkName: "movie-details-page" */
  )
);
const ErrorPage = lazy(() =>
  import("./components/errorPage" /*webpackChunkName: "error-page" */)
);

const App = () => {
  return (
    <Container>
      <Navigation />

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:slug">
            <MovieDetailsPage />
          </Route>

          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
};

export default App;
