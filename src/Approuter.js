import React from "react";  
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";

const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        } ,
        {
            path: '/Contact',
            element: <Contact />
        }
])
export default appRouter;