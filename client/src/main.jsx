import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import SingleBook from "./pages/SingleBook";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutUsPage.jsx";
import BookPage from "./pages/Book.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/profiles/:id",
        element: <Profile />,
      },
      {
        path: "/me",
        element: <Profile />,
      },
      {
        path: "/books/:bookId",
        element: <SingleBook />,
      },
      {
        path: "/aboutus",
        element: <AboutPage />,
      },
      {
        path: "/books",
        element: <BookPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
