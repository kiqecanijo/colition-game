import React, { Component, PropTypes } from 'react';
import { Square } from 'components';

class Enemy extends Component {

    constructor(props){
      super(props)
      this.state = {expresed : true}
  }

    componentDidUpdate() {
        const { size, playerPosition, info: { top, left }} = this.props;

        if ( playerPosition.left < (left + size) - size/2 &&
             playerPosition.top  < (top + size) - size/2  &&
            (playerPosition.left + size) > left + size/2  &&
            (playerPosition.top  + size) > top + size/2  )  {

            this.props.onCollide()
        }
    }

    componentDidMount(){
      this.intervaId = setInterval(() => {
          this.setState(prev => ({expresed: !prev.expresed }));
        },500)
      }

    componentWillUnmount(){
      clearInterval(this.intervaId)

    }

    render() {
        const { size,side, info: { top, left }} = this.props;
        return (
            <Square
                size={size}
                position={{ top, left }}
                color={this.state.expresed ? 'red': 'yellow' } >
            {side}</Square>
        );
    }
}

Enemy.propTypes = {
    size: PropTypes.number.isRequired,
    info: PropTypes.shape({
        top: PropTypes.number.isRequired,
        left: PropTypes.number.isRequired,
        dir: PropTypes.string.isRequired
    }),
    playerPosition: PropTypes.shape({
        top: PropTypes.number.isRequired,
        left: PropTypes.number.isRequired,
    }),
    onCollide: PropTypes.func.isRequired
};

export default Enemy;
