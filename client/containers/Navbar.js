import React, { Component } from 'react'
import { Menu, Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <Menu inverted id="navbar">
        <Link to="/">
          <Menu.Item>
            <Icon name="lightning" size="big" />
            Webdev Stckrs.
          </Menu.Item>
        </Link>
        <Menu.Menu position="right">
          <Menu.Item>X items in cart. Current total: $X</Menu.Item>
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

export default Navbar
