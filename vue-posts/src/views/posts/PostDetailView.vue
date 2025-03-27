<template>
  <div>
    <h2>{{ post.title }}</h2>
    <h4>{{ post.content }}</h4>
    <p class="text-muted">{{ post.createdAt }}</p>
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
        <button class="btn btn-outline-danger" @click="remove">삭제</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { getPostById, deletePost } from '@/api/posts';
import { ref } from 'vue';

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
    const { data } = await getPostById(props.id);
    setPost(data);
  } catch (error) {
    console.log(error);
  }
};
const setPost = ({ title, content, createdAt }) => {
  post.value.title = title;
  post.value.content = content;
  post.value.createdAt = createdAt;
};

const remove = async () => {
  try {
    if (confirm('삭제 하시겠습니까?') === false) return;
    await deletePost(props.id);
    goListPage();
  } catch (error) {
    console.log(error);
  }
};
fetchPost();
</script>

<style lang="scss" scoped></style>
