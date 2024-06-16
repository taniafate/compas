<script setup lang="ts">
type FormFeedbackType = 'incomplete' | 'success' | '';

const { device } = useMedia();

const autoNumber = ref('');
const region = ref('');
const license = ref('');
const isLoading = ref(false);
const formFeedback: Ref<FormFeedbackType> = ref('');
const isSuccess = ref(true);
const isError = ref(false);

const hasVideoModal = ref(false);

function openVideoModal() {
  hasVideoModal.value = true;
};

function closeVideoModal() {
  hasVideoModal.value = false;
};

const onSubmit = async () => {
  isError.value = false;
  isLoading.value = true;
  formFeedback.value = '';

  if (!autoNumber.value.trim() || !region.value.trim() || !license.value.trim()) {
    formFeedback.value = 'incomplete';
    isError.value = true;
    isLoading.value = false;
    return;
  }
  setTimeout(() => {
    isError.value = false;
    isSuccess.value = true;
    formFeedback.value = 'success';
    isLoading.value = false;
  }, 1000);

  autoNumber.value = '';
  region.value = '';
  license.value = '';
};

function closeModal() {
  return formFeedback.value = ''
}

const heroImageWidth = computed(() => {
  if(device.value === 'desktop') {
    return '532px'
  }
  if(device.value === 'tablet') {
    return '532px'
  }
  if(device.value === 'mobile') {
    return '330px'
  }
})
</script>

<template>
  <section class="hero-container">
    <CommonModal :formFeedback="formFeedback!" @click="closeModal"/>
    <CommonVideoModal v-if="hasVideoModal" @click="closeVideoModal" />
    <div class="hero-content">
      <h1 class="content-title">Проверьте штрафы и зарегестрируйтесь в 1 клик</h1>
      <MainCheckFinesForm
        v-model:auto-number="autoNumber"
        v-model:region="region"
        v-model:license="license"
        v-model:is-loading="isLoading"
        :is-error="isError"
        @submit="onSubmit"
      >
        <CommonButton
          name="ant-design:youtube-outlined"
          color="#1253A2"
          size="26px"
          button-label="О сервисе"
          button-span="(1 мин. 20 сек)"
          :button-type="'outlined'"
          @click="openVideoModal"
          type="button"
        />
      </MainCheckFinesForm>
      <p class="content-notification">
        Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки персональных данных и принимаете оферту
      </p>
    </div>

    <div class="hero-image">
      <img
        :width="heroImageWidth"
        src="/public/HeroImage.webp"
        alt="Изображение ноутбука"
      >
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero-container {
  display: flex;
  justify-content: space-between;
  margin-top: 79px;
  margin-bottom: 98px;
  gap: 20px;
  
}

.hero-content {
  width: 563px;
}

.content-title {
  font-size: var(--title-fs);
  font-weight: var(--bold-weight);
  margin-bottom: 25px;
}

.content-notification {
  font-size: 13px;
  color: rgba(143, 143, 143, 1);
  margin-top: 16px;
}

@media (max-width: 1280px) {
  .hero-container {
    margin-top: 24px;
    margin-bottom: 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  .content-title {
    text-align: center;
  }
}

@media (max-width: 768px) {
  .hero-content {
    width: 100%;
  }

  .content-notification {
    text-align: center;
  }
}
</style>