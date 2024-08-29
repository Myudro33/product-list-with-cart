<template>
  <div class="bg-red w-full h-full flex flex-col">
    <h1 class="lg:text-3xl font-bold text-rose-900">Desserts</h1>
    <div class="lg:w-full h-full flex flex-wrap gap-5 bg-green mt-4">
      <CardComponent
        v-for="item in itemsStore.store"
        :key="item.id"
        :id="item.id"
        :image="item.image"
        :name="item.name"
        :category="item.category"
        :price="item.price"
        :quantity="item.quantity"
        :modal="item.modal"
      />
    </div>
  </div>
</template>

<script setup>
import CardComponent from './CardComponent.vue'
import { useItemsStore } from '../stores/items/index.js'
const itemsStore = useItemsStore()
</script>