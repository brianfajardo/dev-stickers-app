import React from 'react'
import { Popup } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const PopupTextBubble = ({ trigger, content }) => (
  <Popup
    inverted
    on="click"
    hideOnScroll
    trigger={trigger}
    content={content}
    position="top center"
  />
)

PopupTextBubble.propTypes = {
  trigger: PropTypes.element,
  content: PropTypes.string,
}

export default PopupTextBubble
