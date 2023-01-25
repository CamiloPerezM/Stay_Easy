import React from 'react'
import data from "./api/data.json"
import { Card } from './components/Card'
import { CardCategory } from './components/CardCategory'
import { List } from './components/List'
import dataCategory from "./api/dataCategory.json"
import Header from './components/Header'
import Footer from './components/Footer'


function App() {


  return (



    



























    // ""

    <>
      <Header></Header>
      
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
          data.map((data, i) => {
            return (
              <Card datos={data} id={i} key={i} />
            )
          })
        }
      </List>
      <Footer></Footer>
    </>
  )
}


export default App;