import { createBrowserRouter } from "react-router-dom";
import { About, ContactUs, Events, Home, Layout, ArticlePage } from "../pages";

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
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/news/:title_slug",
        element: <ArticlePage />,
      },
    ],
  },
]);

export default router;
