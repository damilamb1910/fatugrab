import { Button } from 'react-bootstrap';
import './cartItem.css'


const CartItem=({item,removeItem})=>{
    return(
        <div>
        <h6>Cantidad:{item.quantity}</h6>
      
        <Button onClick={()=>removeItem(item)} > Quitar</Button>
        </div>
    )
}

export default CartItem