import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

class Cart extends Component {
  render() {
    return (
      <div>
        Items added to cart, taxes and grand total will be rendered here
        <Link to="/">
          <Button color="red">Back</Button>
        </Link>
      </div>
    )
  }
}

export default Cart
