<script setup lang="ts">
defineProps<{
  buttonType: 'fill' | 'outlined';
  buttonLabel?: string;
  buttonSpan?: string;
  name: string;
  color?: string;
  size?: string;
}>()

const emit = defineEmits<{
  click: [];
}>()

function onClick() {
  emit('click');
}
</script>

<template>
  <button class="common-button" :class="buttonType === 'fill' ? 'fill' : 'outlined'" @click.stop="onClick">
    <Icon v-if="buttonType === 'outlined'" :name="name" :color="color" :size="size" />
    <p>{{ buttonLabel }}<span v-if="buttonSpan" class="buttonSpan">{{ buttonSpan }}</span></p>
    <Icon v-if="buttonType === 'fill'" :name="name" :color="color" :size="size" />
  </button>
</template>

<style lang="scss" scoped>
.common-button {
  width: fit-content;
  height: 45px;
  border-radius: 7px;
  font-size: var(--button-fs);
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 11px 20px;
}

.fill {
  background: var(--button-primary-color);
  color: var(--font-color-secondary);

  &:hover {
    background: var(--button-hover-color);
  }
}

.outlined {
  border: 1px solid rgba(5, 132, 254, 1);
  color: var(--font-color-primary);

  &:hover {
    border: 1px solid rgba(253, 131, 1, 1);
  }
}

.buttonSpan {
  color: var(--font-color-accent);
  margin-left: 4px;
}

@media (max-width: 768px) {
  .common-button {
    padding: 11px 10px;
    width: 100%;
    height: 40px;
    justify-content: center;
    align-items: center;
    gap: 6px;
  }
}
</style>