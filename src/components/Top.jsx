import React from 'react'
import styled from 'styled-components'
import jaguar from '../sprites/jaguar-score.png'
import ship from '../sprites/ship2.png'

const smallVersion = window.innerWidth <= 550

const Div = styled.div`
max-width: 800px;
text-align:center;
margin:auto;
color:white;
font-family:nunito
`
const You = styled.div`
display:flex;
font-size: 30px;
font-weight: 800;
text-align:center;
`
const Thanks = styled.h1`
font-size: ${smallVersion ? 29 : 50}px;
font-weight: 900;
text-align:center;
margin:0px
`
const YouScore = styled.h1`
font-size: 30px;
font-weight: 900;
text-align:center;
color:#d49a18;
line-height: 50px;
`
const Td = styled.td`
text-align:center;
font-size:24px;
max-width: 200px;
`
const Th = styled(Td)

const Img = styled.img`
width: 60px;
box-shadow:0px 0px 30px #0798ff;
border-radius: 10%;
`
const Mid = styled.div`
width: ${/* window.innerWidth < 600 ? 100 : 50 */50}%;
display: block;
text-align:center;
position:relative
`
setTimeout(function () {
  window.scrollTo(0, 0)
}, 250)
const Top = props => {
  const user = { name: props.user.name, score: props.user.score, start_time: props.user.start_time, photo: props.user.photo }
  const top = [...props.top.filter(el => el.name != user.name), user]
  return (
    <Div>
      <You>
        <Mid>
          <img style={{ width: `${smallVersion ? '100%' : 'auto'}`, right: '0px', top: '20%', position: 'absolute' }} src={jaguar}/>
        </Mid>
        <Mid>
          <Thanks>
            <br/>
            ¡Gracias por jugar!
            <YouScore>

              <p style={{ fontSize: '60px', margin: '0px', fontSize: `${smallVersion ? 45 : 60}px` }}>
                <p style={{ fontSize: '30px', margin: '0px' }}>Tus Puntos</p>
                <img style={{ width: '100px', transform: 'rotate(270deg)', verticalAlign: 'middle' }} src={ship}/>
                {user.score}</p>

            </YouScore>
          </Thanks>
        </Mid>
      </You>
      <Thanks>¡Las puntuaciones más altas!</Thanks>
      <table style={{ borderCollapse: 'separate', borderSpacing: '20px 20px', margin: 'auto' }}>
        <tbody>
          <tr>
            <th>posición </th>
            {!smallVersion && <th> </th>}
            <th style={{ color: 'gold' }}>Jugador </th>
            <th style={{ color: 'gold' }}>Puntuación </th>
          </tr>
          {top
            .sort((a, b) => Number(a.score) < Number(b.score) ? 1 : -1)
            .filter(el => el.score > 0 && el.start_time >= 0)
            .map((usr, index) =>
              <tr>
                <Td style={{ color: index == 0 && 'gold' || index == 1 && 'silver' || index == 2 && 'orange' }} > {index + 1 }</Td>
                {!smallVersion && <Td colspan="2"> <Img src={usr.photo}/></Td>}
                <Td style={{ color: '#394ba2', backgroundColor: 'white' }} colspan="2">{usr.name}</Td>
                <Td style={{ color: '#394ba2', backgroundColor: 'white' }} >{usr.score}</Td>
              </tr>
            )}
        </tbody>
      </table>
    </Div>
  )
}

export default Top
