<template>
  <h1>
    TaskManager
  </h1>
  <div class="list-wrapper">
    <VList header="Список дел" />
    <VAddButton class="add-column">Добавить еще одну колонку</VAddButton>
  </div>
</template>

<script>
  import VList from '@/components/VList.vue';
  import VAddButton from '@/components/VAddButton.vue';

  export default {
    components: {
      VList,
      VAddButton,
    },
  };
</script>

<style scoped>
  .list-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: start;

    gap: 40px;
  }

  .add-column {
    border: solid 4px var(--black);
    background-color: var(--yellowLight);
    box-shadow: 6px 6px 0px var(--black);
    padding: 10px;
    border-radius: 20px;
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
    padding: 50px 30px;
    color: var(--black);
  }
</style>
