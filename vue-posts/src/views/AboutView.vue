<template>
  <div class="container py-4">
    About View
    <p>{{ $route.path }}</p>
    <button class="btn btn-outline-dark" @click="$router.push('/')">
      Home 으로 이동
    </button>
    <h2>Store</h2>
    <p>counter: {{ counter }}</p>
    <p>doubleCounter: {{ doubleCounter }}</p>
    <p>doubleCountPlusOne: {{ doubleCountPlusOne }}</p>
    <button @click="increment()">Click!</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const store = useCounterStore();
const { counter, doubleCounter, doubleCountPlusOne } = storeToRefs(store);
const { increment } = store;

counter.value = 100;
</script>

<style lang="scss" scoped></style>
