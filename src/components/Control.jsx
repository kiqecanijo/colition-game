import React, { Component, PropTypes } from 'react';
import { UP, DOWN, LEFT, RIGHT } from 'helpers/constants'

class Control extends Component {
  handleKeyDown = (e) => {
      let newDirection;

      switch(e.keyCode) {
            case 37:
                newDirection = { top: 0, left: -1 , dir: LEFT};
                break;
            case 38:
                newDirection = { top: -1, left: 0 , dir: UP};
                break;
            case 39:
                newDirection = { top: 0, left: 1, dir: RIGHT};
                break;
            case 40:
                newDirection = { top: 1, left: 0, dir: DOWN };
                break;
            default:
                return;
        }

        this.props.handlePlayerMovement(newDirection);
    }

    render() {
        const {  position: { top, left }} = this.props;

        return (
            <div>
                <button onClick={event => this.handleKeyDown({keyCode:37})}>Left</button>
                <button onClick={event => this.handleKeyDown({keyCode:39})}>Right</button>
                <button onClick={event => this.handleKeyDown({keyCode:38})}>Up</button>
                <button onClick={event => this.handleKeyDown({keyCode:40})}>Down</button>

</div>

        );
    }

    componentDidMount() {
        window.onkeydown = this.handleKeyDown;
    }
}

Control.propTypes = {
    size: PropTypes.number.isRequired,
    position: PropTypes.shape({
        top: PropTypes.number.isRequired,
        left: PropTypes.number.isRequired
    })
};

export default Control;
