<script setup lang="ts">
const advantages = [
  {
    src: '/Item1.svg',
    title: 'Неограниченый автопарк',
    description: 'Можно добавить неограниченное кол-во машин и водителей'
  },
  {
    src: '/Item2.svg',
    title: 'Сокращение затрат до 50%',
    description: 'Максимально быстро узнаете о штрафах в автоматическом режиме, тем самым у вас есть время оплатить по скидке'
  },
  {
    src: '/Item3.svg',
    title: 'Безопасность',
    description: 'Данные передаются в зашифрованном виде, они доступны только получателю'
  },
  {
    src: '/Item4.svg',
    title: 'Уведомление о погашении',
    description: 'Мы оповестим вас о том, что штраф был погашен и соответствующая запись создана в ГИС ГМП'
  },
  {
    src: '/Item5.svg',
    title: 'Квитанция об оплате',
    description: 'После совершения оплаты банковской картой на Вашу электронную почту придет квитанция об успешной оплате.'
  },
  {
    src: '/Item6.svg',
    title: 'Все история сохраняется по каждой машине',
    description: 'Вся история штрафов сохраняется по машине и водителю, позволяет анализировать статистику по штрафам'
  }
]
</script>

<template>
  <section class="advantages-container">
    <h2 class="advantages-title">
      Плюсы использования сервиса «Компас» для анализа штрафов
    </h2>
    <div class="advantages-list">
      <div class="advantages-item" v-for="{ src, title, description } in advantages" :key="title">
        <img :src="src" width="60" height="60">
        <div class="item-content">
          <h4 class="content-title">{{ title }}</h4>
          <p class="content-description">{{ description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.advantages-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 85px;
}

.advantages-title {
  font-size: var(--subtitle-fs);
  font-weight: var(--bold-weight);
  text-align: center;
  margin-bottom: 33px;
}

.advantages-list {
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
}

.advantages-item {
  width: 362px;
  height: 151px;
  background: rgba(251, 252, 253, 1);
  border: 1px solid rgba(238, 239, 241, 1);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.item-content {
  width: 248px;
}

.content-title {
  font-size: 18px;
  font-weight: var(--bold-weight);
  color: var(--font-color-accent);
  margin-bottom: 10px;
}

.content-description {
  line-height: 18px;
}

@media (max-width: 768px) {
  .advantages-container {
    margin-bottom: 40px;
  }
  .advantages-list {
    gap: 12px;
  }
}
</style>