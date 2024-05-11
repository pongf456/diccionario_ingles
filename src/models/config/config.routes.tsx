import { createBrowserRouter } from "react-router-dom";
import App from "../../routes/App";
import { Suspense } from "react";
import Loader from "../../routes/Loader";
import { LazyAcces, LazyDescription } from "./config.lazyRoutes";
const routerFromProject = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                index:true,
                element:<Suspense fallback={<Loader/>}><LazyAcces/></Suspense>
            },
            {
                path:":word",
                element:<Suspense fallback={<Loader/>}><LazyDescription/></Suspense>
            }
        ]
    }
])
export default routerFromProject