import React, { useContext } from "react";
import Header from "./Header"
import Footer from "./Footer"
import { ContextGlobal } from "./utils/global.context";
import { List } from "./List";
import { Card } from "./Card";





const FiltroCategoria = () => {

    const {productos} = useContext(ContextGlobal);

    return (

    <div>
    
    <List title="" style="spaceCategory" background="bgRecomendations">
        {
            productos
            .map((producto) => ({
                crimg: producto.imagenes[0].urlImagen,
                category: producto.categoria.titulo,
                title: producto.tituloDescripcion,
                location: producto.ciudad.nombre,
                description: producto.contenidoDescripcion,
                map: producto.ubicacionMaps,
                calificacion: producto.puntaje
            }))
            .map((data, i) => {
                return (
                    <Card datos={data} id={i} key={i} />
                )
            })
        }
    </List>
    
    </div>
    )
}

export default FiltroCategoria;


   