import React, { Component, PropTypes } from 'react';
import { UP, DOWN, LEFT, RIGHT } from 'helpers/constants'

const buttonStyle = {
  color:'blue',
  backgroundColor:'transparent',
  padding: '10px 0px',
  textAlign:'center',
  border: '5px solid blue',
  fontWeight: 'bold',
  fontSize: '30px',
  borderRadius: '10px',
  boxShadow: '0px 0px 10px blue',
  textShadow: '0px 0px 10px blue',
  position:'relative',
  height: '50px',
  width: '70px',
}

window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

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
            <div style={{maxWidth:'210px',margin:'auto'}}>
            <button style={{...buttonStyle,left:'0px'}} onClick={event => this.handleKeyDown({keyCode:38})}>{'^'}</button>
            <br/>
                <button style={buttonStyle} onClick={event => this.handleKeyDown({keyCode:37})}>{'<'}</button>
                <button style={{...buttonStyle,transform:'rotate(180deg)'}} onClick={event => this.handleKeyDown({keyCode:40})}>{'^'}</button>
                <button style={buttonStyle} onClick={event => this.handleKeyDown({keyCode:39})}>{'>'}</button>
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
