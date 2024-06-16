<script setup lang="ts">
import { useMedia } from '~/composables/useMedia';

const emit = defineEmits<{
  click: [];
}>()

function onClick() {
  emit('click');
}

const { device } = useMedia();

const videoModalWidth = computed(() => {
  if(device.value === 'desktop') {
    return '960px'
  }
  if(device.value === 'tablet') {
    return '532px'
  }
  if(device.value === 'mobile') {
    return '320px'
  }
})
</script>

<template>
  <div
    class="video-modal-area"
  >
    <div class="video-modal-wrapper">
      <button class="video-modal-button" @click="onClick">
        <Icon  name="mdi:close" color="rgba(255, 255, 255, 1)" size="18px"/>
      </button>
      <NuxtLink
        class="video-modal-link"
        to="https://www.youtube.com/watch?v=_JEe1LViIlk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          :width="videoModalWidth"
          src="/public/ModalPreview.jpg"
          alt="Превью видео"
        >
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.video-modal-area {
  position: fixed;
  overflow:auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.79);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.video-modal-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.video-modal-button {
  align-self: flex-end;
}

.video-modal-link {
  display: block;
  cursor: pointer;
}
</style>