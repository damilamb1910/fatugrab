import React, { useState } from 'react'
import './carroussel.css';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const CarouselImg = styled.img`
  
  width: 100%;
  height: auto;
  opacity: 0;
  transition: 1s;
  &.loaded {
    opacity: 1;
  }
`;
const CarouselButtonContainer = styled.div`
  display: flex;
  align-content: center;
  flex-direction: row;
  margin-top: 15px;
  justify-content: center;
  
`;

const CarouselButton = styled.button`
  color: white;
  background-color: #EC1C24;
  padding: 8px;
  margin: 0 5px;
`;

const CarrouselButtonAction=styled.button`
color:#EC1C24 ;


`;

const Carrousel = () => {
  

const titulos=['SHABLONES','INSUMOS','REMERAS','BAJADAS']
const subtitulos=['La mejor calidad de shablones. Somos fabricantes.','La más amplia variedad de insumos.','Somos fabricantes de remeras lisa para asegurar la mayor calidad de tus trabajos.','Bajadas de positivos en gran formato']
const [selectedSubtitulo,setSelectedSubtitulo]=useState(subtitulos[0])
const [selectedTitulo,setSelectedTitulo]=useState(titulos[0])
  const[selectedIndex,setSelectedIndex]=useState(0)
  const images=['shablones.png','insumos.png','remeras.png','bajadas.png']
  const links=['/detail/shablones','/nosotros',"/detail/remeras","/detail/bajadas"]
  const[selectedLink,setSelectedLink]=useState(links[0])
  const [selectedImage,setSelectedImage]=useState(images[0])
  const [loaded,setLoaded]=useState(false)

const selectNewImage = ( index: number, images: string[], next=true)=>{
  setLoaded(false)
  setTimeout(()=>{
    const condition=next ? selectedIndex < images.length -1 : selectedIndex > 0
    const nextIndex=  next ? (condition ? selectedIndex+1:0) : condition ? selectedIndex -1 : images.length -1
    setSelectedImage(images[nextIndex])
    setSelectedIndex(nextIndex)
    setSelectedTitulo(titulos[nextIndex])
    setSelectedSubtitulo(subtitulos[nextIndex])
    setSelectedLink(links[nextIndex])
  },500)

}

  const previus=()=>{
selectNewImage(selectedIndex,images,false)

  }

  const next=()=>{
    selectNewImage(selectedIndex,images)
  }
  return (
    <>
    <div className='carrouesel__container'>
      <div>
      <CarouselImg className={loaded ? "loaded": ""} src={require(`../../assets/images/${selectedImage}`)} alt="cosa" onLoad={()=>setLoaded(true)} />
      
      
      </div>
      
      <div className='carrousel__info__container'>
      
      <h2>{`${selectedTitulo}`}</h2>
      <p>{`${selectedSubtitulo}`}</p>
      <Link to={selectedLink}>VER MAS</Link>
      </div>
      
     
    </div>
    
    <CarouselButtonContainer >
    <CarouselButton onClick={previus}>{"<"}</CarouselButton>
    <CarouselButton onClick={next}>{">"}</CarouselButton>
</CarouselButtonContainer>
    </>
    
  )
}

export default Carrousel
