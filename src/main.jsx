import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

// Components and pages
import App from './App';
import Index from './pages/Index';
import StatesUf from './pages/StatesUf';
import ErrorPage from './pages/errorPage';
import Table from './pages/Table';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Index />
      },
      {
        path: "states",
        element: <StatesUf />
      },
      {
        path: "/states/:state",
        element: <Table />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
