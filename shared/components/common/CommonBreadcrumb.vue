<script setup lang="ts">

</script>

<template>
  <div class="breadcrumb-container">
    <span>
      Главная страница
    </span>
    <Icon name="ic:baseline-circle" size="5px" />
    <span>
      Документы
    </span>
    <Icon name="ic:baseline-circle" size="5px" />
    <span class="breadcrumb-active-item">
      Лицензионный договор
    </span>
  </div>
</template>

<style lang="scss" scoped>
.breadcrumb-container {
  width: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: var(--font-color-primary);
}

.breadcrumb-active-item {
  color: rgba(143, 143, 143, 1);
}

@media (max-width: 768px) {
  .breadcrumb-container {
    gap: 5px;
    font-size: 11px;
  }
}
</style>