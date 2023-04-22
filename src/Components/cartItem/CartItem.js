import { Button } from 'react-bootstrap';
import './cartItem.css'


const preguntarId = (item) => {
    if (item.item.id === 'shablones') {
      return(<><h6>{`Cantidad de hilos:${item.hilos} `} </h6>
      <h6> { `Medida: ${item.medida}`}</h6></> );
    }else if(item.item.id === 'remeras'){
        return(<><h6>{`Talle:${item.talle}`}</h6>
        <h6>{ ` Color: ${item.color} `}</h6></>)
    }else if(item.item.id === 'bajadas'){
        return(<h6>{`Tipo de papel:${item.papel}`}</h6>);
    }
    
  }

const CartItem=({item,removeItem})=>{
    return(
        <div className='item__carro'>
            
            
        <h4  >{(item.item.nombre).toUpperCase()}</h4>
        {preguntarId(item)}
        {/* <h5>$ por unidad:{item.item.precio}</h5> */}
        
        <h6>Cantidad:{item.quantity}</h6>
        { isNaN(item.quantity * item.item.precio) ? '': <p>Subtotal:{item.quantity * item.item.precio}</p> }
        {console.log(item.quantity * item.item.precio)}
        <Button onClick={()=>removeItem(item)} > Quitar</Button>
        </div>
    )
}

export default CartItem