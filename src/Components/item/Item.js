import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './item.css'



const Item=({producto})=>{

  
    return(
        <div>
            <Card className='card__list' style={{ width: '18rem' }}>
           
      <Card.Img className='card__image' variant="top"  src={producto.img } />
      
      <Card.Body>
        
        
        <Card.Title className='nombre__card' >
          
        {producto.nombre}
        </Card.Title>
        <Button variant="primary">Ver detalle</Button>
      </Card.Body>
    </Card>
 
    
        </div>

       
       
    )
}

export default Item
