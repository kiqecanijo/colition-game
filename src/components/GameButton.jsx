import React from 'react'
import styled from 'styled-components'
import redButton from '../sprites/red-button.png'

const ComponentStyle = styled.button`
height: 81px;
  width: 290px;
  background-color: transparent;
  color: white;
  font-size: 20px;
  border: none;
  background-image: url(${redButton});
  background-repeat:no-repeat;
  font-weight:bold;
  cursor:pointer;

`

const GameButton = props => {
  return(
    <ComponentStyle  >{props.children}</ComponentStyle>
  )
}



export default GameButton
