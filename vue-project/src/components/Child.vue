<template>
	<div class="card">
		<div class="card-header">Child Component</div>
		<p>{{ appMessage }}</p>
		<div class="card-body"><DeepChild /></div>
	</div>
</template>

<script>
import DeepChild from './DeepChild.vue';
import { inject } from 'vue';
export default {
	components: { DeepChild },
	setup() {
		const appMessage = inject('app-message');
		return { appMessage };
	},
};
</script>

<style lang="scss" scoped></style>
