<template>
    <div class="w-full h-20 flex justify-between items-center  border-b border-b-rose-300">
        <div class="flex flex-col">
            <h1 class="font-bold">{{ props.name }}</h1>
            <div class="flex">
                <p class="text-red font-medium">{{ props.quantity }}x</p>
                <p class="ml-2">@ ${{ parseFloat(props.price).toFixed(2) }}</p>
                <p class="ml-2 text-rose-300 font-semibold">${{ props.price*props.quantity }}</p>
            </div>
        </div>
        <RemoveIcon class="cursor-pointer" @click="()=>itemsStore.removeFromCart(props.id)" />
    </div>
</template>

<script setup>
import { watch } from 'vue';
import RemoveIcon from './icons/RemoveIcon.vue';
import { useItemsStore } from '@/stores/items';
const props = defineProps(['name','quantity','price','id'])
const itemsStore = useItemsStore()
    watch(itemsStore.cart, () => {
        console.log(itemsStore.calculateTotalPrice());
    });

</script>