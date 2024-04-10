import React from 'react'
import Recomendaciones from '../recomendaciones/Recomendaciones'
import './nosotros.css'
import logo from "../../assets/logo.png"
import { motion } from "framer-motion"

const Nosotros = () => {
  const pathVariants={
    hidden:{
      opacity:0,
      pathLength:0,
      x:-100
    },
    visible:{
      x:0,
      opacity:1,
      pathLength:1,
      transition:{
        duration:3,
        ease:"easeInOut"
      }
    }
  }
  const svgVariants={
    hidden:{scale:0},
    visible:{
      scale:1,
      transition:{duration:1}
    }
  }
  
    
  return (
    <>
    <div className='nosotros__container' >
<div className='landing__nosotros'>
<img src={logo} alt="" />


</div>




  <motion.div className='nostros__text__container'>

<motion.div initial={{ opacity: 0, y:200 }}
  whileInView={{ opacity: 1, y:0 }}
  transition={{ duration: 2, times: [0, 1] }}
  >
      <div className='acerca__card'>
      <img src={require('../../assets/images/about1.webp')} alt="" />
      <p>Con 18 años de experiencia en el mercado, nos enorgullece ser uno de los principales distribuidores de insumos para serigrafía en Merlo, Buenos Aires y enviamos a todo el interior del país.</p>
      </div>
      </motion.div>



      <motion.div initial={{ opacity: 0, y:200 }}
  whileInView={{ opacity: 1, y:0 }}
  transition={{ duration: 2, times: [0, 1] }}
  >
      <div className='acerca__card'>
      <p>En Fatugrab, nos apasiona ofrecer una amplia gama de productos de alta calidad que incluyen tintas, marcos, mallas, maniguetas y todo lo que necesita para garantizar una producción de impresión en serigrafía de alta calidad. Trabajamos con los principales fabricantes para ofrecer productos duraderos y eficientes para sus proyectos de impresión.
Pero nuestra dedicación no termina allí. En Fatugrab, nos enorgullece brindar un excelente servicio al cliente. Sabemos que la impresión en serigrafía puede ser un proceso complejo y que a veces puede surgir algún problema, por eso, estamos disponibles para ofrecer asesoramiento y soporte técnico para ayudarle en cualquier momento.</p>
      <img src={require('../../assets/images/about2.jpg')} alt="" />
      
      </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y:200 }}
  whileInView={{ opacity: 1, y:0 }}
  transition={{ duration: 2, times: [0, 1] }}
  >
      <div className='acerca__card'>
      <img src={require('../../assets/images/about3.jpg')} alt="" />
      <p>También entendemos la importancia de un envío rápido y seguro, por eso, ofrecemos envíos a todo el interior del país con rapidez y seguridad, asegurándonos de que reciba sus insumos serigráficos en el menor tiempo posible.
        
        En Fatugrab, estamos comprometidos con la satisfacción del cliente y queremos ser su socio confiable en todo lo relacionado con la impresión en serigrafía. Ya sea que esté iniciando un nuevo negocio o que ya tenga experiencia en el campo, en Fatugrab estamos listos para ayudarle a lograr el éxito que desea en su empresa.
        
        Así que no busque más allá de Fatugrab para obtener sus insumos serigráficos. ¡Contáctanos hoy y descubre cómo podemos ayudarte a llevar tu negocio al siguiente nivel!</p>
     
      
      </div>
      </motion.div>
  

        </motion.div>
       


       
      <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.277773616747!2d-58.759778223467244!3d-34.672938261158535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc95cae66fe24f%3A0x80ab6624bf8d785f!2sFatugrab!5e0!3m2!1ses-419!2sar!4v1712717210771!5m2!1ses-419!2sar"} width="1000" height="400"></iframe>
      <Recomendaciones/>

    </div>
    </>
    
  )
}

export default Nosotros
