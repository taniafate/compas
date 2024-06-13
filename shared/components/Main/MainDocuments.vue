<script setup lang="ts">
const documents = [
  {
    src: '/documents/contract',
    title: 'Лицензионный договор',
    description: 'Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке.'
  },
  {
    src: '/documents/policy',
    title: 'Политика обработки персональных данных',
    description: 'Радиус разброса ПГМ составляет до 3 метров и может регулироваться.'
  },
  {
    src: '/documents/payment',
    title: 'Информация об оплате',
    description: 'Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.'
  }
]
</script>

<template>
  <section class="documents-container">
    <h2 class="documents-title">
      Документы
    </h2>
    <div class="slider-list">
      <div class="list-item" v-for="{ src, title, description } in documents">
        <div class="item-content">
          <h4 class="content-title">{{ title }}</h4>
          <p class="content-description">{{ description }}</p>
        </div>
        <NuxtLink :to="src" class="item-link">Перейти</NuxtLink>
      </div>
      <div class="slider-buttons">
        <button class="slider-button-left">
          <img
            width="40px"
            height="80px"
            src="/public/Slider-Button-Left.svg"
            alt="Кнопка слайдера слева"
          >
        </button>
        <button class="slider-button-right">
          <img
            width="40px"
            height="80px"
            src="/public/Slider-Button-Right.svg"
            alt="Кнопка слайдера слева"
          >
        </button>
      </div>
    </div>
    <img
        width="22px"
        height="10px"
        src="/public/Slider-Indicator.svg"
        alt="Индикатор слайдера"
      >
  </section>
</template>

<style lang="scss" scoped>
.documents-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 79px;
}

.documents-title {
  font-size: var(--subtitle-fs);
  font-weight: var(--bold-weight);
  text-align: center;
  margin-bottom: 40px;
}

.slider-list {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
  padding-bottom: 13px;
}

.list-item {
  width: 340px;
  height: 450px;
  border: 1px solid rgba(238, 239, 241, 1);
  border-radius: 10px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.slider-buttons {
  position: absolute;
  display: flex;
  gap: 1164px - 80px;
}

.slider-button-left {

  &:hover {
    filter: drop-shadow(2px 0px 8px rgba(0, 0, 0, 0.15));
  }
}

.slider-button-right {

&:hover {
  filter: drop-shadow(-2px 0px 8px rgba(0, 0, 0, 0.15));
}
}

.item-link {
  height: 45px;
  background: var(--button-primary-color);
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: var(--button-hover-color);
  }
}

.content-title {
  font-size: 31px;
  font-weight: var(--bold-weight);
  line-height: 37.2px;
  color: var(--font-color-accent);
  margin-bottom: 10px;
}

.content-description {
  font-size: 18px;
  line-height: 21.6px;
}

@media (max-width: 768px) {
  .documents-container {
    padding-bottom: 24px;
  }

  .documents-title {
    margin-bottom: 30px;
  }

  .slider-list {
    gap: 12px;
  }
}
</style>