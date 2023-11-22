import React from "react";
import ReactDom from "react-dom/client"

const heading1= React.createElement(
    "h1",
    {id:"title"},
    "Heading1"
)
const heading2= React.createElement(
    "h2",
    {id:"title"},
    "Heading2"
)
const container= React.createElement(
    "div",
    {id:"container"},
    [heading1,heading2]
)
const root= ReactDom.createRoot(document.getElementById("root"))
root.render(container)