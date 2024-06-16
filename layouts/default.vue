<script setup lang="ts">

</script>

<template>
  <CommonHeader />
  <div class="default-content">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.default-content {
  width: 100%;
  max-inline-size: 1164px;
  margin-inline: auto;
  padding: 0 10px;
}
</style>