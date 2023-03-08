import React from 'react'
import './floatButton.css'

const FloatButton = () => {
    const handleClickFloat=(e)=>{
        if(e.target.attributes.id.value==='floatButton'){
            window.open('https://wa.me/1167526139?text=¡Hola!%Querio%averiguar%por%un%presupuesto', '_blank')
          }
    }
  return (
    <div>
       <img onClick={handleClickFloat} id='floatButton' className='floatButton__img' src={require('../assets/whatsapp.png')} alt="" />
    </div>
  )
}

export default FloatButton
