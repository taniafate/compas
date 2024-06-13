<script setup lang="ts">
const description = ref('Основная информация о сервисе Компас');

useHead({
  title: 'Главная',
  meta: [
    { name: 'description', content: description }
  ],
});
</script>

<template>
  <main class="main">
    <MainHero />
    <MainAdvantages />
    <MainDocuments />
  </main>
</template>

<style lang="scss" scoped></style>