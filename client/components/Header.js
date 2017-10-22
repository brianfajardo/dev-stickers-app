import React from 'react'

const Header = props => (
  <h1>
    <span role="img" aria-label={props.emojiAriaLabel}>
      {props.emoji}
    </span>{' '}
    {props.text}
    {props.children}
  </h1>
)

export default Header
