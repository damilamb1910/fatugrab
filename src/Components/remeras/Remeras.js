import React from 'react'
import Form from 'react-bootstrap/Form';
import './remeras.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../itemCount/ItemCount';
import { useEffect,useState } from 'react';
import Loading from '../loading/Loading';
import { motion } from "framer-motion"

const Remeras = () => {
  const [loading,setLoading]=useState(false)
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
  useEffect(()=>{
      setLoading(true)
        setTimeout(()=>{
          setLoading(false)
        },3000)
    },[]
  )
  return (
    <>
{loading ? <Loading /> :

    <motion.div variants={container}
    initial="hidden"
    animate="show" className='product__detail__container'>
    <motion.div  variants={item} className='product__detail'>
      <div className='product'>
        <img className='product__img' src={require('../../assets/images/remeras.png')} alt="" />
        <div className='product__info'>
          <h2>Remeras</h2>
          <h4>Desde $2250</h4>
          <p>Remeras de algodón peinados lisas. Las imágenes son ilustrativas.
        Talles disponibles: M, L, XL y XXL. Colores disponibles: blanco, negro y gris.</p>
        <Form>
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
           </Form>
           <ItemCount /*stock={producto.stock} onAdd={onAdd}/*//> 
        </div>

        </div>

        


    </motion.div>
    </motion.div>
}
    </>
    
  )
}

export default Remeras
