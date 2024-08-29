<script setup>
import ItemContainer from './components/ItemContainer.vue'
import CartContainer from './components/CartContainer.vue';
import ConfirmedModalComponent from './components/modal/ConfirmedModalComponent.vue';
import { useItemsStore } from './stores/items';

const itemsStore = useItemsStore()
</script>

<template>
  <div :class="{'overflow-hidden':itemsStore.confirmModal,'h-screen':itemsStore.confirmModal}">
    <div class="flex xs:flex-col lg:flex-row w-full h-full lg:p-20 ">
      <ItemContainer/>
      <CartContainer/>
    </div>
  </div>
  <ConfirmedModalComponent/>
</template>
