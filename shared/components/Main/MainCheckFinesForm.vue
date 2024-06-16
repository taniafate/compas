<script setup lang="ts">
defineProps<{
  isError?: boolean;
}>()

const emit = defineEmits<{
  submit: []
}>()

function onSubmit() {
  emit('submit')
}

const autoNumber = defineModel('autoNumber', { type: String, required: true });
const region = defineModel('region', { type: String, required: true });
const license = defineModel('license', { type: String, required: true });
const isLoading = defineModel('isLoading', { type: Boolean, required: true });
</script>

<template>
  <form class="check-fines-form" @submit.prevent="onSubmit">
    <label class="auto-number-field">
      Номер автомобиля
      <input
        v-model="autoNumber"
        type="text"
        class="check-fines-form-input"
        :class="isError === true ? 'error' : ''"
      />
    </label>
    <label class="region-field">
      Регион
      <input
        v-model="region"
        type="text"
        class="check-fines-form-input"
        :class="isError === true ? 'error' : ''"
      />
    </label>
    <label class="license-field">
      Свидетельство о регистрации ТС
      <input
        v-model="license"
        type="text"
        class="check-fines-form-input"
        :class="isError === true ? 'error' : ''"
      />
    </label>
    <div class="check-fines-form-buttons">
      <CommonButton
        name="iconamoon:arrow-right-1-light"
        color="rgba(255, 255, 255, 1);"
        size="26px"
        :button-label="isLoading ? 'Идёт проверка...' : 'Проверить штрафы'"
        :button-type="'fill'"
        type="submit"
      />
      <slot />
    </div>
  </form>
</template>

<style lang="scss" scoped>
.check-fines-form {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.auto-number-field {
  width: 320px;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  margin-right: 30px;
}

.region-field {
  width: 213px;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  line-height: 14.4px;
}

.license-field {
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  margin-top: 16px;
  margin-bottom: 15px;
}

.check-fines-form-input {
  box-sizing: border-box;
  font-size: 18px;
  height: 40px;
  border: 1px solid rgba(188, 188, 188, 1);
  border-radius: 5px;
  margin-top: 5px;
  padding: 4px 8px;

  &:focus {
    border: 1px solid rgba(5, 132, 254, 1);
  }
}

.error {
  border: 1px solid rgb(255, 54, 54);
}

.check-fines-form-buttons {
  display: flex;
  align-items: center;
  gap: 21px;
}

@media (max-width: 768px) {
  .check-fines-form {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 16px;
  }

  .auto-number-field {
    width: 100%;
  }

  .region-field {
    width: 100%;
    margin-top: 12px;
  }

  .license-field {
    width: 100%;
    margin-top: 12px;
  }

  .check-fines-form-input {
    font-size: 15px;
    height: 36px;
    margin-top: 2px;
    padding: 2px 4px;
  }

  .check-fines-form-buttons {
    gap: 14px;
  }

  .check-fines-form-buttons {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
</style>