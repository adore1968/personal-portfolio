import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GithubPage from "./pages/GithubPage";
import ErrorPage from "./pages/ErrorPage";
import PostPage from "./pages/PostPage";
import ConocimientosPage from "./pages/ConocimientosPage";

const router = createBrowserRouter(
  [
    {
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/mis-conocimientos",
          element: <ConocimientosPage />,
        },
        {
          path: "/github",
          element: <GithubPage />,
        },
        {
          path: "/conocimientos/:title",
          element: <PostPage />,
        },
      ],
    },
  ],
  {
    basename: "/personal-portfolio/",
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
