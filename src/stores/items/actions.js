export default {
  decrement(counter, props) {
    const index = (element) => element.id == props.id
    const itemIndex = this.cart.findIndex(index)
    const newObject = { ...this.cart[itemIndex], quantity: counter - 1 }
    this.cart[itemIndex] = newObject
    if (counter - 1 === 0) {
      this.cart.splice(itemIndex, 1)
    }
  },
  increment(counter, props) {
    if (!this.cart.some((item) => item.id === props.id)) {
      this.cart.push(props)
    } else {
      const index = (element) => element.id == props.id
      const itemIndex = this.cart.findIndex(index)
      const newObject = { ...this.cart[itemIndex], quantity: counter }
      this.cart[itemIndex] = newObject
    }
  }
}
