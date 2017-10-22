import React, { Component } from 'react'

import Header from '../components/Header'

class Collection extends Component {
  componentDidMount() {
    this.props.fetchInventory()
  }

  render() {
    return (
      <div id="collection">
        <Header emoji="🎉" emojiAriaLabel="confetti" text="The Collection" />
      </div>
    )
  }
}

export default Collection
