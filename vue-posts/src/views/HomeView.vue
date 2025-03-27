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
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goAboutPage = () => {
  router.push('about');
};
</script>

<style lang="scss" scoped></style>
