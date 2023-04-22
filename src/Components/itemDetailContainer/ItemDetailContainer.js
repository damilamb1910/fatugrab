import { useEffect,useState } from "react"
import ItemDetail from "../itemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase"
import { getDoc,collection,doc } from "firebase/firestore"

import Loading from "../loading/Loading";


const ItemDetailContainer=()=>{
    const [loading,setLoading]=useState(false)
    const [producto,setProducto]=useState({})
    
const {id}=useParams()

    
    useEffect(()=>{
        window.scrollTo(0, 0)
        setLoading(true)
        const productCollection=collection(db,'products')
        const refDoc = doc(productCollection,id)
        getDoc(refDoc)
        .then((res)=>{
            setProducto(
                {
                    id:res.id, ...res.data()
                }
            )
        }).finally(  setTimeout(()=>{
            setLoading(false)
          },3000))
       },[id])
    return(
        <>
    {
       loading ? <Loading/>: <ItemDetail producto={producto} />
    }
        
       
    
   
        </>
    )
}

export default ItemDetailContainer