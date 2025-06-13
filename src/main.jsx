import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import App from "./App.jsx";
import Projects from "./pages/Projects.jsx";
import NotFoundError from "./pages/NotFoundError.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundError />,
  },
  {
    path: "/projects",
    element: <Projects />,
    errorElement: <NotFoundError />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <ScrollToTop />
      <RouterProvider router={router} />
    </>
  </StrictMode>
);
