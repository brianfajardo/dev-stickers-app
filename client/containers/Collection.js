import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchInventory } from '../actions'
import Header from '../components/Header'

class Collection extends Component {
  componentDidMount() {
    this.props.fetchInventory()
  }

  render() {
    return (
      <div id="collection">
        <Header emoji="🎉" emojiAriaLabel="confetti" text="The Collection" />
        {this.props.inventory.map((item, index) => <p key={index}>{item.product}</p>)}
      </div>
    )
  }
}

const mapStateToProps = state => ({ inventory: state.inventory })

export default connect(mapStateToProps, { fetchInventory })(Collection)
