import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";

import AppLayout from "./components/layout/AppLayout";
import "./App.css";
import { ErrorPage } from "./pages/ErrorPage";
import { getMoviesData } from "./api/GetAPIData";
import { MovieDetails } from "./components/UI/MovieDetails";

import { Contact } from "./pages/Contact";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: getMoviesData,
        },
        {
          path: "/movie/:movieID",  // !executeStep--1 this will hit navigate/t5459587
          element: <MovieDetails />, // !executeStep--3 MovieDetaisls' url path hoga vaha appear hoga
        },
        {
          path: "/contact",
          element: <Contact />,
          
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
