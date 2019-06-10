import React, { Component } from 'react'
import styled from 'styled-components'
import { entrypoint, encode, cleanText } from '../Utils'
import careful from '../sprites/cuidado.png'

const inputStyles = {
  padding: '15px',
  width: '300px',
  maxWidth: '80%',
  border: '0px',
  borderRadius: '5px',
  fontSize: '13px',
  margin: '5px'
}

const Checkbox = styled.input`
width:20px;
height: 20px;
vertical-align:middle;
border:0px;

`

const Button = styled.button`
${props => props.disabled && `
     background-color: gray;
  ` || `
  background-color: #fecd72;
  `}
border: 0px solid;
font-size: 20px;
padding: 10px;
text-align:center;
width: 200px;
margin:auto;
color: #003453;
font-weight: bold;
cursor:pointer;
`

class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: props.user
    }
  }

  sumbitForm (form) {
    form.preventDefault()

    fetch(entrypoint, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=ISO-8859-1'
      },
      body: encode({
        user_id: this.state.user.user_id,
        action: 'complete',
        full_name: this.state.user.name
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, ''),
        phone: this.state.user.phone,
        email: this.state.user.email,
        full_email: this.state.user.email
      })
    })
      .then(res => res.json())
      .then(response => {
        response.user_id &&
      this.props.formResponse(response)
      })
  }

  render () {
    return (
      (
        <form onSubmit={this.sumbitForm.bind(this)} style={{ color: 'white', fontSize: '30px', fontFamily: 'nunito' }}>
          <img style={{ maxWidth: '300px', width: '100%' }} src={careful} />

          <p
            className={'bold'}>Regístrate</p>
          <input
            style={inputStyles}
            type="text"
            minLength={4}
            pattern="^[a-z A-Z á-ź Á-Ź]{4,100}$"
            title="inserte un nombre válido"
            placeholder="Nombre que aparece en tu  identificación oficial"
            value={this.state.user.name}
            onKeyDown={event => {
              event.key === ' ' && this.setState(prev => ({ user: { ...prev.user, name: prev.user.name + ' ' } }))
            }
            }

            onChange={event => {
              event.persist()
              this.setState(prevState => ({ user: { ...prevState.user, name: event.target.value } }))
            }}
          />

          <br />
          {!this.state.user.name && 'ingrese un nombre válido'}
          <br/>
          <input
            style={inputStyles}
            type="number"
            minLength={8}
            placeholder="Número de teléfono"
            pattern="^[0-9]{8,}$"
            title="inserte un número válido"
            value={this.state.user.phone}
            onChange={event => {
              event.persist()
              this.setState(prevState => ({ user: { ...prevState.user, phone: event.target.value } }))
            }}
          />
          <br/>
          {this.state.user.phone && this.state.user.phone !== null && this.state.user.phone.length < 8 && 'Introduce un teléfono válido'}
          <br />
          <input
            style={inputStyles}
            type="text"
            minLength={5}
            pattern="^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$"
            title="inserte un correo válido"
            placeholder="Correo"
            value={this.state.user.email}
            onChange={event => {
              event.persist()
              this.setState(prevState => ({ user: { ...prevState.user, email: event.target.value } }))
            }}
          />
          <br />
          {!this.state.user.email && 'ingrese un email válido'}
          <br />
          <Checkbox type="checkbox" checked={this.state.checked} onChange={ event => this.setState(prevState => ({ checked: true })) }/>
          *Aceptas los <a target="_blank" href="https://centralmedia.com.mx/facebook/nutribaby/" className="gold">términos de privacidad</a>
          <br/>
          <br/>

          <Button
            disabled={
              !this.state.user.name ||
            (this.state.user.phone !== null
              ? this.state.user.phone.length < 8
              : !this.state.user.phone) ||
              !this.state.user.email ||
              !this.state.checked
            }
          >Siguiente
          </Button>

        </form>
      )
    )
  }
}
export default Form
