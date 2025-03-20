<template>
	<div class="container py-4"></div>
	<input ref="input" type="text" />
	<p>{{ input }}</p>
	<p v-if="input">
		{{ input.value }} , {{ $refs.input.value }},
		{{ $refs.input.value === input.value }}
	</p>
	<hr />
	<ul>
		<!--		<li v-for="fruits in fruits" :key="fruits" ref="itemRefs">{{ fruits }}</li>-->
		<li
			v-for="fruits in fruits"
			:key="fruits"
			:ref="el => itemRefs.push(el.textContent)"
		>
			{{ fruits }}
		</li>
	</ul>
	<hr />
	<TemplateRefsChild ref="child" />
</template>

<script>
import { onMounted, ref } from 'vue';
import TemplateRefsChild from './TemplateRefsChild.vue';
export default {
	components: { TemplateRefsChild },
	setup() {
		const input = ref(null);
		console.log('setup: ', input.value);

		onMounted(() => {
			input.value.value = 'hello world';
			console.log('onMounted: ', input.value);

			// itemRefs.value.forEach(item => console.log('items: ', item.textContent));
			itemRefs.value.forEach(item => console.log('items: ', item));
			console.log('child.message: ', child.value.message);
			child.value.sayHello();
		});

		const fruits = ref(['사과', '딸기', '포도']);
		const itemRefs = ref([]);
		const child = ref(null);
		return { input, fruits, itemRefs, child };
	},
};
</script>

<style lang="scss" scoped></style>
