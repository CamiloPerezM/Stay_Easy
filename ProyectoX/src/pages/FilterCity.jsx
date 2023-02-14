import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card } from "../components/Card";
import { List } from "../components/List";

const FilterCity = () => {

    const datos = useParams();
    console.log(datos)
    const [productoCiudad, setProductoCiudad] = useState([]);


    useEffect(() => {

        async function getProducts() {

            try {
                const response = await fetch(`http://localhost:8080/producto/ciudad/${datos.id}`);
                const data = await response.json();
                setProductoCiudad(data);
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
                    productoCiudad.length>0?productoCiudad.map((data) => {
                        return (
                            <Card datos={data} key={data.id} />
                        )
                    }):null
                }
            </List>
        </>
    )

}

export default FilterCity;


