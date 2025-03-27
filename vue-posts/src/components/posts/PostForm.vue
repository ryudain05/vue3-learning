<template>
  <form>
    <div class="mb-3">
      <label for="title" class="form-label">제목</label>
      <input
        v-focus
        v-color="'blue'"
        :value="title"
        @input="$emit('update:title', $event.target.value)"
        type="text"
        class="form-control"
        id="title"
        placeholder="제목을 입력해주세요."
      />
    </div>
    <div class="mb-3">
      <label for="content" class="form-label">내용</label>
      <textarea
        :value="content"
        @input="$emit('update:content', $event.target.value)"
        class="form-control"
        id="content"
        placeholder="내용을 입력해주세요."
        rows="8"
      ></textarea>
    </div>
    <div class="d-flex gap-2 pt-4 me-2">
      <slot name="actions"> </slot>
    </div>
  </form>
</template>

<script setup>
const vFocus = {
  mounted: el => {
    el.focus();
  },
};
defineProps({ title: String, content: String });
defineEmits(['update:title', 'update:content']);
</script>

<style lang="scss" scoped></style>
