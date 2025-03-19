<template>
	<div class="container py-4">
		<div class="card">
			<div class="card-header">ProvideInject Component</div>
			<div class="card-body">
				<button @click="count++">Click</button>
				<p>appMessage: {{ appMessage }}</p>
				<Child></Child>
			</div>
		</div>
	</div>
</template>

<script>
import Child from './Child.vue';
import { ref, provide, readonly, inject } from 'vue';
export default {
	components: { Child },
	setup() {
		const staticMessage = 'static message';
		const message = ref('message');
		const count = ref(10);
		const updateMessage = appendMessage => {
			message.value = message.value + appendMessage;
		};
		provide('static-message', staticMessage);
		provide('message', { message: readonly(message), updateMessage });
		provide('count', count);

		const appMessage = inject('app-message');
		const msg = inject('msg');
		console.log('this.msg', msg);

		return { count, appMessage };
	},
	mounted() {
		console.log('this.msg', this.msg);
	},
};
</script>

<style lang="scss" scoped></style>
