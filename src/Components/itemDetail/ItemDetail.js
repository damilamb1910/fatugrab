import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../itemCount/ItemCount';
import './ItemDetail.css'
import { useState,useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/CartContext';
import Form from 'react-bootstrap/Form';
import { motion } from "framer-motion"
import Loading from '../loading/Loading';


const ItemDetail=({producto})=>{
  
  
  
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delayChildren: 0.5
          }
        }
      }
      
      const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }

  const {añadir}=useContext(Context);
  

  const [irCarrito,setIrCarrito]=useState(false)
    const onAdd=(cantidad)=>{
      setIrCarrito(true)
      añadir(producto,cantidad)
    }
    return(
        
        
        <>

         
        


<motion.div variants={container}
    initial="hidden"
    animate="show" className='product__detail__container'>
    <motion.div  variants={item} className='product__detail'>
      <div className='product'>
        <img className='product__img' src={producto.img} alt="" />
        <div className='product__info'>
          <h2>{producto.nombre}</h2>
          <h4>{producto.precio}</h4>
          <p>{producto.description}</p>

          {producto.id==="shablones" && <Form>
<Form.Label>Cantidad de hilos</Form.Label>
           <Form.Select aria-label="Default select example">
              <option>Elegi una opción</option>
              <option value="1">120</option>
              <option value="2">77</option>
              <option value="3">64</option>
              <option value="4">50 (ECO)</option>
              <option value="5">32</option>
              <option value="5">15</option>
             
           </Form.Select>

           <Form.Label>Medidas</Form.Label>
           <Form.Select aria-label="Default select example">
              <option>Elegi una opción</option>
              <option value="1">30x40</option>
              <option value="2">40x50</option>
              <option value="3">45x55</option>
              <option value="4">50x60</option>
              <option value="5">OTRA (ESPECIAL)</option>
              
           </Form.Select>
           </Form>}

           {producto.id==='remeras' && <Form>
<Form.Label>Talles</Form.Label>
           <Form.Select aria-label="Default select example">
              <option>Elegi una opción</option>
              <option value="1">M</option>
              <option value="2">L</option>
              <option value="3">XL</option>
              <option value="4">XXL</option>
             
             
           </Form.Select>

           <Form.Label>Colores</Form.Label>
           <Form.Select aria-label="Default select example">
              <option>Elegi una opción</option>
              <option className='color__blanco' value="1">Blanco</option>
              <option className='color__negro' value="2">Negro</option>
              <option className='color__gris' value="3">Gris</option>
              
              
           </Form.Select>
           </Form>}

           {producto.id==='bajadas' && <Form>
<Form.Label>Papel</Form.Label>
           <Form.Select aria-label="Default select example">
              <option>Elegi una opción</option>
              <option value="1">Film</option>
              <option value="2">Vegetal</option>
              
             
             
           </Form.Select>

          
           </Form>}
        
           <ItemCount onAdd={onAdd}/> 
        </div>

        </div>

        


    </motion.div>
    </motion.div>


        
        </>
        
    )
}

export default ItemDetail