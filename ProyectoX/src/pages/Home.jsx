import React from 'react'
// import data from "../api/data.json"
// import dataCategory from "../api/dataCategory.json"
import {List} from "../components/List"
import {CardCategory} from "../components/CardCategory"
import {Card} from "../components/Card"
import { useContext } from 'react'
import { ContextGlobal } from '../components/utils/global.context'
import Buscador from '../components/Buscador'




const Home = () => {

    const {categorias,productos} = useContext(ContextGlobal);

    

        categorias.sort(()=>{
            return 0.5 - Math.random();
        })
    
    
        productos.sort(()=>{
            return 0.5 - Math.random();
        })

    
    

    return (
        <>
            <header>
            <div className="busqueda">
        <h2 className="bienvenida">Busca oferta en hoteles, casas y mucho mas</h2>
        <div className="botones2">
            <Buscador />
        </div>
        </div>
            </header>
            <List title="Buscar por tipo de alojamiento" style="spaceCategory">
                {
                     categorias.map((data,i) => {
                        return (
                            
                            i<=3 ? <CardCategory datos={data} id={data.id} key={data.id} /> : null
                        )
                    })
                }
            </List>

            <List title="Recomendados" style="spaceCategory" background="bgRecomendations">
                {
                    productos.map((data) => {
                        return (
                            <Card datos={data} id={data.id} key={data.id} />
                        )
                    })
                }
            </List>
            
        </>
    )
}


export default Home;