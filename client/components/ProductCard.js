import React from 'react'
import PropTypes from 'prop-types'
import { Card, Image, Icon, Button } from 'semantic-ui-react'

const ProductCard = ({ item }) => (
  <Card id="product-card" centered raised>
    <Image src={item.image.url} alt={item.image.alt} centered />
    <Card.Content>
      <Card.Header>
        <a href={item.url} target="_blank">
          {item.product}
        </a>
      </Card.Header>
      <Card.Meta>{item.category}</Card.Meta>
      <Card.Description id="product-description">{item.description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Icon name="usd" color="green" />
      {item.price}
      <p>
        <Icon name="database" color="yellow" />
        {item.stock === 0 ? 'Currently out of stock' : `${item.stock} in stock`}
      </p>
    </Card.Content>
    {item.stock === 0 ? (
      <Button disabled>Check back soon!</Button>
    ) : (
      <Button animated="fade" color="green">
        <Button.Content visible>
          <Icon name="cart" />
        </Button.Content>
        <Button.Content hidden>Add to cart</Button.Content>
      </Button>
    )}
  </Card>
)

ProductCard.propTypes = {
  item: PropTypes.shape({
    product: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    stock: PropTypes.number,
    image: PropTypes.shape({
      url: PropTypes.string,
      alt: PropTypes.string,
    }),
  }),
}

export default ProductCard
