import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./routes/Home.tsx";
import { inject } from '@vercel/analytics';

const router = createBrowserRouter([
        {
            path: "/",
            element: <App /> ,
            children: [
                { path: "/", element: <Home /> },
            ]
        }
    ]
);
inject();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
