import React from 'react'
import ItemList from '../itemList/ItemList'
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { db } from "../../firebase/firebase"
import { getDocs,collection,query,where } from "firebase/firestore"
import Spinner from 'react-bootstrap/Spinner';

const ItemListContainer = () => {

  const [listProductos,setListProductos]=useState([])
  const [loading,setLoading]=useState(true)
  const {categoriaId}=useParams()

  useEffect(()=>{

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
        
        
        {
            loading ? <div className="centrado"> <Spinner animation="border" variant="primary" /></div>
           
        :
        <ItemList listProductos={listProductos}/>
        }
        
        </>
            
        )
    }
    
    export default ItemListContainer