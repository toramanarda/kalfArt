import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import KalfArt from './KalfArt.jsx';
import './App.css';
import './Queries.css';
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        index: true,
        element: <KalfArt />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
