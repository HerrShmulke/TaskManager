<template>
  <div role="button" tabindex="0" class="add-button">
    <slot />
    <img src="@/assets/add.svg" alt="Добавить новую карточку" />
  </div>
</template>

<style scoped>
  .add-button {
    display: grid;
    font-size: 20px;
    grid-template-columns: 1fr 30px;
    column-gap: 10px;
    align-items: center;
    cursor: pointer;
  }
</style>
