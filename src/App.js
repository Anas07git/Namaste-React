import React from "react";
import ReactDom from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

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

const AppLayout=()=> (
    <>
     <Header/>
     <Body/>
     <Footer/>
    </>
)

const root= ReactDom.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)