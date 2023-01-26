import React from 'react'
import data from "../api/data.json"
// import dataCategory from "../api/dataCategory.json"
import {List} from "../components/List"
import {CardCategory} from "../components/CardCategory"
import {Card} from "../components/Card"
import { useContext } from 'react'
import { ContextGlobal } from '../components/utils/global.context'




const Home = () => {

    const {categorias} = useContext(ContextGlobal);

    return (
        <>
            <List title="Categorias" style="spaceCategory">
                {
                    categorias.map((data, i) => {
                        return (
                            <CardCategory datos={data} id={i} key={i} />
                        )
                    })
                }
            </List>

            <List title="Recomendados" style="spaceCategory" background="bgRecomendations">
                {
                    data.map((data, i) => {
                        return (
                            <Card datos={data} id={i} key={i} />
                        )
                    })
                }
            </List>
            
        </>
    )
}


export default Home;