<template>
	<div class="p-3 bg-danger">
		<button class="btn btn-primary" type="button" @click="sayHello">
			MyButton
		</button>
		<!--v-bind="$attrs"{{$attrs}}  -->
	</div>
</template>

<script>
export default {
	// inheritAttrs: false,
	emits: ['click'],
	setup(props, { emit }) {
		// console.log('context.attrs:', context.attrs);
		// console.log('context.attrs.class:', context.attrs.class);
		// console.log('context.attrs.id:', context.attrs.id);
		// console.log('context.attrs.onClick:', context.attrs.onClick);
		// context.attrs.onClick();
		const sayHello = () => {
			emit('sayHello');
		};
		return { sayHello };
	},
};
</script>

<style lang="scss" scoped></style>
