import React,{Component} from 'react'
import styled from 'styled-components'
import redButton from '../sprites/red-button.png'
import yellowButton from '../sprites/yellow-button.png'


const ComponentStyle = styled.button`
height: 81px;
  width: 290px;
  background-color: transparent;
  color: white;
  font-size: 20px;
  border: none;
  background-repeat:no-repeat;
  font-weight:bold;
  cursor:pointer;
  vertical-align:bottom
`

class GameButton extends Component {


  render(){
    return(
        <ComponentStyle
          onClick={this.props.callback}
          style={{backgroundImage: `url(${this.props.color === 'red' ? redButton:yellowButton })`}}
          >{this.props.children}</ComponentStyle>
    )

  }
}

export default GameButton
