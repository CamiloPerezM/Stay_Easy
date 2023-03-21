import React, {useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card } from "../components/Card";
import { List } from "../components/List";

const FilterDateC = () => {

    const datos = useParams();
    console.log("filterDate",datos)
    const [informacion, setInformacion] = useState([]);
    const paramGet = location.href;
    console.log(paramGet);
    const params = paramGet.slice(77,130);
    console.log(params);


    useEffect(() => {

        async function getProducts() {

            try {
                const response = await fetch(`http://18.219.37.134:8080/producto/fecha/ciudad/${params}`);
                const data = await response.json();
                setInformacion(data);
            } catch (error) {
                console.log(error);
            }
        }


       

        
        getProducts();
    }, [datos.id])


    
  
   

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

export default FilterDateC;


