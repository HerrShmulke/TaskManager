<template>
  <div class="list">
    <div class="list__header">
      <h2 class="list__header-text">{{ header }}</h2>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      header: String,
    },
  };
</script>

<style scoped>
  .list {
    border-radius: 24px;
    border: solid 4px var(--black);
    background-color: var(--yellowLight);
    box-shadow: 12px 12px 0px var(--black);
    width: 280px;
    min-height: 300px;
  }

  .list__header {
    border-bottom: 4px solid var(--black);
  }

  .list__header-text {
    font-weight: bold;
    font-size: 30px;
    line-height: 120%;
    color: var(--black);
    margin: 0 0 0 25px;
    padding: 16px 0 10px;
  }
</style>
