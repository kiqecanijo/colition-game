import React, { Component } from 'react'
import { render } from 'react-dom'
import { Game } from 'containers'
import FacebookLogin from 'react-facebook-login'
import styled from 'styled-components'
import careful from './sprites/cuidado.png'


const Places = styled.div`
  display:inline-block;
  position: relative;
  text-align:center;
  width:30%;
  vertical-align:top;
  font-size:20px;
  font-weight: 600;
`

const Div = styled.div`
padding: 0px;
text-align:center;
max-width: 800px;
margin:auto;
color:white
`
const encode = data => {
  return btoa(JSON.stringify(data))
}
const cleanText = text => {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

const entrypoint = 'https://centralmedia.com.mx/facebook/cliente-nutribaby/jaguarete/entrypoint.php'
const root = document.getElementById('root')
const width = window.innerWidth
const height = window.innerHeight

const minor = width > height ? height : width




class Engine extends Component {
  responseFacebook (res) {
    res.id && fetch(entrypoint, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=ISO-8859-1'
      },
      body: encode({
        action: 'login',
        user_id: res.id,
        name: cleanText(res.name),
        photo: res.picture.data.url,
        email: res.email
      })
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      this.setState({ user: res })
    })
  }

  state = {
    user: false,
    ready: false
  }

  render () {
    return (
      <Div>

      {!this.state.user && <Game boardSize={8} playerSize={minor / 10} />}
      </Div>
    )
  }
}

render(
  <Engine/>, root)
