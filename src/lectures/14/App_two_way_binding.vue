<template>
	<div>
		<h2>input Value</h2>
		<input type="text" v-model="inputValue" />
		<!--		<input-->
		<!--			type="text"-->
		<!--			:value="inputValue"-->
		<!--			@input="event => (inputValue = event.target.value)"-->
		<!--		/>-->
		<div>{{ inputValue }}</div>
		<h2>textarea value</h2>
		<textarea v-model="textareaValue"></textarea>
		<!--		<textarea-->
		<!--			:value="textareaValue"-->
		<!--			@input="event => (textareaValue = event.target.value)"-->
		<!--		></textarea>-->
		<div>
			{{ textareaValue }}
		</div>

		<h2>checkbox value</h2>
		<label for="checkbox"> {{ checkboxValue }}</label>
		<!--		<input-->
		<!--			type="checkbox"-->
		<!--			id="checkbox"-->
		<!--			:checked="checkboxValue"-->
		<!--			@change="event => (checkboxValue = event.target.checked)"-->
		<!--		/>-->

		<input type="checkbox" id="checkbox" v-model="checkboxValue" />

		<h2>radio value</h2>
		<label>
			<!--			<input-->
			<!--				type="radio"-->
			<!--				name="type"-->
			<!--				value="O"-->
			<!--				:checked="radioValue === 'O'"-->
			<!--				@click="event => (radioValue = event.target.value)"-->
			<!--			/>-->
			<input type="radio" name="type" value="O" v-model="radioValue" />
			O형
		</label>
		<label>
			<!--			<input-->
			<!--				type="radio"-->
			<!--				name="type"-->
			<!--				value="A"-->
			<!--				:checked="radioValue === 'A'"-->
			<!--				@click="event => (radioValue = event.target.value)"-->
			<!--			/>-->
			<input type="radio" name="type" value="A" v-model="radioValue" />
			A형
		</label>
		<p>{{ radioValue }}</p>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const inputValue = ref('');
		const textareaValue = ref('');
		const checkboxValue = ref(true);
		const radioValue = ref('O');
		return { inputValue, textareaValue, checkboxValue, radioValue };
	},
};
</script>

<style lang="scss" scoped></style>
