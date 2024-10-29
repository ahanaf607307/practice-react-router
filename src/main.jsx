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
const router = createBrowserRouter ([
  {
    path:'/',
    element:<Home/>,
    children:[
      {
        path:'/banner',
        element : <Banner/>
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
