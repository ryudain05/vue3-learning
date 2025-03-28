<template>
  <AppLoading v-if="loading"></AppLoading>
  <AppError v-else-if="error" :message="error.message"></AppError>
  <div v-else>
    <h2>{{ post.title }}</h2>
    <p>id: {{ props.id }}, idOdd : {{ isOdd }}</p>
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
import { useAlert } from '@/composables/alert';
import { useAxios } from '@/hooks/useAxios';
import { computed, toRef } from 'vue';
import { useNumber } from '@/composables/number';

const { vAlert, vSuccess } = useAlert();
const props = defineProps({
  id: [String, Number],
});
const url = computed(() => `/posts/${props.id}`);
const router = useRouter();
const idRef = toRef(props, 'id');
const { isOdd } = useNumber(idRef);
const { data: post, error, loading } = useAxios(url);

const {
  error: removeError,
  loading: removeLoading,
  execute,
} = useAxios(
  `/posts/${props.id}`,
  { method: 'delete' },
  {
    immediate: false,
    onSuccess: () => {
      vSuccess('삭제가 완료되었습니다.');
      goListPage();
    },
    onError: err => {
      vAlert(err.message);
    },
  },
);

const goListPage = () => {
  router.push({ name: 'PostList' });
};
const goEditPage = () => {
  router.push({ name: 'PostEdit', params: { id: props.id } });
};

const remove = async () => {
  if (confirm('삭제 하시겠습니까?') === false) return;
  execute();
};
</script>

<style lang="scss" scoped></style>
