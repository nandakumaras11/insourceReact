import { useRoutes } from "react-router-dom";
import { lazy, Suspense } from 'react';
// import Home from "./Home/Home";
const Home = lazy(() => import("./Home/Home"));
const Product = lazy(() => import("./Product/Product"));
// import Product from "./Product/Product";
export const Routes = () => {

    let element = useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        { path: "/Product", element: <Product /> },
    ]);
    return (
        <>{element}</>
    );

}
