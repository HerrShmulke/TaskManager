<template>
  <div class="list">
    <div class="list__header">
      <h2 class="list__header-text">{{ header }}</h2>
    </div>
    <div class="list__body">
      <VListCard>Foo bar</VListCard>
      <VListCard>Foo bar</VListCard>
    </div>
    <div class="list__footer">
      <VAddButton class="list__add-card">Добавить новую карточку</VAddButton>
    </div>
  </div>
</template>

<script>
  import VListCard from '@/components/VListCard.vue';
  import VAddButton from '@/components/VAddButton.vue';

  export default {
    props: {
      header: String,
    },

    components: {
      VListCard,
      VAddButton,
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

  .list__body {
    padding: 16px 25px 34px;
    display: grid;
    grid-row-gap: 15px;
  }

  .list__footer {
    font-weight: 500;
    font-size: 14px;
    line-height: 130%;
    padding: 16px 25px 25px;
  }

  .list__add-card {
    font-size: 15px;
  }
</style>
