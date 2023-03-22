import { Context } from '../../context/CartContext';
import { useContext,useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ReactWhatsapp from 'react-whatsapp';
import './cart.css'
import CartItem from '../cartItem/CartItem';



  const preguntarId = (item2) => {
    if (item2.item.id === 'shablones') {
      return(`*Cantidad de hilos* = ${item2.hilos} *Medida* = ${item2.medida}  `);
    }else if(item2.item.id === 'remeras'){
        return(` *Talle* = ${item2.talle}  *Color* = ${item2.color}`);
    }else if(item2.item.id === 'bajadas'){
        return(` *Tipo de papel* = ${item2.papel}`);
    }
    
  }





export const Cart=()=>{

const {cart,removeItem,precioTotal,clear}=useContext(Context)


  
  
    


    return(
        <>
        <div className='container centrado'>
            
        {cart.length!==0 ?  cart.map((item)=>
       
        
       <CartItem item={item} removeItem={removeItem} key={item.item.id}/>
    
       ): <div className='texto'>
           <h6>Aún no tenés productos en el carrito 😐😐</h6>
           
       <Link to={"/"}>
           <Button>
           Agregar productos
           </Button>
       </Link>
       
       </div>}
      {console.log(cart)}
       {cart.length!==0 &&  <div><p> total ${precioTotal()}</p> <Button onClick={()=>clear()}>Limpiar carro</Button><Button><ReactWhatsapp number="1136684089" message={  cart.map((item2)=>
        
        `
    _${(item2.item.nombre).toUpperCase()}_ 

    ${preguntarId(item2)}
    *Cantidad* = ${item2.quantity} 
    -------------------------------
    `)}>Finalizar compra</ReactWhatsapp>  </Button>
    </div>}
        </div>
        
        
        </>
        
    )
}

export default Cart
