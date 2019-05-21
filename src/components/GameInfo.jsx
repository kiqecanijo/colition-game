import React, { PropTypes } from 'react';



const GameInfo = ({
    timeElapsed,
    playerScore,
    highScore,
}) => {
    return (
        <div >
            <div >
                <p>Time: {timeElapsed}</p>
                <p>Score: {playerScore}</p>
            </div>
            <div >
                <p>High Score: {highScore}</p>
            </div>
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
