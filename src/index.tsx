import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Diplom } from './Diplom';
import { ErrorPage } from './ErrorPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/d/2431451dcv3d24edf4432v14s335311c',
    element: <Diplom />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/',
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.render(
  <React.StrictMode>
      <RouterProvider router={router} />  
  </React.StrictMode>,
  document.getElementById('root')
);