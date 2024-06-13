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
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.success-feedback-modal-title {
  margin-left: 38%;
}

.incomplete-feedback-modal {
  position: absolute;
  top: 90px;
  width: 563px;
  height: 45px;
  background: rgb(255, 194, 194);
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.incomplete-feedback-modal-title {
  margin-left: 31%;
}

.success-feedback-modal-button {
  align-self: self-start;
  margin-right: 5px;
}

@media (max-width: 768px) {
  .success-feedback-modal {
    width: 375px;
  }

  .success-feedback-modal-title {
    margin-left: 30%;
  }

  .incomplete-feedback-modal {
    width: 375px;
  }

  .incomplete-feedback-modal-title {
    margin-left: 17%;
  }
}
</style>