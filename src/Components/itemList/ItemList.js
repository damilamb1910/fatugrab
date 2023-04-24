import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from "react-router-dom";
import Item from "../item/Item"
import "./itemList.css"

const ItemList=({listProductos,categoria})=>{
    
  return(
      <>
      <div className="list__container">
      <h2 className='titulo__lista'>{categoria}</h2>
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
