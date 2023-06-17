import { useRoutes } from "react-router-dom";
import { lazy, Suspense } from 'react';
import NotFound from "./404/NotFound";
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
        {
            path: "*",
            element: <NotFound />,
        },
        { path: "/Product/:productName", element: <Product /> },
    ]);
    return (
        // <Route path="heroes/:id" element={<Hero />} />
        <>{element}</>
    );

}
