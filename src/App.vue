<script setup>
import ItemContainer from './components/ItemContainer.vue'
import CartContainer from './components/CartContainer.vue';
</script>

<template>
  <div class="flex xs:flex-col lg:flex-row w-full h-full lg:p-20">
    <ItemContainer/>
    <CartContainer/>
  </div>
</template>
