import React, { useContext, useEffect, useState } from "react";
import { useHref, useParams } from "react-router";
import { Card } from "../components/Card";
import { List } from "../components/List";

const FilterDate = () => {

    const datos = useParams();
    console.log("filterDate",datos)
    const [productoCiudad, setProductoCiudad] = useState([]);


    useEffect(() => {

        async function getProducts() {

            try {
                const response = await fetch(`http://localhost:8080/producto/fecha/ciudad/${datos}`);
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

export default FilterDate;


