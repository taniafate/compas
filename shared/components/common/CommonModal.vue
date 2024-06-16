<script setup lang="ts">
defineProps<{
  formFeedback: string,
}>()

const emit = defineEmits<{
  click: [];
}>()

function onClick() {
  emit('click');
}
</script>

<template>
  <div
    v-if="formFeedback === 'success'"
    class="success-feedback-modal"
  >
    <p class="success-feedback-modal-title">Форма отправлена!</p>
    <button class="success-feedback-modal-button" @click.stop="onClick">
      <Icon  name="mdi:close" color="rgba(0, 0, 0, 1)" size="14px"/>
    </button>
  </div>

  <div
    v-if="formFeedback === 'incomplete'"
    class="incomplete-feedback-modal"
  >
    <p class="incomplete-feedback-modal-title">Пожалуйста, заполните все поля.</p>
  </div>
</template>

<style lang="scss" scoped>
.success-feedback-modal {
  position: absolute;
  top: 90px;
  width: 563px;
  height: 45px;
  background: rgb(162, 255, 162);
  border-radius: 7px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
}

.success-feedback-modal-title {
  display: flex;
  justify-content: center;
  align-items: center;
}

.incomplete-feedback-modal {
  position: absolute;
  top: 90px;
  width: 563px;
  height: 45px;
  background: rgb(255, 194, 194);
  border-radius: 7px;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
}

.incomplete-feedback-modal-title {
  display: flex;
  justify-content: center;
  align-items: center;
}

.success-feedback-modal-button {
  align-self: self-start;
  margin-right: 5px;
}

@media (max-width: 768px) {
  .success-feedback-modal {
    width: 300px;
    top: 114px;
  }

  .incomplete-feedback-modal {
    width: 300px;
    top: 114px;
  }
}
</style>