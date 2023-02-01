import React from "react";
import { createContext } from "react";


export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({children}) =>{

    const[categorias, setCategorias] = React.useState([]);

    // const handleFetchRequest = async () => {
    //   const response = await fetch("http://localhost:8080/categorias/");
    //   const jsonResponse = await response.json();
    //   setCategorias(jsonResponse);
    // };
    
    React.useEffect(() => {
      async function getData(){
        try{
          const response = await fetch('http://localhost:8080/categorias/');
          const data = await response.json();
  
          // axios.get("http://localhost:8080/categorias/")
          // .then(response => {
          //   setCategorias(response.data);
          //   console.log(response.data);
          // })
          console.log(data);
  
          setCategorias(data);
        }catch(e){
          console.log("Error");
          console.log(e);
        }
      }
      getData();
      // handleFetchRequest()

    }, []);
  
  
    return (
      <ContextGlobal.Provider value={{categorias}}>
        {children}
      </ContextGlobal.Provider>
    );
}