<template>
    <div class="w-2/6 bg-rose-500 p-5">
        <h1 class="lg:text-2xl font-bold text-red">Your Cart({{ itemsStore.length }})</h1>
        <CartComponent class="mt-2" v-for="item in itemsStore.cart" :key="item.id" :name="item.name" :quantity="item.quantity||1" :price="item.price" :id="item.id"/>

    </div>
</template>


<script setup>
import CartComponent from './CartComponent.vue';
import { useItemsStore } from '@/stores/items';
const itemsStore = useItemsStore()
</script>