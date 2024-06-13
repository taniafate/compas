<script setup lang="ts">
const description = ref('Контакты компании');

useHead({
  title: 'Контакты',
  meta: [
    { name: 'description', content: description }
  ],
});
</script>

<template>
  <main class="main">
    <p>Наши контакты</p>
  </main>
</template>

<style scoped></style>