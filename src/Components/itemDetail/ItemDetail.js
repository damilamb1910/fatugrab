import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../itemCount/ItemCount';
import './ItemDetail.css'
import { useState,useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/CartContext';
import Form from 'react-bootstrap/Form';
import { motion } from "framer-motion"
import Loading from '../loading/Loading';
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ItemDetail=({producto})=>{
  const notify = () => toast.success('Producto añadido!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  
  
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
      if(producto.id=== 'shablones' && (hilos=== '' || hilos==='Elegi una opción' )){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Elija cantidad de hilos'
        })}else if(producto.id=== 'shablones' && (medida=== '' || medida==='Elegi una opción' )){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Elija medida'
          })}else if(producto.id=== 'remeras' && (talle=== '' || talle==='Elegi una opción')){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Elija talle'
            })}else if(producto.id=== 'remeras' && (color=== '' || color==='Elegi una opción')){
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Elija color'
              })}else if(producto.id=== 'bajadas' && (papel=== '' || papel==='Elegi una opción')){
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Elija tipo de papel'
                })
              }else{
      setIrCarrito(true)
      añadir(producto,cantidad,hilos,medida,talle,color,papel)
notify()
    
    }
      
    }


    const [hilos,setHilos]=useState('')
    const [medida,setMedida]=useState('')
    const [talle,setTalle]=useState('')
    const [color,setColor]=useState('')
    const [papel,setPapel]=useState('')



    

    
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
          <p className='description'>{producto.description}</p>

          {producto.id==="shablones" && <Form >
            <Form.Group onChange={(e)=>{setHilos(e.target.value)}}>
            <Form.Label>Cantidad de hilos</Form.Label>
           <Form.Select  aria-label="Default select example">
              <option >Elegi una opción</option>
              <option value="120">120</option>
              <option value="77">77</option>
              <option value="64">64</option>
              <option value="50">50 (ECO)</option>
              <option value="32">32</option>
              <option value="15">15</option>
              <option value="Consultar">Consultar</option>
             
           </Form.Select>
            </Form.Group>

<Form.Group onChange={(e)=>{setMedida(e.target.value)}}>
<Form.Label>Medidas</Form.Label>
           <Form.Select aria-label="Default select example">
              <option>Elegi una opción</option>
              <option value="30x40">30x40</option>
              <option value="40x50">40x50</option>
              <option value="45x55">45x55</option>
              <option value="50x60">50x60</option>
              <option value="Especial">OTRA (ESPECIAL)</option>
              
           </Form.Select>
</Form.Group>
           
           </Form>}

           {producto.id==='remeras' && <Form>
            <Form.Group onChange={(e)=>{setTalle(e.target.value)}}>
            <Form.Label>Talles</Form.Label>
           <Form.Select aria-label="Default select example">
              <option>Elegi una opción</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
             
             
           </Form.Select>

            </Form.Group>

            <Form.Group onChange={(e)=>{setColor(e.target.value)}}>
            <Form.Label>Colores</Form.Label>
           <Form.Select aria-label="Default select example">
              <option>Elegi una opción</option>
              <option className='color__blanco' value="Blanco">Blanco</option>
              <option className='color__negro' value="Negro">Negro</option>
              <option className='color__gris' value="Gris">Gris</option>
              
              
           </Form.Select>

            </Form.Group>

           
           </Form>}

           {producto.id==='bajadas' && <Form>
            <Form.Group onChange={(e)=>{setPapel(e.target.value)}}>
            <Form.Label>Papel</Form.Label>
           <Form.Select aria-label="Default select example">
              <option>Elegi una opción</option>
              <option value="Film">Film</option>
              <option value="Vegetal ">Vegetal</option>
              
             
             
           </Form.Select>

            </Form.Group>

          
           </Form>}
           <ToastContainer
           position="top-center"
           autoClose={5000}
           hideProgressBar={false}
           newestOnTop={false}
           closeOnClick
           rtl={false}
           pauseOnFocusLoss
           draggable
           pauseOnHover
           theme="light"
           />
           <ItemCount onAdd={onAdd}/> 
        </div>

        </div>

        


    </motion.div>
    </motion.div>


        
        </>
        
    )
}

export default ItemDetail