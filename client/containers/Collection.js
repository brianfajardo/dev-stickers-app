import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as actions from '../actions'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'

class Collection extends Component {
  constructor(props) {
    super(props)
    this.onAddToCart = this.onAddToCart.bind(this)
  }

  componentDidMount() {
    this.props.fetchInventory()
  }

  onAddToCart(item) {
    this.props.addToCart(item)
  }

  render() {
    return (
      <div id="collection">
        <Header emoji="🎉" emojiAriaLabel="confetti" text="The Collection" />
        <div>
          {this.props.inventory.map(item => (
            <ProductCard item={item} key={item.id} onAddToCart={this.onAddToCart} />
          ))}
        </div>
        <p>
          Images provided by{' '}
          <a href="https://svgporn.com/" target="_blank" rel="noopener noreferrer">
            SVG Porn
          </a>
        </p>
      </div>
    )
  }
}

Collection.propTypes = {
  fetchInventory: PropTypes.func,
  inventory: PropTypes.array,
  addToCart: PropTypes.func,
}

const mapStateToProps = state => ({ inventory: state.inventory })

export default connect(mapStateToProps, actions)(Collection)
