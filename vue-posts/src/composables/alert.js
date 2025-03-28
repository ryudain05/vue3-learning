import { ref } from 'vue';

export function useAlert() {
  const alerts = ref([]);

  const vAlert = (message, type) => {
    alerts.value.push({ message, type });
    setTimeout(() => {
      alerts.value.shift();
    }, 2000);
  };

  const vSuccess = message => vAlert(message, 'success');
  return {
    alerts,
    vSuccess,
  };
}
