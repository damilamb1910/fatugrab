import React, {createContext} from 'react'

import { useState } from 'react'


export const Context= createContext([])

const CartContext=({children}) => {
    const [cart,setCart]=useState([])
    
    const precioTotal=()=>{
        return cart.reduce((prev,act) => prev + act.quantity * act.item.precio,0)
    }

    const productosTotal=()=>cart.reduce((acumulador,productoActual)=>acumulador + productoActual.quantity,0)

     const añadir2=(quantity)=>{
        setCart([...cart,{quantity}])
        
     }

    const añadir=(item,quantity,hilos,medida,talle,color,papel)=>{
        
        const preguntar = cart.findIndex(pro=>pro.item.id  ===item.id && pro.hilos === hilos && pro.medida === medida && pro.talle === talle && pro.color === color && pro.papel === papel)
        if (preguntar!== -1){
           const newCart = cart.filter(item => item  !== cart[preguntar])
           
          setCart([{item, quantity, hilos,medida,talle,color,papel }, ...newCart])
        }else{
            
            setCart([...cart,{ item, quantity,hilos,medida,talle,color,papel }]);
        } 
  
        
        
    }

    const removeItem =(item)=>{
        const newCart=cart.filter(itemQuitar=>itemQuitar !== item)
        setCart([...newCart])
       }
    
    const pregunta =(id)=> cart.find(product => product.id === id) ? true : false

    const clear=()=>{
        setCart([])
        
    }
    return(
        <>
        <Context.Provider value={{cart,añadir2,añadir,pregunta,removeItem,clear,precioTotal,productosTotal}}>
        {children}
        </Context.Provider>
        
       
        </>
        
    )
}

export default CartContext