import React, { useContext } from "react";
import { ContextGlobal } from "./Services/global.context";
import { List } from "./List";
import { Card } from "./Card";
import { useLocation } from "react-router";
import Buscador from "./Buscador";





const FiltroCategoria = () => {

    const {productos} = useContext(ContextGlobal);
    const location = useLocation();
    const categoriaSelecionada = location.state?.categoriaId;

    console.log('categoria id ===>>>>',categoriaSelecionada);

    const findCategory = productos.length>0?productos.find(data => data.categoria.id===categoriaSelecionada):null  
    


    return (

    <div>

        <div className="busqueda">
        <h2 className="bienvenida">Busca oferta en hoteles, casas y mucho mas</h2>
        <div className="botones2">
            <Buscador />
        </div>
        </div>
    
    <List title={`${findCategory.categoria.titulo} Disponibles:`} style= "spaceCategoryProduct"  background="bgRecomendations">
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


   