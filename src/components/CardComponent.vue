<template>
  <div class="lg:w-[30%] lg:h-[21rem] relative">
    <img class="w-full h-3/4 rounded-lg object-cover" :src="props.image.desktop" alt="" />
    <div
      class="lg:w-40 lg:h-10 left-[25%] overflow-hidden top-[14.5rem] rounded-3xl bg-[#fff] font-medium border border-red absolute"
    >
      <div
        @click="openModal"
        class="w-full h-full flex justify-center items-center cursor-pointer"
        v-if="!props.modal"
      >
        <CartIcon />
        <h1 class="ml-2">Add to cart</h1>
      </div>
      <div class="w-full bg-red h-full flex justify-between items-center px-3" v-else>
        <MinusIcon @click="decrement" />
        {{ itemsStore.store[itemIndex]?.quantity}}
        <PlusIcon @click="increment"/>
      </div>
    </div>
    <h1 class="font-thin text-rose-300 mt-5">{{ props.category }}</h1>
    <h1 class="font-medium text-rose-900">{{ props.name }}</h1>
    <h1 class="font-semibold text-red">${{ parseFloat(props.price).toFixed(2) }}</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CartIcon from './icons/CartIcon.vue'
import MinusIcon from './icons/MinusIcon.vue'
import PlusIcon from './icons/PlusIcon.vue'
import { useItemsStore } from '@/stores/items'
const props = defineProps(['id', 'image', 'name', 'category', 'price','quantity','modal'])
const counter = ref(props.quantity)
const itemIndex = ref(0)
const itemsStore = useItemsStore()

const openModal = ()=>{
  itemsStore.increment(counter.value,props)
  const index = (element) => element.id == props.id
  itemIndex.value = itemsStore.data.findIndex(index)
  itemsStore.data[itemsStore.data.findIndex(index)].modal = true
  
}
const decrement = () => {
  itemsStore.decrement(counter.value,props)
  counter.value--
}
const increment = () => {
counter.value++   
itemsStore.increment(counter.value,props)
}
</script>