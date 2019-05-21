import React, { PropTypes } from 'react';
import styled from 'styled-components'

const InfoArea = styled.div`
  background-color: green;
  border-radius: 10px;
  
`


const GameInfo = ({
    timeElapsed,
    playerScore,
    highScore,
}) => {
    return (
        <InfoArea >
            <div >
                <p>Time: {timeElapsed}</p>
                <p>Score: {playerScore}</p>
            </div>
            <div >
                <p>High Score: {highScore}</p>
            </div>
        </InfoArea>
    )
}

GameInfo.propTypes = {
    timeElapsed: PropTypes.number.isRequired,
    playerScore: PropTypes.number.isRequired,
    highScore: PropTypes.number.isRequired,
    // globalHighScore: PropTypes.number
};

export default GameInfo;
