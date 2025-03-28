<template>
  <div class="container py-4">
    Home View
    <p>{{ $route.path }}</p>
    <button class="btn btn-outline-dark" @click="goAboutPage">
      About 으로 이동
    </button>
    <hr class="my-4" />
    <AppGrid :items="items" v-slot="{ item }" col-class="col-3">
      <AppCard> {{ item }}</AppCard>
    </AppGrid>
    <h2>{{ position }}</h2>
    <h2>x: {{ x }} y: {{ y }}</h2>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { reactive, ref, toRef, toRefs } from 'vue';

const router = useRouter();
const goAboutPage = () => {
  router.push('about');
};

const position = reactive({
  x: 100,
  y: 1000,
});

const { x, y } = toRefs(position);

// const x = position.x;
// const x = ref(position.x);
// const y = ref(position.y);
// // const { x, y } = position;
// console.log('x', typeof x.value);
// console.log('y', typeof y.value);

// const x = toRef(position, 'x');
// const y = toRef(position, 'y');
</script>

<style lang="scss" scoped></style>
