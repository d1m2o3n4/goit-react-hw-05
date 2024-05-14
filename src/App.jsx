import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const Navigation = lazy(() => import("./components/Navigation/Navigation"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);
const ErrorMassage = lazy(() =>
  import("./components/ErrorMassage/ErrorMassage")
);

function App() {
  return (
    <>
      <Navigation fallvack={<div>Loading page...</div>} />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:moviesid" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<ErrorMassage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
