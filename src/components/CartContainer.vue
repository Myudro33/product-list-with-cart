<template>
    <div class="w-2/6 bg-rose-500 p-5">
        <h1 class="lg:text-2xl font-bold text-red">Your Cart({{ itemsStore.length }})</h1>
        <CartComponent class="mt-2" v-for="item in itemsStore.cart" :key="item.id" :name="item.name" :quantity="item.quantity||1" :price="item.price" :id="item.id"/>
       <div v-if="itemsStore.cart.length>0" >
           <div  class="w-full flex justify-between items-center ">
               <p class="text-base text-rose-300">Order total </p>
               <h1 class="text-rose-900 text-2xl font-bold">${{  parseFloat(itemsStore.total).toFixed(2) }}</h1>  
            </div>
            <div class="bg-rose-300 w-full h-10 mt-10 flex justify-center items-center rounded-lg">
              <CarbonIcon/>  <h1>This is a <b>carbon-neutral</b> delivery</h1>
            </div>
        </div>
        <div class="w-full flex flex-col items-center mt-10" v-else>
            <EmptyCartIcon />
            <h1 class="text-rose-500 font-bold">Your added items will be appear here</h1>
        </div>
    </div>
</template>


<script setup>
import CartComponent from './CartComponent.vue';
import { useItemsStore } from '@/stores/items';
import EmptyCartIcon from './icons/EmptyCartIcon.vue';
import CarbonIcon from './icons/CarbonIcon.vue';
const itemsStore = useItemsStore()

</script>