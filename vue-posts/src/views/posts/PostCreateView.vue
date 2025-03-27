<template>
  <div>
    <h2 @click="visibleForm = !visibleForm">게시글 등록</h2>
    <hr class="my-4" />
    <PostForm
      v-if="visibleForm"
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
import { useAlert } from '@/composables/alert';

const { valert, vSuccess } = useAlert();

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
    vSuccess('등록이 완료되었습니다.');
    // goListPage();
  } catch (error) {
    valert(error.message);
  }
};

const goListPage = () => {
  router.push({ name: 'PostList' });
};

const visibleForm = ref(true);
</script>

<style lang="scss" scoped></style>
