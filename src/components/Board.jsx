import React from 'react'

const style = (dimension) => {
  const dim = dimension + 'px'
  return {
    width: dim,
    height: dim,
    position: 'relative',
    margin: '25px auto',
    overflow: 'hidden',
    borderRadius: '5px',
    backgroundColor: 'black',
    border: '10px solid blue',
    borderRadius: '10px',
    boxShadow: '0px 0px 30px blue'

  }
}

export default ({ dimension, children }) => (
  <div style={style(dimension)}>
    {children}

  </div>
)
