import React, { Suspense, lazy } from "react";
import ReactDom from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorEle from "./components/ErrorEle";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";

/* - APP LAYOUT
 HEADER
  - Logo
  - Nav Items(Right Side)
  - Cart

 BODY
  - Search Bar
  - Restraunt Lists
    - Image
    - Restraunt Name
    - Rating
    - Cuisine

 FOOTER
  - Links
  - Feedbacks etc..

 
*/
const LazyCart= lazy(()=> import("./components/Cart"))

const AppLayout=()=> (
    <>
     <Header/>
    <Outlet/>
     <Footer/>
    </>
)

const appRouter= createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    errorElement:<ErrorEle/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantMenu/>
      },
      {
        path:"/cart",
        element: <Suspense fallback="Loading.......">
                 <LazyCart/>
                 </Suspense>
      }
    ]
  },

 
])

const root= ReactDom.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)