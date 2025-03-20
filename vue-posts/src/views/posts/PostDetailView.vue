<template>
  <div>
    <h2>{{ form.title }}</h2>
    <h2>{{ form.content }}</h2>
    <p class="text-muted">{{ form.createdAt }}</p>
    <hr class="my-4" />
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
        <button class="btn btn-outline-danger">삭제</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { getPostById } from '@/api/posts';
import { ref } from 'vue';

const props = defineProps({
  id: Number,
});

const router = useRouter();
/**
 * ref
 * 장) 객체 할당 가능
 * 단) form.value.title, form.value.content
 * 장) 일관성 유지 -> page component 에서는 ref 를 권장
 *
 * reactive
 * 장) form.value.title, form.value.content
 * 단) 객체 할당 불가능
 */

// eslint-disable-next-line no-undef
const form = ref({});

const goListPage = () => {
  router.push({ name: 'PostList' });
};
const goEditPage = () => {
  router.push({ name: 'PostEdit', params: { id: props.id } });
};
const featchPost = () => {
  const data = getPostById(props.id);
  form.value = { ...data };
};
featchPost();
</script>

<style lang="scss" scoped></style>
