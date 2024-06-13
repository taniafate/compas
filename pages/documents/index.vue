<script setup lang="ts">
const description = ref('Информация о документах');

useHead({
  title: 'Документы',
  meta: [
    { name: 'description', content: description }
  ],
});
</script>

<template>
  <main class="main">
    <p>Документы</p>
  </main>
</template>

<style lang="scss" scoped></style>