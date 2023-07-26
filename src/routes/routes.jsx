
import { createBrowserRouter, Outlet } from "react-router-dom";
import AcercaDe from "../components/acercade";
import App from "../App";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Productos from "../components/Productos";
import Ofertas from "../components/Ofertas";
import Nosotros from "../components/nosotros";
import Categorias from "../components/Categorias";
import DashboardIndex from "../pages/dashboard/dashboardIndex";
import IndexProducts from "../pages/dashboard/crudProdcuts/indexProducts";
import IndexCategorie from "../pages/dashboard/crudCategories/indexCategorie";
import IndexProdcuts_Categories from "../pages/dashboard/crudProducts_Categories/IndexProducts_Categories";
import AddProducts from "../pages/dashboard/crudProdcuts/addProducts";
import UpdateProducts from "../pages/dashboard/crudProdcuts/UpdateProducts";
import IndexClient from "../pages/dashboard/crudClientes/IndexClient";
import AddClients from "../pages/dashboard/crudClientes/AddClient";
import UpdateClient from "../pages/dashboard/crudClientes/UpdateClient";
import IndexPedidos from "../pages/dashboard/crudPedidos/IndexPedidos";
import AddPedidos from "../pages/dashboard/crudPedidos/AddPedido";
import UpdatePedidos from "../pages/dashboard/crudPedidos/UpdatePedidos";


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
                path: "/productos",
                element: <Productos />
            },
            {
                path: "/ofertas",
                element: <Ofertas />
            },
            {
                path: "/nosotros",
                element: <Nosotros />
            },
            {
                path:"/categoriasPrincipales",
                element: <Categorias />
            },
            

        ],
    
    },
    {
        path:"/dashboard",
        element: < DashboardIndex />,    
    },
    {
        path:"/IndexProductos",
        element: < IndexProducts />,    
    },
    {
        path:"/IndexCategorias",
        element: < IndexCategorie />,    
    },
    {
        path:"/IndexProductos_Categorias",
        element: < IndexProdcuts_Categories />,    
    },
    {
        path:"/IndexClientes",
        element: < IndexClient />,    
    },
    {
        path:"/IndexPedidos",
        element: < IndexPedidos />,    
    },
    {
        path:"/CrearProducto",
        element: < AddProducts />,    
    },
    {
        path:"/CrearCliente",
        element: < AddClients />,    
    },
    {
        path:"/CrearPedido",
        element: < AddPedidos />,    
    },
    // {
    //     path:"/ActualizarProducto",
    //     element: < UpdateProducts />,    
    // },
    {
        path: "/ActualizarProducto/:id", // Agregamos el parámetro :id
        element: <UpdateProducts />
      },
      {
        path: "/ActualizarCliente/:id", // Agregamos el parámetro :id
        element: <UpdateClient />
      },
      {
        path: "/ActualizarProducto/:id", // Agregamos el parámetro :id
        element: <UpdateProducts />
      },
      {
        path: "/ActualizarPedido/:id", // Agregamos el parámetro :id
        element: <UpdatePedidos />
      }
]);

//Toma en cuenta que si quieres mandar el ID por la acció de algún botón, deberás agregar el route que lo especifique.