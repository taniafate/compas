<script setup lang="ts">

</script>

<template>
  <div class="authorization-content">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.authorization-content {
  width: 100%;
  max-inline-size: 1164px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
}
</style>