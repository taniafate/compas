<script setup lang="ts">
const description = ref('Регистрация');

useHead({
  title: 'Регистрация',
  meta: [
    { name: 'description', content: description }
  ],
});

definePageMeta({
  layout: 'authorization',
});
</script>

<template>
  <main class="main">
    <p>Регистрация</p>
    <NuxtLink to="/" class="auth-link">Вернуться на главную</NuxtLink>
  </main>
</template>

<style lang="scss" scoped>
.auth-link {
  padding: 9px 18px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: var(--button-primary-color);
  border-radius: 7px;
  margin-top: 5px;

  &:hover {
    background: var(--button-hover-color);
  }
}
</style>