<template>
	<label class="form-label" id="child-id">
		{{ label }}
	</label>
	<input class="form-control" v-bind="$attrs" v-model="value" type="text" />
</template>

<script>
import { computed } from 'vue';

export default {
	props: ['modelValue', 'label'],
	emits: ['update:modelValue'],
	setup(props, { emit }) {
		const value = computed({
			get() {
				return props.modelValue;
			},
			set(value) {
				emit('update:modelValue', value);
			},
		});
		return { value };
	},
};
</script>

<style lang="scss" scoped></style>
