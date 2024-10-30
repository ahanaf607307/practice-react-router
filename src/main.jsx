import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home/Home";
import Banner from "./Component/Banner/Banner";
import Main from "./Component/Main/Main";
import Login from "./Component/Banner/Login";
import Card from "./Component/Card/Card";
import Posts from "./Component/Posts/Posts";
import PostDetails from "./Component/Posts/PostDetails";
import Contact from "./Component/Card/Contact";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
      
      {
        path: "/card",
        element: <Card />,
        loader: async () => {
          const res = await fetch("https://jsonplaceholder.typicode.com/users");
          const data = await res.json();
          return data;
        }
      },
      {
       path: '/contact/:contactId',
        loader:async({params}) => {
          const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.contactId}`)
          const data = res.json()
          return data
        },
       element:<Contact/>
      },
      {
        path: "/main",
        element: <Main />
      },
      {
        path: "/posts",
        loader: async () => {
          const res = await fetch("https://jsonplaceholder.typicode.com/users");
          const data = res.json();
          return data;
        },
        element: <Posts />
      },
      {
        path: "/post/:postId",
        loader: async({params}) => {
          const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.postId}`)
          const data = res.json()
          return data
        } , 
        element: <PostDetails />
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
