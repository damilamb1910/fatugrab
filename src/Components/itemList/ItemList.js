import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from "react-router-dom";
import Item from "../item/Item"

const ItemList=({listProductos})=>{
    
  return(
      <>
      <div className="container">
      <CardGroup>

{listProductos.map((prod, i)=> 

<Link key={`${prod.nombre}-${i}`} to={`/detail/${prod.id}`}>
<Item key={`${prod.nombre}-${i}`} producto={prod} /></Link>)}

    
    </CardGroup>
      </div>
    
      
      
      
      </>
      
  )
  
}

export default ItemList
