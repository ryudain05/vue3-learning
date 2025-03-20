<template>
	<div class="container py-4"></div>
	<button class="btn btn-primary me-2" @click="changeCurrentComp(DynamicApple)">
		사과
	</button>
	<button class="btn btn-danger" @click="changeCurrentComp(DynamicBanana)">
		바나나
	</button>
	<hr />
	<component :is="currentComp"></component>
</template>

<script setup>
import DynamicApple from './DynamicApple.vue';
import DynamicBanana from './DynamicBanana.vue';
import { shallowRef } from 'vue';

const currentComp = shallowRef(DynamicApple);
const changeCurrentComp = comp => (currentComp.value = comp);
</script>

<style lang="scss" scoped></style>
