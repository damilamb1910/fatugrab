import { useState } from "react"
import "./itemCount.css"


const ItemCount=({onAdd})=>{



    const agregarCarrito=()=>{
        
        if( contador >=1){
            
        
            onAdd(contador)
            setContador(1)
        }
            
     
        
    }




    
    const[contador,setContador]=useState(1)
    const sumar=()=>{
        
    setContador(contador + 1)
        
}


    
    const restar=()=>{
        if(contador>1){
            setContador(contador - 1)
        }
        
    }
    return(
        <>
        <div className="contenedorItemCount">

<div className="contenedorSumarRestar">
<button className="btn" onClick={restar}>-</button>
<h5>{contador}</h5>
<button className="btn" onClick={sumar}>+</button>

</div>
<button className="btnAdd" onClick={agregarCarrito}>Agregar al carrito</button>

        </div>

        </>
        
    )
}

export default ItemCount