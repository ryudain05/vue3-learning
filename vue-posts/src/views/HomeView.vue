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
    <hr class="my-4" />
    <h2>{{ $person.name }}</h2>
    <button class="btn btn-primary" @click="person.key">click person</button>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$person.name);
    this.$person.say();
  },
};
</script>

<script setup>
import { useRouter } from 'vue-router';
import AppGrid from '../components/AppGrid.vue';
import AppCard from '../components/AppCard.vue';
import { inject, ref } from 'vue';

const router = useRouter();
const goAboutPage = () => {
  router.push('about');
};

const items = ref(['사과', '딸기', '포도', '바나나']);
const person = inject('person');

console.log('person.name', person.name);
</script>

<style lang="scss" scoped></style>
