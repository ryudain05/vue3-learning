<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />
    <form @submit.prevent="save">
      <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input
          v-model="form.title"
          type="text"
          class="form-control"
          id="title"
          placeholder="제목을 입력해주세요."
        />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">내용</label>
        <textarea
          v-model="form.content"
          class="form-control"
          id="content"
          placeholder="내용을 입력해주세요."
          rows="8"
        ></textarea>
      </div>
      <div class="pt-4">
        <button class="btn btn-outline-dark me-2" @click="goListPage">
          목록
        </button>
        <button class="btn btn-dark">저장</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
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
