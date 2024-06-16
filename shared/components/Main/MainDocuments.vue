<script setup lang="ts">

</script>

<template>
  <section class="documents-container">
    <h2 class="documents-title">
      Документы
    </h2>
    <MainSlider />
  </section>
</template>

<style lang="scss" scoped>
.documents-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 79px;
}

.documents-title {
  font-size: var(--subtitle-fs);
  font-weight: var(--bold-weight);
  text-align: center;
  margin-bottom: 40px;
}

.slider-list {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
  padding-bottom: 13px;
}

.list-item {
  width: 340px;
  height: 450px;
  border: 1px solid rgba(238, 239, 241, 1);
  border-radius: 10px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.item-link {
  height: 45px;
  background: var(--button-primary-color);
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: var(--button-hover-color);
  }
}

.content-title {
  font-size: 31px;
  font-weight: var(--bold-weight);
  line-height: 37.2px;
  color: var(--font-color-accent);
  margin-bottom: 10px;
}

.content-description {
  font-size: 18px;
  line-height: 21.6px;
}

@media (max-width: 768px) {
  .documents-container {
    padding-bottom: 24px;
  }

  .documents-title {
    margin-bottom: 10px;
  }
}
</style>