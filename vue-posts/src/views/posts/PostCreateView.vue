<template>
  <div>
    <h2 @click="visibleForm = !visibleForm">게시글 등록</h2>
    <hr class="my-4" />
    <AppError v-if="error" :message="error.message"></AppError>
    <PostForm
      v-if="visibleForm"
      v-model:title="form.title"
      v-model:content="form.content"
      @submit.prevent="save"
    >
      <template #actions>
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
        <button class="btn btn-primary" :disabled="loading">
          <template v-if="loading">
            <span
              class="spinner-grow spinner-grow-sm"
              aria-hidden="true"
              role="status"
            ></span>
            <span class="visually-hidden">Loading...</span>
          </template>
          <template v-else>저장</template>
        </button>
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import PostForm from '@/components/posts/PostForm.vue';
import { ref } from 'vue';
import { useAlert } from '@/composables/alert';
import { useAxios } from '../../hooks/useAxios';

const { vAlert, vSuccess } = useAlert();

const router = useRouter();
// eslint-disable-next-line no-undef
const form = ref({
  title: null,
  content: null,
});
const { error, loading, execute } = useAxios(
  '/posts',
  {
    method: 'post',
  },
  {
    immediate: false,
    onSuccess: () => {
      vSuccess('등록이 완료되었습니다.');
      goListPage();
    },
    onError: err => {
      vAlert(err.message);
      error.value = err;
    },
  },
);
const save = async () => {
  execute({ ...form.value, createdAt: Date.now() });
};

// const save = async () => {
//   try {
//     loading.value = true;
//     await createPost({
//       ...form.value,
//       createdAt: Date.now(),
//     });
//     goListPage();
//     vSuccess('등록이 완료되었습니다.');
//     // goListPage();
//   } catch (err) {
//     vAlert(err.message);
//     error.value = err;
//   } finally {
//     loading.value = false;
//   }
// };

const goListPage = () => {
  router.push({ name: 'PostList' });
};

const visibleForm = ref(true);
</script>

<style lang="scss" scoped></style>
