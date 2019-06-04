import React, { Component } from 'react'
import { render } from 'react-dom'
import { Game } from 'containers'
import FacebookLogin from 'react-facebook-login'
import {Intro,Form} from 'components'
import {entrypoint,encode,cleanText} from 'Utils'
import styled from 'styled-components'

const root = document.getElementById('root')
const width = window.innerWidth
const height = window.innerHeight

const minor = width > height ? height : width

const Div = styled.div`
  text-align:center;

`

class Engine extends Component {

  state = {
    user: false,
    ready: false,
    data: false
  }

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
      this.setState({ user: res })
    })
  }

  handleFormResponse(res){
    this.setState(prev => ({data:res}),event => console.log(this.state))
  }

  render () {
    return (
      <Div>
        {!this.state.user &&
          <Intro>
          <FacebookLogin
            appId="2372801119674024"
            autoLoad={false}
            textButton={'Ingresa con facebook'}
            fields="name,email,picture"
            isMobile={false}
            callback={this.responseFacebook.bind(this)}
            />


        </Intro>}


        {this.state.user && !this.state.user.phone && !this.state.data && <Form formResponse={this.handleFormResponse.bind(this)} user={this.state.user}/>}
        {this.state.user && this.state.user.phone && <Game boardSize={8} playerSize={minor / 10} />}
      </Div>
    )
  }
}

render(
  <Engine/>, root)
