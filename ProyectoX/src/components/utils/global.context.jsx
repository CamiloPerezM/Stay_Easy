import React from "react";
import { createContext } from "react";


export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({children}) =>{

    const[categorias, setCategorias] = React.useState([]);
    const[productos, setProductos] = React.useState([]);



    // const handleFetchRequest = async () => {
    //   const response = await fetch("http://localhost:8080/categorias/");
    //   const jsonResponse = await response.json();
    //   setCategorias(jsonResponse);
    // };

    async function getData(){
      try{
        const response = await fetch('http://localhost:8080/categorias/');
        const data = await response.json();
        console.log(data);

        setCategorias(data);
      }catch(e){
        console.log("Error");
        console.log(e);
      }
    }

    async function getProductos(){
      try{
        const response = await fetch('http://localhost:8080/producto/');
        const data = await response.json();
        console.log('Producto', data);

        setProductos(data);
      }catch(e){
        console.log("Error");
        console.log(e);
      }
    }
    
    React.useEffect(() => {
      
      getData();
      getProductos();
      // handleFetchRequest()

    }, []);
  
  
    return (
      <ContextGlobal.Provider value={{categorias, productos}}>
        {children}
      </ContextGlobal.Provider>
    );
}