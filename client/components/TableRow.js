import React from 'react'
import { Table, Icon, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const TableRow = ({
  item, stickerPrice, increaseQuantity, decreaseQuantity
}) => (
  <Table.Row key={item.id}>
    <Table.Cell>{item.product}</Table.Cell>
    <Table.Cell>
      {item.quantity}
      <Icon
        name="plus square outline"
        color="green"
        size="large"
        onClick={() => increaseQuantity(item)}
      />
      <Icon
        name="minus square outline"
        color="red"
        size="large"
        onClick={() => decreaseQuantity(item)}
      />
    </Table.Cell>
    <Table.Cell>{stickerPrice.toFixed(2)}</Table.Cell>
  </Table.Row>
)

TableRow.propTypes = {
  item: PropTypes.object,
  stickerPrice: PropTypes.number,
  increaseQuantity: PropTypes.func,
  decreaseQuantity: PropTypes.func,
}

export default TableRow
