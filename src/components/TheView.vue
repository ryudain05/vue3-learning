<template>
	<main>
		<div class="container py-4">
			<MyButton class="my-button" id="my-button" @click="sayHello" />
		</div>
	</main>
</template>

<script>
import MyButton from './MyButton.vue';
export default {
	components: { MyButton },
	setup() {
		const sayHello = () => {
			alert('안녕하세요');
		};
		return { sayHello };
	},
};
</script>

<style lang="scss" scoped></style>
