
import { createBrowserRouter, Outlet } from "react-router-dom";
import AcercaDe from "../components/acercade";
import App from "../App";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Administrador from "../Pages/Administrador";
import Ofertas from "../components/Ofertas";
import Nosotros from "../components/Nosotros";
import Footer from "../components/Footer";
import AddAdministrador from "../Pages/AddAdministrador";
import UpdateAdministrador from "../Pages/UpdateAdministrador";
import IndexAdministrador from "../Pages/IndexAdministrador";
import ConfirmacionPago from "../Pages/Pagos/ConfirmacionPago"
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
                path: "/AddAdministrador",
                element: <AddAdministrador />
              },
              {
                path: "/IndexAdministrador",
                element: <IndexAdministrador />
              },
              {
                path: "/UpdateAdministrador/:id", // Agrega ":id" para indicar el parámetro dinámico
                element: <UpdateAdministrador />
              },
              {
                path: "/ConfirmacionPago", // Agrega ":id" para indicar el parámetro dinámico
                element: <ConfirmacionPago />
              },
              {
                path: "/Administrador", // Agrega ":id" para indicar el parámetro dinámico
                element: <Administrador />
              },
          
            {
                path: "/ofertas",
                element: <Ofertas />
            },
            {
                path: "/Nosotros",
                element: <Nosotros />
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
           

        ],
    },
]);
