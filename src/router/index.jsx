import { createBrowserRouter } from "react-router-dom";
import {
  About,
  Home,
  Layout,
  ArticlePage,
  AllArticles,
  ResourcesPage,
} from "../pages";

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
        path: "/news",
        element: <AllArticles />,
      },
      {
        path: "/files",
        element: <ResourcesPage />,
      },
      {

        path: "/news/:title_slug",
        element: <ArticlePage />,
      },
    ],
  },
]);

export default router;
