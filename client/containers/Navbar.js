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
            {itemQuantity > 0
              ? `${itemQuantity} items in cart. Current total: $${subtotal}`
              : 'Start shopping!'}
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
  subtotal: PropTypes.number,
  itemQuantity: PropTypes.number,
}

const mapStateToProps = (state) => {
  let subtotal = 0
  const { cart } = state.user
  const itemQuantity = Object.keys(cart).length

  if (itemQuantity) {
    subtotal = helpers.calculateTotal(cart)
  }

  return { itemQuantity, subtotal }
}

export default connect(mapStateToProps)(Navbar)
