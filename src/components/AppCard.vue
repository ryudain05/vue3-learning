<template>
	<div class="card">
		<div v-if="$slots.header" class="card-header">
			<slot name="header" :header-message="headerMessage"> </slot>
		</div>
		<!--   {{$slots}}  -->
		<div class="card-body">
			<slot
				v-if="$slots.default"
				:child-message="childMessage"
				:hello-message="helloMessage"
			>
				#Body
			</slot>
		</div>
		<div v-if="hasFooter" class="card-footer text-muted">
			<slot name="footer" :footer-message="footerMessage"></slot>
		</div>
	</div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
	setup(props, { slots }) {
		const childMessage = ref('자식 안녕하세요');
		const helloMessage = ref('안녕 메시지');
		const headerMessage = ref('헤더입니당');
		const footerMessage = ref('푸터입니당');
		// context.slots
		const hasFooter = computed(() => !!slots.footer);
		return {
			childMessage,
			helloMessage,
			headerMessage,
			footerMessage,
			hasFooter,
		};
	},
};
</script>

<style lang="scss" scoped></style>
