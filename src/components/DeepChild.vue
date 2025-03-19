<template>
	<div class="card">
		<div class="card-header">Deep Child Component</div>
		<div class="card-body">
			<p>staticMessage: {{ staticMessage }}</p>
			<p>count: {{ count }}</p>
			<p>message: {{ message }}</p>
		</div>
	</div>
</template>

<script>
import { inject } from 'vue';

export default {
	setup() {
		const staticMessage = inject('static-message', 'default message');
		const count = inject('count');
		const { message, updateMessage } = inject('message');
		updateMessage('!!');
		return { staticMessage, count, message };
	},
};
</script>

<style lang="scss" scoped></style>
