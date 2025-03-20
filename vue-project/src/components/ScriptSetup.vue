<template>
	<div class="container py-4">
		{{ msg }}
		<br />
		{{ message }}
		<input type="text" v-model="message" />
		<button @click="sayHello">hello</button>
		<PostItem type="news" title="제목" contents="내용" :is-like="true" />
		<PostItem type="news" title="제목" contents="내용" :is-like="true" />
		<PostItem type="news" title="제목" contents="내용" :is-like="true" />
		<PostItem type="news" title="제목" contents="내용" :is-like="true" />
		<hr />
		<TemplateRefsChild ref="child"></TemplateRefsChild>
		<template v-if="child"> {{ child.message }}</template>
		<hr />
		<MyButton class="parent-button" />
	</div>
</template>

<script setup>
import PostItem from '@/components/setup/PostItem.vue';
import TemplateRefsChild from './setup/TemplateRefsChild.vue';
import MyButton from './setup/MyButton.vue';

import { ref } from 'vue';
import axios from 'axios';

const msg = 'Hello World';
const message = ref('');
const sayHello = () => {
	alert('Hello World');
};
const child = ref(null);
defineExpose({ msg, sayHello });
const response = await axios('https://dummy.restapiexample.com/api/v1/employees');
console.log('response',response)
</script>

<style lang="scss" scoped></style>
