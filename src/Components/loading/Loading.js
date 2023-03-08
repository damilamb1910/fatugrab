import React from 'react'
import GridLoader from "react-spinners/GridLoader";
import './loading.css'
import { motion } from "framer-motion"

const Loading = (loading) => {
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
  return (
    <>
   
    <motion.div variants={container}
    initial="hidden"
    animate="show" className='loading__container'>
      <motion.div variants={item}>
      <GridLoader
        color={"#EC1C24"} loading={loading} size={50}
        
/>
      </motion.div>
      
    </motion.div>
    </>
    
    
    
  )
}

export default Loading
