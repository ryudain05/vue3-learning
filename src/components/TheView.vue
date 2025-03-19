<template>
	<main>
		<div class="container py-4">
			<MyButton class="my-button" id="my-button" @say-hello="sayHello" />
			<!--@click="sayHello"-->
			<LabelInput label="이름" />
		</div>
	</main>
</template>

<script>
import MyButton from './MyButton.vue';
import LabelInput from './LabelInput.vue';
export default {
	components: { MyButton, LabelInput },
	setup() {
		const sayHello = () => {
			alert('안녕하세요');
		};
		return { sayHello };
	},
};
</script>

<style lang="scss" scoped></style>
