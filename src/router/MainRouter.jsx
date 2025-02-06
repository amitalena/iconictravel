import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicRouter from "./routes/PublicRouter";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import Blogs from './../pages/Blogs';

const routers = createBrowserRouter([
    {
        path: "/",
        element: <PublicRouter />,
        children: [
            {
                path: "",
                index: true,
                element: <Home />
            },
            {
                path: "/gallery",
                element: <Gallery />
            },
            {
                path: "/blogs",
                element: <Blogs />
            },
            {
                path: "contact-us",
                element: <Contact />
            },
        ],
    },
]);



export default function MainRouter() {
    return <RouterProvider router={routers} />
}