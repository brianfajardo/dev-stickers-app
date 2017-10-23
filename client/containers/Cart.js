import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Table } from 'semantic-ui-react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as actions from '../actions'
import helpers from '../helpers'
import Header from '../components/Header'
import TableRow from '../components/TableRow'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.increaseQuantity = this.increaseQuantity.bind(this)
    this.decreaseQuantity = this.decreaseQuantity.bind(this)
  }

  increaseQuantity(item) {
    if (!this.props.inventory.find(product => product.id === item.id).stock) {
      // Do something here to indicate to user that he/she cannot add anymore
      console.log(`${item.product} stock is 0!`)
      return
    }
    this.props.addToCart(item)
  }

  decreaseQuantity(item) {
    if (!this.props.cart[item.id]) return

    if (this.props.cart[item.id].quantity === 0) {
      // Prevent user from having negative products in cart.
      console.log(`There is 0 quantity of ${item.product} in cart!`)
      // On zero quantity, remove item from cart
      delete this.props.cart[item.id]
      return
    }

    this.props.removeFromCart(item)
  }

  renderTableRows() {
    const { cart } = this.props

    return Object.keys(cart).map((key) => {
      const item = cart[key]
      const stickerPrice = item.price * item.quantity
      return (
        <TableRow
          item={item}
          key={item.id}
          stickerPrice={stickerPrice}
          increaseQuantity={this.increaseQuantity}
          decreaseQuantity={this.decreaseQuantity}
        />
      )
    })
  }

  render() {
    const {
      subtotal, taxes, grandTotal, isCartEmpty
    } = this.props

    return (
      <div id="cart">
        <Header emoji="🛒" emojiLabel="cart" text="Cart" />
        {isCartEmpty ? (
          <h3>Oops, looks like {"you're"} cart is empty! 😅</h3>
        ) : (
          <div>
            <div>
              <Table color="green" striped columns="4" textAlign="center">
                {/* Table header */}
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Sticker</Table.HeaderCell>
                    <Table.HeaderCell>Quantity</Table.HeaderCell>
                    <Table.HeaderCell>Price (CDN)</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                {/* Table body */}
                <Table.Body>{this.renderTableRows()}</Table.Body>
              </Table>
            </div>
            <div style={{ float: 'right', textAlign: 'right' }}>
              <p>Subtotal: ${subtotal}</p>
              <p>Taxes (13%): ${taxes}</p>
              <p>Grand Total: ${grandTotal}</p>
              <Link to="/collection">
                <Button color="red">Back</Button>
              </Link>
              <Button color="green">Checkout</Button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

Cart.propTypes = {
  cart: PropTypes.object,
  taxes: PropTypes.string,
  addToCart: PropTypes.func,
  subtotal: PropTypes.string,
  inventory: PropTypes.array,
  isCartEmpty: PropTypes.bool,
  grandTotal: PropTypes.string,
  removeFromCart: PropTypes.func,
}

const mapStateToProps = ({ inventory, user }) => {
  const { cart } = user
  let taxes = 0
  let subtotal = 0
  let grandTotal = 0
  const isCartEmpty = !Object.keys(cart).length

  if (!isCartEmpty) {
    subtotal = helpers.calculateTotal(cart)
  }

  taxes = helpers.calculateTax(subtotal)
  grandTotal = subtotal + taxes

  return {
    cart,
    isCartEmpty,
    inventory,
    subtotal: subtotal.toFixed(2),
    taxes: taxes.toFixed(2),
    grandTotal: grandTotal.toFixed(2),
  }
}

export default connect(mapStateToProps, actions)(Cart)
