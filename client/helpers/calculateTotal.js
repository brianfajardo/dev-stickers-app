export default (cart) => {
  const itemTotals = []

  // Iterate over each item and push each items price
  // (price * quantiy) into itemTotals array
  Object.keys(cart).forEach((key) => {
    const item = cart[key]
    itemTotals.push(item.price * item.quantity)
  })

  // Use array helper, reduce, to sum and return itemTotals
  return itemTotals.reduce((total, amount) => total + amount)
}
