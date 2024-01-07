import * as React from "react"
import { RouteObject, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import FirstLesson from "../pages/FirstLesson/FirstLesson";


const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/section_1",
                element: <FirstLesson />
            },
        ]
    }
]

const router = createBrowserRouter(routes)

export default router;