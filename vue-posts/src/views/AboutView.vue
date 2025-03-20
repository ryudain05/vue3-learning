<template>
  <div class="container py-4">
    About View
    <p>{{ $route.path }}</p>
    <button class="btn btn-outline-dark" @click="$router.push('/')">
      Home 으로 이동
    </button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
