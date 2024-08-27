import { defineStore } from 'pinia'
import data from '../../../data/db.json'
export const useItemsStore = defineStore('itemsStore', {
  state: () => {
    return {
      data
    }
  },
  getters: {
    store: (state) => state.data
  }
})
