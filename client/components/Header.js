import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
  <h1>
    <span role="img" aria-label={props.emojiAriaLabel}>
      {props.emoji}
    </span>{' '}
    {props.text}
    {props.children}
  </h1>
)

Header.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  children: PropTypes.element,
  emojiAriaLabel: PropTypes.string,
}

export default Header
