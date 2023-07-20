
import { createBrowserRouter, Outlet } from "react-router-dom";
import AcercaDe from "../components/acercade";
import App from "../App";
import Navbar from "../components/navbar";
import Login from "../components/Login";
import Productos from "../components/Productos";
import Ofertas from "../components/Ofertas";
import Nosotros from "../components/nosotros";
import Footer from "../components/Footer";
import AddUser from "../Pages/AddUser";
import UpdateUser from "../Pages/UpdateUser";
import IndexUser from "../Pages/IndexUser";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,



        children: [
            {
                path: "/",
                element: <App />
            },
            {
                path: "/acercade",
                element: <AcercaDe />,

            },
            {
                path: "/Login",
                element:
                    <Login />,
            },
            {
                path: "/AddUser",
                element: <AddUser/>
              },
              {
                path: "/IndexUser",
                element: <IndexUser/>
              },
              {
                path: "/UpdateUser/:id", // Agrega ":id" para indicar el parámetro dinámico
                element: <UpdateUser />
              },
              
          
            {
                path: "/ofertas",
                element: <Ofertas />
            },
            {
                path: "/nosotros",
                element: <Nosotros />
            },
            

        ],
    },
]);
