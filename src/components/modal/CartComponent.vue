<template>
  <div class="flex justify-between items-center h-10 w-full mt-6">
    <div class="flex">
      <img class="w-12 rounded-lg h-12" :src="props.image.desktop" alt="product image" />
      <div class="ml-2">
        <h1 class="text-xs text-rose-900 mt-2 font-medium">{{ props.name }}</h1>
        <div class="flex mt-1">
          <p class="text-xs text-red font-bold">{{ props.quantity }}x</p>
          <p class="text-xs ml-3">@ ${{ parseFloat(props.price).toFixed(2) }}</p>
        </div>
      </div>
    </div>
    <p class="font-bold text-lg text-rose-900">
      ${{ parseFloat(props.price * props.quantity).toFixed(2) }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps(['image', 'name', 'quantity', 'price'])
</script>
