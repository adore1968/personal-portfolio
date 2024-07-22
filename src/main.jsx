import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import GithubPage from "./pages/GithubPage";
import ErrorPage from "./pages/ErrorPage";
import PostPage from "./pages/PostPage";

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
          path: "/blog",
          element: <BlogPage />,
        },
        {
          path: "/github",
          element: <GithubPage />,
        },
        {
          path: "/posts/:title",
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
