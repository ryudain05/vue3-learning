<template>
	<div>
		<div :style="styleObject">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
			architecto aut autem corporis doloremque enim hic id in iste iure
			molestias nostrum, quos reiciendis similique sint, sit suscipit voluptas
			voluptate!
		</div>
		<button v-on:click="fontSize--">-</button>
		<button v-on:click="fontSize++">+</button>
	</div>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
	setup() {
		// const styleObject = reactive({
		// 	color: 'red',
		// 	fontSize: '13px',
		// });

		const fontSize = ref(13);
		const styleObject = computed(() => {
			return {
				color: 'red',
				fontSize: fontSize.value + 'px',
			};
		});

		return { styleObject, fontSize };
	},
};
</script>

<style lang="scss" scoped></style>
