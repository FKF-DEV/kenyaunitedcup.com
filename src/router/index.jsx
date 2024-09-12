import { createBrowserRouter } from "react-router-dom";
import { About, Home, Events, Layout, ArticlePage, AllArticles } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
        path: "/events",
        element: <Events />,
      },
      {
        path: "/news/:title_slug",
        element: <ArticlePage />,
      },
      {
        path: "/news/all-articles",
        element: <AllArticles />,
      }
    ],
  },
]);

export default router;
