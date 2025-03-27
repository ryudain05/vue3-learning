<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4" />
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
        <button class="btn btn-dark">수정</button>
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

const goDetailPage = () => router.push({ name: 'PostDetail', params: { id } });
const form = ref({
  title: null,
  content: null,
});

const fetchPost = async () => {
  try {
    const { data } = await getPostById(id);
    setForm(data);
  } catch (error) {
    console.log(error);
    valert(error.message);
  }
};
const setForm = ({ title, content }) => {
  form.value.title = title;
  form.value.content = content;
};

const edit = async () => {
  try {
    await updatePost(id, { ...form.value });
    vSuccess('수정이 완료되었습니다.');
    goDetailPage();
  } catch (error) {
    console.log(error);
    valert(error.message);
  }
};
fetchPost();
</script>

<style lang="scss" scoped></style>
