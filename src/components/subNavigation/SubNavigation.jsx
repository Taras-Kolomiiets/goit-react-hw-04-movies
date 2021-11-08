import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import PreLoader from "../preLoader";

const Cast = lazy(() => import("../cast" /*webpackChunkName: "cast" */));
const Reviews = lazy(() =>
  import("../reviews" /*webpackChunkName: "reviews" */)
);

const SubNavigation = () => {
  return (
    <Suspense fallback={<PreLoader />}>
      <Switch>
        <Route path={`/movies/:slug/cast`}>
          <Cast />
        </Route>
        <Route path={`/movies/:slug/reviews`}>
          <Reviews />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default SubNavigation;
