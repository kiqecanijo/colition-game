import React,{Component} from 'react'
import styled from 'styled-components'
import careful from '../sprites/cuidado.png'
import padre from '../sprites/padre.png'
const Places = styled.div`
display:inline-block;
position: relative;
text-align:center;
width:30%;
vertical-align:top;
font-size:20px;
font-weight: 600;
font-size:18px
`
const Div = styled.div`
padding: 0px;
text-align:center;
max-width: 800px;
margin:auto;
color:white;
font-family: Nunito;
font-weight:600;
font-size:23px;
line-height: 25px;
`

const Intro = props => {
  return(
    <Div>
      <img style={{maxWidth:'300px',width:'100%'}} src={careful} />

      <p>
        ¡Descubre a Jaguarete con el menor número de <br/>
      movimientos posibles!<br/><br/>
    <b>¿Estás listo para el reto?</b>
  </p>
  <Places>
    <p className={'gold'}>Primer lugar:</p>
  </Places>
  <Places>
    <p className={'gold'}>Segundo lugar:</p>
  </Places><Places>
  <p className={'gold'}>Tercer lugar:</p>
</Places>
<Places>
  <p>Certificado de regalo con
    $500 en una prestigiada
    tienda departamental y
    NutriBaby 3 Stick Pack</p>
</Places>
<Places>

  <p>Certificado de regalo
    con $300 en una
    prestigiada tienda
    departamental y
    NutriBaby 3 Stick Pack</p>
</Places>
<Places>

  <p>Kit deportivo y
    NutriBaby 3
    Stick Pack</p>
</Places>
{props.children}
<br/>
<img  style={{maxWidth:'550px',width:'100%'}} src={padre} />

</Div>
)

}

export default Intro
