import React from 'react'
import Form from 'react-bootstrap/Form';
import './shablones.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../itemCount/ItemCount';
import { useEffect,useState,useContext } from 'react';
import Loading from '../loading/Loading';
import { motion } from "framer-motion"
import { Context } from '../../context/CartContext';
import Swal from 'sweetalert2'

const Shablones = () => {
  const {añadir2}=useContext(Context);
  
    const onAdd=(cantidad)=>{
      
      añadir2(cantidad)
    }

const [hilos,setHilos]=useState('')
const [medidas,setMedidas]=useState('') 
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
        <img className='product__img' src={require('../../assets/images/shablones2.png')} alt="" />
        <div className='product__info'>
          <h2>SHABLONES</h2>
          <h4>Desde $2250</h4>
          <p>Shablones de hierro tensados con seda importada SRI de excelente calidad y alta tensión. Las imágenes son ilustrativas, los cuadros son con triple tuerca y sin tope.
        Sedas disponibles: 16, 32, 47, 64, 50, 77, 90 y 120 hilos.</p>
        <Form>
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
           </Form>
           <ItemCount onAdd={onAdd}/> 
        </div>

        </div>

        


    </motion.div>
    </motion.div>
}
    </>
    
  )
}

export default Shablones
