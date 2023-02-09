import React, { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import { List } from "./List";
import { Card } from "./Card";
import { useLocation } from "react-router";





const FiltroCategoria = () => {

    const {productos} = useContext(ContextGlobal);
    const location = useLocation();
    const categoriaSelecionada = location.state?.categoriaId;

    console.log('categoria id ===>>>>',categoriaSelecionada);

    return (

    <div>
    
    <List title="" style="spaceCategory" background="bgRecomendations">
        {
            productos
            .filter((producto) => producto.categoria.id === categoriaSelecionada)
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


   