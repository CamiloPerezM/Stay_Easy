import React from 'react'
import data from "./api/data.json"
import { Card } from './components/Card'
import { List } from './components/List'

function App() {


  return (
    
      <List title="Recomendados">
        {
          data.map((data,i)=>{
            return(
              <Card datos={data} id={i} key={i}/>
            )

          })
        }
      </List>
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
