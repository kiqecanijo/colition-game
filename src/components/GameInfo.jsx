import React, { PropTypes } from 'react'
import careful from '../sprites/cuidado.png'
import GameButton from './GameButton'
import { Container, Row, Col } from 'react-bootstrap'
import flower from '../sprites/flower.png'

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
      <Row>
        <Col xs={12} sm={6}>
          <img style={{ maxWidth: '300px', width: '100%' }} src={careful} />

        </Col>
        <Col xs={12} sm={6}>
          <p style={{ fontSize: '25px' }}>Vidas: {[...Array(lifes)].map(() => <img style={{ verticalAlign: 'middle' }} src={flower}/>)}</p>
          <br/>
          <GameButton color={'yellow'} ><p style={{ color: '#384b9f', fontSize: '30px', margin: '0px' }} >{`Puntos ${Math.round(playerScore)}`}</p></GameButton>

        </Col>
      </Row>

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
