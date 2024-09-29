import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home';
import Dashboard from './pages/Dashboard';
import Upcoming from './pages/Upcoming';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>
  },
  {
    path: "/:mediaType/:id",
    element:<Dashboard/>
  },
  {
    path: "/upcoming",
    element:<Upcoming/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
