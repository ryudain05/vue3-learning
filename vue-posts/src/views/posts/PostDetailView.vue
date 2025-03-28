<template>
  <AppLoading v-if="loading"></AppLoading>
  <AppError v-else-if="error" :message="error.message"></AppError>
  <div v-else>
    <h2>{{ post.title }}</h2>
    <h4>{{ post.content }}</h4>
    <p class="text-muted">
      {{ $dayjs(post.createdAt).format('YYYY년 MM월 DD일 HH:mm:ss') }}
    </p>
    <hr class="my-4" />
    <AppError v-if="removeError" :message="removeError.message"></AppError>
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">
          수정
        </button>
      </div>
      <div class="col-auto">
        <button
          class="btn btn-outline-danger"
          @click="remove"
          :disabled="removeLoading"
        >
          <template v-if="removeLoading">
            <span
              class="spinner-grow spinner-grow-sm"
              aria-hidden="true"
              role="status"
            ></span>
            <span class="visually-hidden">Loading...</span>
          </template>
          <template v-else> 삭제 </template>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { getPostById, deletePost } from '@/api/posts';
import { ref } from 'vue';
import { useAlert } from '@/composables/alert';

const { valert, vSuccess } = useAlert();

const props = defineProps({
  id: [String, Number],
});

const router = useRouter();
/**
 * ref
 * 장) 객체 할당 가능
 * 단) post.value.title, post.value.content
 * 장) 일관성 유지 -> page component 에서는 ref 를 권장
 *
 * reactive
 * 장) post.value.title, post.value.content
 * 단) 객체 할당 불가능
 */

// eslint-disable-next-line no-undef
const post = ref({});

const goListPage = () => {
  router.push({ name: 'PostList' });
};
const goEditPage = () => {
  router.push({ name: 'PostEdit', params: { id: props.id } });
};
const fetchPost = async () => {
  try {
    loading.value = true;
    const { data } = await getPostById(props.id);
    setPost(data);
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
};
const setPost = ({ title, content, createdAt }) => {
  post.value.title = title;
  post.value.content = content;
  post.value.createdAt = createdAt;
};

const removeError = ref(null);
const removeLoading = ref(null);

const remove = async () => {
  try {
    if (confirm('삭제 하시겠습니까?') === false) return;

    removeLoading.value = true;
    await deletePost(props.id);
    vSuccess('삭제가 완료되었습니다.');
    goListPage();
  } catch (err) {
    valert(err.message);
    removeError.value = err;
  } finally {
    removeLoading.value = false;
  }
};

const error = ref(null);
const loading = ref(false);

fetchPost();
</script>

<style lang="scss" scoped></style>
