import { createBrowserRouter } from "react-router-dom";
import {
  About,
  Home,
  Layout,
  ArticlePage,
  AllArticles,
  ResourcesPage,
  TermsPage,
  PrivacyPolicyPage,
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
        path: "/news/:title_slug",
        element: <ArticlePage />,
      },
      {
        path: "/files",
        element: <ResourcesPage />,
      },
      {
        path: "/terms",
        element: <TermsPage />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicyPage />,
      },
    ],
  },
]);

export default router;
