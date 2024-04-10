import React from 'react'
import ItemList from '../itemList/ItemList'
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { db } from "../../firebase/firebase"
import { getDocs,collection,query,where } from "firebase/firestore"
import Spinner from 'react-bootstrap/Spinner';
import './itemListContainer.css'

const ItemListContainer = () => {

  const [listProductos,setListProductos]=useState([])
  const [loading,setLoading]=useState(true)
  const {categoriaId}=useParams()

  useEffect(()=>{
    window.scrollTo(0, 0)
    setLoading(true)
        const prodCollection=collection(db,'products')
    
         if(categoriaId){
           
            const q=query(prodCollection,where('categoria','==',categoriaId))
            getDocs(q)
        .then(data => setListProductos(data.docs.map(product=>
             ({...product.data(),id:product.id})))).finally(()=>{setLoading(false)})
        }else{
        
        getDocs(prodCollection)
        .then(data => setListProductos(data.docs.map(product=>
             ({...product.data(),id:product.id})))).finally(()=>{setLoading(false)})
        }
        },[categoriaId])
        
        
        
       
     
    
    
    
    
    
    
        return(
        <>
        
        <div className='itemList__container'>
        {
            loading ? <div className="centrado"> <Spinner animation="border" variant="primary" /></div>
           
        :
        <ItemList listProductos={listProductos} categoria={categoriaId}/>
        }
        </div>
        
        
        </>
            
        )
    }
    
    export default ItemListContainer