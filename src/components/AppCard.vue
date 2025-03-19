<template>
	<div class="card">
		<div class="card-body">
			<!-- type : news, notice  -->
			<span class="badge text-bg-secondary">{{
				type === 'news' ? '뉴스' : '공지사항'
			}}</span>
			<h5 class="card-title light-blue mt-2">{{ title }}</h5>
			<p class="card-text">
				{{ contents }}
			</p>
			<a href="#" v-if="isLike" class="btn btn-danger">좋아요</a>
			<a href="#" v-else class="btn btn-outline-danger">좋아요</a>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		type: {
			type: String,
			default: 'news',
		},
		title: {
			type: String,
			required: true,
		},
		contents: {
			type: String,
			required: true,
		},
		isLike: {
			type: Boolean,
			default: false,
		},
	},

	setup() {
		return {};
	},
};
</script>

<style scoped></style>
