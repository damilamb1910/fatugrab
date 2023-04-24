import { Context } from '../../context/CartContext';
import { useContext } from 'react';
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

const {cart,removeItem,clear}=useContext(Context)


  
  
    


    return(
        <>
        <div className='container centrado'>
            
        {cart.length!==0 ?  cart.map((item)=>
       
        
       <CartItem item={item} removeItem={removeItem} key={item.item.id}/>
    
       ): <div className='texto'>
           <h6>Aún no tenés productos en el carrito 😐😐</h6>
           
       <Link to={"/fatugrab"}>
           <Button>
           Agregar productos
           </Button>
       </Link>
       
       </div>}
      
       {cart.length!==0 &&  <div> <Button onClick={()=>clear()}>Limpiar carro</Button><Button><ReactWhatsapp number="541136684089" message={  cart.map((item2)=>
        
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
