export default {
  removeFromCart(id) {
    const index = (element) => element.id == id
    const itemIndex = this.cart.findIndex(index)
    this.cart.splice(itemIndex, 1)
  },
  decrement(counter, props) {
    const index = (element) => element.id == props.id
    const itemIndex = this.cart.findIndex(index)
    const itemDataIndex = this.store.findIndex(index)
    const newObject = { ...this.cart[itemIndex], quantity: counter - 1 }
    const newItemObject = { ...this.store[itemDataIndex], quantity: counter - 1 }
    this.store[itemDataIndex] = newItemObject
    this.cart[itemIndex] = newObject
    if (counter - 1 === 0) {
      this.cart.splice(itemIndex, 1)
      const newItemObject = { ...this.store[itemDataIndex], modal: false }
      this.store[itemDataIndex] = newItemObject
    }
  },
  increment(counter, props) {
    if (!this.cart.some((item) => item.id === props.id)) {
      this.cart.push({ ...props, quantity: counter })
    } else {
      const index = (element) => element.id == props.id
      const itemIndex = this.store.findIndex(index)
      const cartItemIndex = this.cart.findIndex(index)
      const newObject = { ...this.store[itemIndex], quantity: counter }
      this.store[itemIndex] = newObject
      this.cart[cartItemIndex] = newObject
    }
  }
}
