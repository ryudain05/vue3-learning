<template>
	<main>
		<div class="container py-4">
			<PostCreate @create-post="createPost" />
			<hr class="my-4" />
			<div class="row g-3">
				<div v-for="post in posts" :key="post.id" class="col col-4">
					<AppCard
						:title="post.title"
						:contents="post.contents"
						:is-like="post.isLike"
						:type="post.type"
						@toggle-like="post.isLike = !post.isLike"
					/>
				</div>
			</div>
			<hr class="my-4" />
			<LabelInput
				v-model="username"
				label="이름"
				class="parent-class"
				style="color: red"
				id="parent-id"
			/>
		</div>
	</main>
</template>

<script>
import AppCard from './AppCard.vue';
import PostCreate from './PostCreate.vue';
import LabelInput from './LabelInput.vue';
import { reactive, ref } from 'vue';

export default {
	components: { AppCard, PostCreate, LabelInput },
	setup() {
		const post = reactive({
			title: '제목2',
			contents: '내용2',
		});
		const posts = reactive([
			{ id: 1, title: '제목1', contents: '제목1', isLike: true, type: 'news' },
			{ id: 2, title: '제목2', contents: '제목2', isLike: true, type: 'news' },
			{ id: 3, title: '제목3', contents: '제목3', isLike: true, type: 'news' },
			{
				id: 4,
				title: '제목4',
				contents: '제목4',
				isLike: false,
				type: 'notice',
			},
			{
				id: 5,
				title: '제목5',
				contents: '제목5',
				isLike: false,
				type: 'notice',
			},
		]);

		const createPost = newPost => {
			console.log('createPost', newPost);
			posts.push(newPost);
		};

		const username = ref('');
		const firstname = ref('');
		const lastname = ref('');
		return { post, posts, createPost, username, firstname, lastname };
	},
};
</script>

<style lang="scss" scoped></style>
