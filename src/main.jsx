import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from"react-router-dom"
import Home from './Component/Home/Home'
import Banner from './Component/Banner/Banner'
import Main from './Component/Main/Main'
import Login from './Component/Banner/Login'
import Card from './Component/Card/Card'
const router = createBrowserRouter ([
  {
    path:'/',
    element:<Home/>,
    children:[
      {
        path:'/login',
        element : <Login/>
      },
      {
        path:'/banner',
        element : <Banner/>,
      },
      {
        path:'/card',
        element : <Card/>,
        loader:async () => {
          const res = await fetch('https://jsonplaceholder.typicode.com/users');
          const data =await res.json()
          return data
        }
      },
      {
        path : '/main',
        element : <Main/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
)
