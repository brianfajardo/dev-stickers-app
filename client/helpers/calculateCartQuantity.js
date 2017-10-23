export default (cart) => {
  const quantity = []

  Object.keys(cart).forEach((key) => {
    const item = cart[key]
    quantity.push(item.quantity)
  })

  return quantity.reduce((total, amount) => total + amount)
}
