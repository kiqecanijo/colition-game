import React, { Component, PropTypes } from 'react';
import { Square } from 'components';
import { UP, DOWN, LEFT, RIGHT } from 'helpers/constants'

class Player extends Component {


    render() {
        const { size, position: { top, left }} = this.props;

        return (
            <div ref={ n => { this.player = n }} >
                <Square
                    size={size}
                    position={{ top, left }}
                    color='yellow' />
            </div>

        );
    }


}

Player.propTypes = {
    size: PropTypes.number.isRequired,
    position: PropTypes.shape({
        top: PropTypes.number.isRequired,
        left: PropTypes.number.isRequired
    })
};

export default Player;
