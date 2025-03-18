<template>
	<div>
		<h2>{{ msg }}</h2>
		<h2 v-text="msg"></h2>
		<h2 v-text="htmlStr"></h2>
		<h2 v-html="htmlStr"></h2>
		<p v-once>{{ msg }} !!</p>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const msg = ref('안녕하세요');
		const htmlStr = ref('<strong>안녕!!!</strong>');
		return { msg, htmlStr };
	},
};
</script>

<style lang="scss" scoped></style>
