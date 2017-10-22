import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Table, Icon } from 'semantic-ui-react'

import Header from '../components/Header'

class Cart extends Component {
  render() {
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
                <Table.Cell>React.js</Table.Cell>
                <Table.Cell>
                  2 <Icon name="plus square outline" color="green" size="large" />
                  <Icon name="minus square outline" color="red" size="large" />
                </Table.Cell>
                <Table.Cell>$5.00</Table.Cell>
              </Table.Row>
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
          <p>
            <b>Subtotal</b> $X.XX
          </p>
          <p>
            <b>Taxes (13%):</b> $X.XX
          </p>
          <p>
            <b>Grand Total:</b> $X.XX
          </p>
          <Link to="/collection">
            <Button color="red">Back</Button>
          </Link>
          <Button color="green">Checkout</Button>
        </div>
      </div>
    )
  }
}

export default Cart
