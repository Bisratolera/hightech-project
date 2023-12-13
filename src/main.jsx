import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import About from './pages/About';
import Registeration from './pages/Registeration';
import Students from './pages/Students';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />, 
      }, 
      {
        path: "/about",
        element: <About />, 
      },
      {
        path: "/*",
        element: <Notfound />,
      },
      {
        path: "/students",
        element: <Students />,
      },
      {
        path: "/register",
        element: <Registeration />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
)
