import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IndexUser from "./IndexUser";
// eslint-disable-next-line react/prop-types
export default function User() {
    const id = window.location.href.split("/")[4]

    const [user, setUser] = useState({});


    const eliminarUser = function(e) {
        e.preventDefault();
        console.log(id)
        axios.delete("http:/localhost:3000/users/" + id).then(function(){
            console.log("Borrado corectamente")
        }).catch(function(){
            console.error("No se ha eliminado")
        })
        window.location.href="/User"
    }

    useEffect(function(){
        axios.get("http://localhost:3000/users/" + id).then(function(datos){
            console.log(datos.data)
            setUser(datos.data)
        }).catch(function(){
            console.error("Error")
        })
    },[])
    
    return(<div>
        <h1>{user.nombre}</h1>
        <p>{user.password}</p>
        <span>{user.stock}</span>
        <span>
        <Link to="/User">Volver</Link>
        </span>

        <span onClick={eliminarUser} className=" text-red-500 cursor-pointer">
            Eliminar
        </span>
    </div>)
} 