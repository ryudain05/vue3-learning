<template>
  <div class="app-alert">
    <TransitionGroup name="slide">
      <div
        v-for="({ message, type }, index) in alerts"
        :key="index"
        :class="typeStyle(type)"
        class="alert"
        role="alert"
      >
        {{ message }}
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { useAlert } from '@/composables/alert';

const { alerts } = useAlert();
const typeStyle = type => (type === 'error' ? 'alert-danger' : 'alert-primary');
</script>

<style scoped>
.app-alert {
  position: fixed;
  top: 10px;
  right: 10px;
  font-size: 25px;
  color: #0f3351;
  font-weight: bold;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}
.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
</style>
