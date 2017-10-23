import React, { Component } from 'react'
import { Menu, Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import helpers from '../helpers'

class Navbar extends Component {
  render() {
    const { itemQuantity, subtotal } = this.props
    return (
      <Menu inverted id="navbar">
        <Link to="/">
          <Menu.Item>
            <Icon name="lightning" size="big" />
            Webdev Stckrs.
          </Menu.Item>
        </Link>
        <Menu.Menu position="right">
          <Menu.Item>
            <Link to="/collection">
              {itemQuantity > 0
                ? `${itemQuantity} ${itemQuantity === 1
                    ? 'item'
                    : 'items'} in cart 🔆 Subtotal: $${subtotal}`
                : 'Start shopping! 🔥'}
            </Link>
          </Menu.Item>
          <Link to="/cart">
            <Menu.Item>
              <Button animated="vertical" inverted color="green">
                <Button.Content hidden>Cart</Button.Content>
                <Button.Content visible>
                  <Icon name="shop" />
                </Button.Content>
              </Button>
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Menu>
    )
  }
}

Navbar.propTypes = {
  subtotal: PropTypes.string,
  itemQuantity: PropTypes.number,
}

const mapStateToProps = (state) => {
  let subtotal = 0
  let itemQuantity = 0
  const { cart } = state.user

  if (Object.keys(cart).length > 0) {
    subtotal = helpers.calculateTotal(cart)
    itemQuantity = helpers.calculateCartQuantity(cart)
  }

  return { itemQuantity, subtotal: subtotal.toFixed(2) }
}

export default connect(mapStateToProps)(Navbar)
