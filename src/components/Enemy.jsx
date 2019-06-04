import React, { Component, PropTypes } from 'react'
import { Square } from 'components'
import ship1 from '../sprites/ship1.png'
import ship2 from '../sprites/ship2.png'

class Enemy extends Component {
  constructor (props) {
    super(props)
    this.state = { expresed: true }
  }

  componentDidUpdate () {
    const { size, playerPosition, info: { top, left } } = this.props

    if (playerPosition.left < (left + size) - size / 3 &&
             playerPosition.top < (top + size) - size / 3 &&
            (playerPosition.left + size) > left + size / 3 &&
            (playerPosition.top + size) > top + size / 3) {
      this.props.onCollide()
    }
  }

  componentDidMount () {
    this.intervaId = setInterval(() => {
      this.setState(prev => ({ expresed: !prev.expresed }))
    }, 500)
  }

  componentWillUnmount () {
    clearInterval(this.intervaId)
  }

  render () {
    const { size, side, info: { top, left } } = this.props
    return (
      <Square
        direction={side}
        size={size}
        position={{ top, left }}
        sprite={this.state.expresed ? ship1 : ship2 } >
      </Square>
    )
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
    left: PropTypes.number.isRequired
  }),
  onCollide: PropTypes.func.isRequired
}

export default Enemy
