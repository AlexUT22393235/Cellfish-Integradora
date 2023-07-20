import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importa el archivo CSS de Tailwind
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
);


// Se encarga de haer funcionar todos los elementos