<script setup lang="ts">
const description = ref('Информация об оплате');

useHead({
  title: 'Информация об оплате',
  meta: [
    { name: 'description', content: description }
  ],
});
</script>

<template>
  <main class="main">
    <p>Информация об оплате</p>
  </main>
</template>

<style lang="scss" scoped></style>