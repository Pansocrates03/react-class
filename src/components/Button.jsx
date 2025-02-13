import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.suma}>{props.name}</button>
  )
}

export default Button
