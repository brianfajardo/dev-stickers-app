import React from 'react'
import { Table, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const TableRow = ({
  item, stickerPrice, increaseQuantity, decreaseQuantity
}) => (
  <Table.Row key={item.id}>
    <Table.Cell>{item.product}</Table.Cell>
    <Table.Cell>
      {item.quantity}
      <Icon
        onClick={() => increaseQuantity(item)}
        name="plus square outline"
        color="green"
        size="large"
      />
      <Icon
        onClick={() => decreaseQuantity(item)}
        name="minus square outline"
        color="red"
        size="large"
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
