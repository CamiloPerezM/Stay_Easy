import React, {useEffect, useState } from "react";

import { Card } from "../components/Card";
import { List } from "../components/List";
import { useLocation } from "react-router-dom";

const FD = () => {

    const location = useLocation();

    
    console.log("LOG FilterDate",location)
    const [informacion, setInformacion] = useState([]);
    
    

    useEffect(() => {

        async function getProducts() {

            try {
                const response = await fetch(`http://3.139.69.10:8080/producto/fech/${location.search}`);
                const data = await response.json();
                setInformacion(data);
            } catch (error) {
                console.log(error);
            }
        }


       

        
        getProducts();
    }, [])


    
  
   

    return (
        <>


            <List title={`Hospedajes disponibles:`} background="bgFilter" style="spaceCategory">
        

                {
                    informacion.length>0?informacion.map((data) => {
                        return (
                            <Card datos={data} key={data.id} />
                        )
                    }):null
                }
            </List>

        </>
    )

}

export default FD;


