<template>
	<div>
		<div
			:class="[
				isActive ? 'active' : 'class',
				activeClass,
				errorClass,
				classObject,
			]"
		>
			텍스트 입니다.
		</div>
		<button v-on:click="toggle">toggle</button>
		<button v-on:click="hasError = !hasError">toggleError</button>
	</div>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
	setup() {
		const isActive = ref(true);
		const hasError = ref(false);

		// const classObject = reactive({
		// 	active: true,
		// 	'text-danger': true,
		// });

		const classObject = computed(() => {
			return {
				active: true && true,
				'text-danger': true && true,
				'text-blue': true,
			};
		});

		const activeClass = ref('active');
		const errorClass = ref('error');

		const toggle = () => {
			isActive.value = !isActive.value;
		};

		return { isActive, hasError, toggle, classObject, activeClass, errorClass };
	},
};
</script>

<style scoped>
.active {
	font-weight: bold;
}

.text-danger {
	color: cornflowerblue;
}
</style>
