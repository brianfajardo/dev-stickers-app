import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Table, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import helpers from '../helpers'
import Header from '../components/Header'

class Cart extends Component {
  render() {
    const { subtotal, taxes, grandTotal } = this.props
    return (
      <div>
        <Header emoji="🛒" emojiLabel="cart" text="Cart" />
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
            <Table.Body>
              <Table.Row>
                <Table.Cell>Node.js</Table.Cell>
                <Table.Cell>
                  1 <Icon name="plus square outline" color="green" size="large" />
                  <Icon name="minus square outline" color="red" size="large" />
                </Table.Cell>
                <Table.Cell>$2.50</Table.Cell>
              </Table.Row>
            </Table.Body>
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
    )
  }
}

Cart.propTypes = {
  subtotal: PropTypes.string,
  taxes: PropTypes.string,
  grandTotal: PropTypes.string,
}

const mapStateToProps = (state) => {
  let subtotal = 0
  let taxes = 0
  let grandTotal = 0
  const { cart } = state.user

  if (Object.keys(cart).length) {
    subtotal = helpers.calculateTotal(cart)
  }

  taxes = helpers.calculateTax(subtotal)
  grandTotal = subtotal + taxes

  return {
    subtotal: subtotal.toFixed(2),
    taxes: taxes.toFixed(2),
    grandTotal: grandTotal.toFixed(2),
  }
}

export default connect(mapStateToProps)(Cart)
