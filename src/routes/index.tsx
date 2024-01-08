import * as React from "react"
import { RouteObject, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import FirstLesson from "../pages/FirstLesson/FirstLesson";
import SecondLesson from "../pages/SecondLesson/SecondLesson";
import Calculator from "../pages/Calculator/Calculator";
import FetchTest from "../pages/Calculator/FetchTest/FetchTest";


const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/section_1",
                element: <FirstLesson />
            },
            {
                path: "/section_2",
                element: <SecondLesson />
            },
            {
                path: "/calculator",
                element: <Calculator />
            },
            {
                path: "/fetch_test",
                element: <FetchTest />
            }
        ]
    }
]

const router = createBrowserRouter(routes)

export default router;