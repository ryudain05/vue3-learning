<template>
	<div>
		<form @submit.prevent="save(title, contents)">
			<input type="text" v-model.lazy="title" placeholder="Title" />
			<textarea v-model.lazy="contents" placeholder="contents"></textarea>
			<button>저장</button>
		</form>
	</div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
	setup() {
		const title = ref('');
		const contents = ref('');

		const save = (title, contents) => {
			console.log(`저장되었습니다. title: ${title}, contents: ${contents}`);
		};

		watchEffect(() => {
			console.log('watchEffect');
			save(title.value, contents.value);
		});
		return { title, contents, save };
	},
};
</script>

<style lang="scss" scoped></style>
