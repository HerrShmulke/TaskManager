<template>
  <div class="list-card">
    <div class="list-card__content">
      <slot />
    </div>
    <img
      class="list-card__button"
      role="button"
      tabindex="1"
      src="@/assets/delete.svg"
      alt="Удалить карточку"
    />
  </div>
</template>

<style scoped>
  .list-card {
    font-weight: 500;
    font-size: 20px;
    line-height: 130%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  .list-card__content {
    margin-right: 10px;
  }

  .list-card__button {
    cursor: pointer;
  }
</style>
