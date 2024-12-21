import { createBrowserRouter } from "react-router-dom";
import MainRoute from "./MainRoute";
import About from "../screens/About";
import Blog from "../screens/Blog";
import Resume from "../screens/Resume";
import Gallery from "../screens/Gallery";
import Project from "../screens/Project";
import BlogPost from "../components/BlogPost";
import Contact from "../screens/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute />,
    children: [
      { path: "", element: <About/> },
      { path: "Gallery", element: <Gallery /> },
      { path: "Resume", element: <Resume /> },
      { path: "Blog", element: <Blog /> },
      { path: "Blog/:id", element: <BlogPost /> },
      { path: "Contact", element: <Contact /> },
      { path: "Project", element: <Project /> },
    ],
  },
]);

export default router;
