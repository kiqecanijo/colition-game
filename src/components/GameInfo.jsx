import React, { PropTypes } from 'react'
import careful from '../sprites/cuidado.png'
import GameButton from './GameButton'

const infoStyle = {
  color: 'white',
  fontSize: '20px',
  fontFamily: 'sans-serif'
}

const GameInfo = ({
  timeElapsed,
  playerScore,
  highScore,
  lifes
}) => {
  return (
    <div style={infoStyle}>
      <img style={{ maxWidth: '300px', width: '100%' }} src={careful} />
      <GameButton color={'yellow'} ><p style={{ color: '#384b9f', fontSize: '30px', margin: '0px' }} >{`Puntos ${Math.round(playerScore)}`}</p></GameButton>
      <GameButton color={'yellow'} ><p style={{ color: '#384b9f', fontSize: '30px', margin: '0px' }} >{`Vidas ${Math.round(lifes)}`}</p></GameButton><br/>
    </div>
  )
}

GameInfo.propTypes = {
  timeElapsed: PropTypes.number.isRequired,
  playerScore: PropTypes.number.isRequired,
  highScore: PropTypes.number.isRequired
  // globalHighScore: PropTypes.number
}

export default GameInfo
