<template>
  <div class="list-wrapper">
    <VList header="Список дел" />
  </div>
</template>

<script>
  import VList from '@/components/VList.vue';

  export default {
    components: {
      VList,
    },
  };
</script>

<style scoped>
  .list-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
</style>

<style>
  :root {
    --aquaDark: #8cd4cb;
    --yellowLight: #f9f3e5;
    --black: #33322e;
  }

  body {
    background-color: var(--aquaDark);
    font-family: 'Roboto', sans-serif;
  }
</style>
