import React from "react";
import DashboardSidebar from "../dashboardSideBar";
export default function IndexProdcuts_Categories(){
    return(
        <>
        <DashboardSidebar></DashboardSidebar>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg p-4 sm:ml-64">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                   #
                </th>
                <th scope="col" class="px-6 py-3">
                    id_producto
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    id_categoria
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Actualizar
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Eliminar
                </th>
                
                
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Laptop
                </td>
        
            </tr>
      
     
        
        </tbody>
    </table>
</div>

        </>
    )
}