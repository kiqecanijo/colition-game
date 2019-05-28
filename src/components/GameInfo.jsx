import React, { PropTypes } from 'react';

const infoStyle = {
  color:'white',
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
        <p>Time: {timeElapsed}</p>
        <p>Score: {playerScore}</p>
        <p>High Score: {highScore}</p>
        <p>Lifes: {lifes}</p>

      </div>
    )
}

GameInfo.propTypes = {
    timeElapsed: PropTypes.number.isRequired,
    playerScore: PropTypes.number.isRequired,
    highScore: PropTypes.number.isRequired,
    // globalHighScore: PropTypes.number
};

export default GameInfo;
