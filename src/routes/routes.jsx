
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
        path:"/CrearProducto",
        element: < AddProducts />,    
    },
    // {
    //     path:"/ActualizarProducto",
    //     element: < UpdateProducts />,    
    // },
    {
        path: "/ActualizarProducto/:id", // Agregamos el parámetro :id
        element: <UpdateProducts />
      }
]);

//Toma en cuenta que si quieres mandar el ID por la acció de algún botón, deberás agregar el route que lo especifique.