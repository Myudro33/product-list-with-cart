<template>
  <div  @click="itemsStore.newOrder" v-if="itemsStore.confirmModal" class="text-5xl absolute flex justify-center items-center top-0 w-screen bg-[#00000080] h-[100%]">
    <div @click.stop class="bg-[#fff] w-[30rem] h-auto rounded-lg p-10">
      <ConfirmedIcon/>
      <h1 class="text-[#000] text-4xl mt-2 font-bold">Order Confirmed</h1>
      <h1 class="text-xl text-rose-500 mt-2">We hope you enjoy your food!</h1>
      <CartComponent v-for="(item, index) in itemsStore.cart" :name="item.name" :price="item.price" :quantity="item.quantity" :image="item.image" :key="index"/>
      <div class="flex justify-between items-center w-full mt-8">
        <h1 class="text-lg" >Order total</h1>
        <h1 class="text-xl font-bold">${{  parseFloat(itemsStore.total).toFixed(2) }}</h1>
    </div>
    <button @click="itemsStore.newOrder"  class="bg-red w-full h-10 text-lg rounded-3xl text-[#fff]">Start New Order</button>
    </div>
 </div>
</template>

<script setup>
import { useItemsStore } from '@/stores/items';
import ConfirmedIcon from '../icons/ConfirmedIcon.vue';
import CartComponent from './CartComponent.vue';
const itemsStore = useItemsStore()
</script>