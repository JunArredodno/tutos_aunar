import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import "./micuenta.css"
const URL_LOGIN="http://localhost/Proyecto/tutorias/scr/login.php";
{/*funcion asincrona para enviar los datos*/}

const enviarDatos=async(url,data)=>{
  
  const resp= await fetch(url,{
    method:'POST',
    body:JSON.stringify(data),
    headers:{
      "Content-Type":"application/json"
    }
  });
  const json= await resp.json();
  console.log("Jason:"+json)
  return json;
}



export default function Micuenta(props) {

  const refUsuario=useRef(null);
  const refContra=useRef(null);

  const handleLogin= async()=>{
    const data={
      "nombre":refUsuario.current.value,
      "cedula":refContra.current.value
    };
    const respJson=await enviarDatos(URL_LOGIN, data);
    console.log(respJson);
    props.acceder(respJson.conectado);
  }

  return (
    <div className='micuenta'>
        <form className="formulario">
          <h1 className='titulo_sesion'>Inicio de sesion</h1>
          <input className='nombre' type="text" placeholder='Nombre completo' ref={refUsuario}></input>
          <input className='cedula' type="password" placeholder='Contraseña' ref={refContra}></input>
          <button className='enviar' onClick={handleLogin}>Ingresar</button>
        </form>
    </div>
  )
}