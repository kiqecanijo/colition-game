import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
color:white
`

const Top = props => {


const {user,top} = props

console.log(top);
  return(
    <Div>
      your name: {user.name}
      <br/>
      your score: {user.score}
      {top.map(usr => {
        return(
          <div>
              <img src={usr.photo} />
              <p>{usr.name}</p>
              <p>{usr.score}</p>

          </div>
        )
      })}
    </Div>
  )
}

export default Top
