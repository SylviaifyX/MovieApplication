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
import Movie from './pages/Movie';
import Tv from './pages/Tv';

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
  },
  {
    path: "/movie",
    element:<Movie/>
  },
  {
    path: "/tv",
    element:<Tv/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
