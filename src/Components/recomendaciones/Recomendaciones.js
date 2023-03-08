import React from 'react'
import Card from 'react-bootstrap/Card';
import './recomendaciones.css'

const Recomendaciones=()=> {
  return (
    <div className='section__recomendaciones'>
        <h2>RECOMENDACIONES</h2>
<div className='card__container'>
<Card className='card' style={{ width: '18rem' }}>
      <Card.Img className='card__img' variant="top" src={require(`../../assets/avatar/photography.png`)} />
      <Card.Body>
        <Card.Title>Mariana Baez</Card.Title>
        <Card.Text>
        "Acabo de hacer mi primera compra en esta tienda y estoy increíblemente satisfecha con la calidad del producto y el servicio al cliente. El proceso de compra fue fácil y rápido, y el producto llegó en perfectas condiciones y en tiempo record. Además, el personal de atención al cliente fue muy amable y servicial en todo momento. Sin duda volveré a comprar en esta tienda y la recomendaré a todos mis amigos y familiares."
        </Card.Text>
      </Card.Body>
    </Card>

       <Card style={{ width: '18rem' }}>
      <Card.Img className='card__img' variant="top" src={require(`../../assets/avatar/photography.png`)} />
      <Card.Body>
        <Card.Title>Carlos Sosa</Card.Title>
        <Card.Text>
        Estoy increíblemente satisfecho con los servicios que he recibido de esta empresa. Desde el primer momento, el personal ha sido amable y servicial, y siempre ha estado dispuesto a ayudarme con cualquier pregunta o inquietud que haya tenido. Los productos que he adquirido son de alta calidad y han cumplido con todas mis expectativas. Recomiendo encarecidamente esta empresa a cualquiera que busque un servicio excepcional y productos de calidad.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    </div>
    
  )
}

export default Recomendaciones
