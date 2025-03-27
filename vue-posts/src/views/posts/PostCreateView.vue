<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />
    <PostForm
      v-model:title="form.title"
      v-model:content="form.content"
      @submit.prevent="save"
    >
      <template #actions>
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
        <button class="btn btn-dark">저장</button>
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import PostForm from '@/components/posts/PostForm.vue';
import { createPost } from '@/api/posts';
import { ref } from 'vue';

const router = useRouter();
// eslint-disable-next-line no-undef
const form = ref({
  title: null,
  content: null,
});

const save = () => {
  try {
    createPost({
      ...form.value,
      createdAt: Date.now(),
    });
    goListPage();
  } catch (error) {
    console.log(error);
  }
};

const goListPage = () => {
  router.push({ name: 'PostList' });
};
</script>

<style lang="scss" scoped></style>
