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
import { ref } from 'vue';
import { getPostById } from '@/api/posts';
import { updatePost } from '@/api/posts';
import { useAlert } from '@/composables/alert';

const { valert, vSuccess } = useAlert();

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const error = ref(null);
const loading = ref(false);
const goDetailPage = () => router.push({ name: 'PostDetail', params: { id } });
const form = ref({
  title: null,
  content: null,
});

const fetchPost = async () => {
  try {
    loading.value = true;
    const { data } = await getPostById(id);
    setForm(data);
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
};
const setForm = ({ title, content }) => {
  form.value.title = title;
  form.value.content = content;
};

const editError = ref(null);
const editLoading = ref(false);

const edit = async () => {
  try {
    editLoading.value = true;
    await updatePost(id, { ...form.value });
    vSuccess('수정이 완료되었습니다.');
    goDetailPage();
  } catch (err) {
    valert(err.message);
    editError.value = err;
  } finally {
    editLoading.value = false;
  }
};

fetchPost();
</script>

<style lang="scss" scoped></style>
