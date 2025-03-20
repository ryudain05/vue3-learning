<template>
	<div>
		<button class="fancy-btn">
			<slot name="body" :fancy-message="fancyMessage"> Default Click!!</slot>
		</button>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const fancyMessage = ref('fency Message');
		return { fancyMessage };
	},
};
</script>

<style scoped>
.fancy-btn {
	color: #fff;
	background: linear-gradient(315deg, #42d392 25%, #647eff);
	border: none;
	padding: 5px 12px;
	margin: 5px;
	border-radius: 8px;
	cursor: pointer;
}
</style>
