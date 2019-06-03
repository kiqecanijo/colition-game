import React, { Component, PropTypes } from 'react'
import { Square } from 'components'
import { UP, DOWN, LEFT, RIGHT } from 'helpers/constants'
import jaguar from '../sprites/jaguar.png'

class Player extends Component {
  render () {
    const { size, colidable, position: { top, left } } = this.props

    return (
      <div ref={ n => { this.player = n }} className={!colidable ? 'animate-flicker' : 'noa nimated'} >
        <Square
          size={size}
          position={{ top, left }}
          sprite={jaguar}
          color='white' />
      </div>

    )
  }
}

Player.propTypes = {
  size: PropTypes.number.isRequired,
  position: PropTypes.shape({
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired
  })
}

export default Player
