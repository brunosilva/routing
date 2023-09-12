import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/home";
import Profile from "../pages/profile";
import Projects from "../pages/projects";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "/",
          element: <Homepage />,
        },
      ],
    },
  ]);