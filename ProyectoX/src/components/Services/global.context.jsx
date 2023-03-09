import React from "react";
import { createContext } from "react";


export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({children}) =>{

    const[categorias, setCategorias] = React.useState([]);
    const[ciudades, setCiudades] = React.useState([]);
    const [productos, setProductos] = React.useState([]);
    
    React.useEffect(() => {  
      async function getData(){
        try{
          const response = await fetch('http://3.139.69.10:8080/categorias/');
          const data = await response.json();
          console.log(data);
          setCategorias(data);

        }catch(e){
          console.log("Error");
          console.log(e);
        }
      }


      async function getCiudades(){
        try{
          const response = await fetch('http://3.139.69.10:8080/ciudades/');
          const data = await response.json();
          console.log(data);
          setCiudades(data);

        }catch(e){
          console.log("Error");
          console.log(e);
        }
      }


      async function getProductos(){
        try{
          const response = await fetch('http://3.139.69.10:8080/producto/');
          const data = await response.json();
          console.log(data);
          setProductos(data);

        }catch(e){
          console.log("Error");
          console.log(e);
        }
      }

      

      getData();
      getCiudades();
      getProductos();
  

    }, []);
  
  
    return (
      <ContextGlobal.Provider value={{categorias,ciudades,productos}}>
        {children}
      </ContextGlobal.Provider>
    );
}