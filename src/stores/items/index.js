import { defineStore } from 'pinia'
import data from '../../../data/db.json'
import actions from './actions'
export const useItemsStore = defineStore('itemsStore', {
  state: () => {
    return {
      data,
      cart: [],
      total: 0
    }
  },
  getters: {
    store: (state) => state.data,
    length: (state) => state.cart.length
  },
  actions
})
