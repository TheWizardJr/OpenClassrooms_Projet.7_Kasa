import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import App from "./App";

const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const About = lazy(() => import("./pages/About/About"));
const Accommodation = lazy(() => import("./pages/Accommodation/Accommodation"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/accommodation/:id",
        element: <Accommodation />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
