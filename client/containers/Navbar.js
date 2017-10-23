import React, { Component } from 'react'
import { Menu, Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import helpers from '../helpers'

class Navbar extends Component {
  render() {
    const { itemsInCart, totalOfCart } = this.props
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
            {itemsInCart > 0
              ? `${itemsInCart} items in cart. Current total: $${totalOfCart}`
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
  totalOfCart: PropTypes.number,
  itemsInCart: PropTypes.number,
}

const mapStateToProps = (state) => {
  let totalOfCart = 0
  const { cart } = state.user
  const itemsInCart = Object.keys(cart).length

  if (itemsInCart) {
    totalOfCart = helpers.calculateTotal(cart)
  }

  return { itemsInCart, totalOfCart }
}

export default connect(mapStateToProps)(Navbar)
