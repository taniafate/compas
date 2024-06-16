<script setup lang="ts">
const { device } = useMedia();
</script>

<template>
  <header class="header-container">
    <div class="header">
      <div class="header-navigation">
        <NuxtLink to="/" active-class="active">
          <img
            :width="device === 'mobile' ? '62px' : '119px'"
            :height="device === 'mobile' ? '14px' : '26px'"
            src="/public/AppLogo.svg"
            alt="Логотип сайта"
          >
        </NuxtLink>
        <NuxtLink to="/tariffs" class="header-link" active-class="active">Тарифы</NuxtLink>
        <NuxtLink to="/contacts" class="header-link" active-class="active">Контакты</NuxtLink>
      </div>
      
      <div class="header-controls">
        <span class="controls-contacts">+7 495 118-44-22</span>
        <NuxtLink to="/sign-in" class="header-link">
          Вход
        </NuxtLink>
        <NuxtLink to="/sign-up" class="header-link controls-fill">
          Регистрация
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header-container {
  width: 100%;
  height: 60px;
  background: linear-gradient(90deg, #000000 30%, #1C2734 73%);
  color: var(--font-color-secondary);
  font-size: var(--link-fs);
}

.header {
  height: 100%;
  max-inline-size: 1164px;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.header-link:hover {
  color: var(--button-hover-color);
}

.header-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}

.header-controls {
  display: flex;
  gap: 30px;
}

.controls-contacts {
  font-weight: 700;
  display: flex;
  align-items: center;
}

.controls-fill {
  padding: 9px 18px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: var(--button-primary-color);
  border-radius: 7px;

  &:hover {
    color: var(--font-color-secondary);
    background: var(--button-hover-color);
  }
}

.active {
  color: var(--button-hover-color);
  text-decoration: underline var(--button-hover-color);
}

@media (max-width: 768px) {
  .header {
    max-inline-size: 768px;
  }

  .header-navigation {
    gap: 16px;
  }

  .header-controls {
    gap: 16px;
  }

  .controls-contacts {
    display: none;
  }

  .controls-fill {
    border-radius: 4px;
    padding: 8px 4px;
  }
}
</style>