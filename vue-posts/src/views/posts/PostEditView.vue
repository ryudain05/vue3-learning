<template>
  <AppLoading v-if="loading"></AppLoading>
  <AppError v-else-if="error" :message="error.message"></AppError>
  <div v-else>
    <h2>게시글 수정</h2>
    <hr class="my-4" />
    <AppError v-if="editError" :message="editError.message"></AppError>
    <PostForm
      @submit.prevent="edit"
      v-model:title="form.title"
      v-model:content="form.content"
    >
      <template #actions>
        <button
          type="button"
          class="btn btn-outline-danger"
          @click="goDetailPage"
        >
          취소
        </button>
        <button class="btn btn-primary" :disabled="editLoading">
          <template v-if="editLoading">
            <span
              class="spinner-grow spinner-grow-sm"
              aria-hidden="true"
              role="status"
            ></span>
            <span class="visually-hidden">Loading...</span>
          </template>
          <template v-else>수정</template>
        </button>
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import PostForm from '@/components/posts/PostForm.vue';
import { useAlert } from '@/composables/alert';
import { useAxios } from '../../hooks/useAxios';

const { vAlert, vSuccess } = useAlert();

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const goDetailPage = () => router.push({ name: 'PostDetail', params: { id } });

const { data: form, error, loading } = useAxios(`/posts/${id}`);

const {
  error: editError,
  loading: editLoading,
  execute,
} = useAxios(
  `/posts/${id}`,
  { method: 'patch' },
  {
    immediate: false,
    onSuccess: () => {
      vSuccess('수정이 완료되었습니다.');
      goDetailPage();
    },
    onError: err => {
      vAlert(err.message);
    },
  },
);

const edit = () => {
  execute({
    ...form.value,
  });
};
</script>

<style lang="scss" scoped></style>
