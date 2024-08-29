export default {
  newOrder() {
    for (let i = 0; i < this.data.length; i++) {
      this.data[i] = { ...this.data[i], modal: false, quantity: 1 }
    }
    this.cart = []
    this.confirmModal = false
  },
  modal(state) {
    this.confirmModal = state
  },
  calculateTotalPrice() {
    this.total = this.cart.reduce((total, product) => total + product.price * product.quantity, 0)
  },
  removeFromCart(id) {
    const index = (element) => element.id == id
    const itemIndex = this.cart.findIndex(index)
    const itemDataIndex = this.store.findIndex(index)
    const newItemObject = { ...this.store[itemDataIndex], modal: false, quantity: 1 }
    this.store[itemDataIndex] = newItemObject
    this.cart.splice(itemIndex, 1)
  },
  decrement(counter, props) {
    if (counter !== 1 && counter > 0) {
      const index = (element) => element.id == props.id
      const itemIndex = this.cart.findIndex(index)
      const itemDataIndex = this.store.findIndex(index)
      const newObject = { ...this.cart[itemIndex], quantity: counter - 1 }
      const newItemObject = { ...this.store[itemDataIndex], quantity: counter - 1 }
      this.store[itemDataIndex] = newItemObject
      this.cart[itemIndex] = newObject
    } else {
      const index = (element) => element.id == props.id
      const itemIndex = this.cart.findIndex(index)
      const itemDataIndex = this.store.findIndex(index)
      const newItemObject = { ...this.store[itemDataIndex], modal: false, quantity: 1 }
      this.cart.splice(itemIndex, 1)
      return (this.store[itemDataIndex] = newItemObject)
    }
  },
  increment(counter, props) {
    if (!this.cart.some((item) => item.id === props.id)) {
      this.cart.push({ ...props, quantity: 1 })
    } else {
      const index = (element) => element.id == props.id
      const itemIndex = this.store.findIndex(index)
      const cartItemIndex = this.cart.findIndex(index)
      const newObject = { ...this.store[itemIndex], quantity: counter }
      if (counter - this.store[itemIndex].quantity === 1) {
        this.store[itemIndex] = newObject
        this.cart[cartItemIndex] = newObject
      } else {
        const newObject = { ...this.store[itemIndex], quantity: this.store[itemIndex].quantity + 1 }
        this.store[itemIndex] = newObject
        this.cart[cartItemIndex] = newObject
      }
    }
    this.calculateTotalPrice()
  }
}
