import React, { Component } from 'react'
import { render } from 'react-dom'
import { Game } from 'containers'
import FacebookLogin from 'react-facebook-login'
import {Intro,Form,Top} from 'components'
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
      console.log(res);
      this.setState({ user: res })
    })
  }

  handleFormResponse(res){
    this.setState(prev => ({user:res}),event => console.log(this.state))
  }

  finishGame(playerScore){
    this.setState(prev => ({user:{...prev.user,score:playerScore} }))
    fetch(entrypoint, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=ISO-8859-1'
      },
      body: encode({
        user_id: this.state.user.user_id,
        action: 'endGame',
        mistakes: 1,
        startTime: new Date,
        score: playerScore,
        cards: null
      })
    })
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
        </Intro>
      }
        {this.state.user && !this.state.user.phone && <Form formResponse={this.handleFormResponse.bind(this)} user={this.state.user}/>}
        {this.state.user && this.state.user.phone && !this.state.user.score && <Game boardSize={8} finishGame={this.finishGame.bind(this)} playerSize={minor / 10} />}
        {this.state.user && this.state.user.phone && this.state.user.score && <Top user={this.state.user} top={this.state.user.top} /> }
      </Div>
    )
  }
}

render(
  <Engine/>, root)
