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
  },
  {
    src: '/documents/policy',
    title: 'Информация о сервисе',
    description: 'Радиус разброса ПГМ составляет до 3 метров и может регулироваться.'
  },
  {
    src: '/documents/payment',
    title: 'Документы для пользователей',
    description: 'Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.'
  }
];

</script>
<template>
  <div class="slider-list">
    <Swiper
      :width="1164"
      style="box-sizing: border-box; padding: 25px;"
      :modules="[SwiperEffectCreative, SwiperPagination, SwiperNavigation]"
      :slides-per-view="3"
      :centered-slides="true"
      :loop="true"
      :effect="'slides'"
      :slide-to-clicked-slide="true"
      :space-between="35"
      :navigation="true"
      :pagination="true"
      :wrapper-class="'swiper-wrapper'"
    >
      <SwiperSlide v-for="{ src, title, description } in documents" :key="title"
        class="swiper-slide"
        style="width: 340px; height: 450px; margin-right: 35px; padding: 25px;"
      >
        <div class="slide-content">
          <h4 class="content-title">{{ title }}</h4>
          <p class="content-description">{{ description }}</p>
        </div>
        <NuxtLink :to="src" class="slide-link">Перейти</NuxtLink>
      </SwiperSlide>
    </Swiper>  
  </div>
</template>

<style lang="scss" scoped>
.swiper-wrapper {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
  padding-bottom: 13px;
}

.swiper-slide {
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

.slide-link {
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

  .slider-wrapper {
    gap: 12px;
  }

  .content-title {
    font-size: 22px;
    line-height: 28px;
  }

  .content-description {
    font-size: 15px;
    line-height: 20px;
  }
}
</style>