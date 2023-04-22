import Carrousel from "../carrousel/Carrousel"
import { useEffect,useState } from 'react';
import Loading from "../loading/Loading";
import './home.css'

const Home=()=>{

    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        window.scrollTo(0, 0)
        setLoading(true)
          setTimeout(()=>{
            setLoading(false)
          },3000)
      },[]
)
    return(
        <>
        
        {loading ? <Loading /> :
        <div className="home">
<Carrousel/>
        </div>
        }
        </>
        
    )
}

export default Home