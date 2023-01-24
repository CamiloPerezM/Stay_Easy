import React from 'react'
import data from "./api/data.json"
import { Card } from './components/Card'
import { CardCategory } from './components/CardCategory'
import { List } from './components/List'
import dataCategory from "./api/dataCategory.json"

function App() {


  return (
    <>
    <List title="Categorias" style="spaceCategory">

      {
        dataCategory.map((data, i) => {
          return (
            <CardCategory datos={data} id={i} key={i} />
            )

        })
      }
    </List>

    <List title="Recomendados" style="spaceCategory" background="bgRecomendations">
      {
        data.map((data,i)=>{
          return(
            <Card datos={data} id={i} key={i}/>
          )

        })
      }
    </List>



    </>

    // {/* <Card datos ={data[0]}/>   
    // <Card datos ={data[1]}/>
    // <Card datos ={data[2]}/>
    // <Card datos ={data[3]}/>
    // <Card datos ={data[4]}/>
    // <Card datos ={data[5]}/>
    // <Card datos ={data[6]}/>
    // <Card datos ={data[7]}/> */}


  )
}

export default App
