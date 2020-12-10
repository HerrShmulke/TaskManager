<template>
  <h1>
    TaskManager
  </h1>
  <div class="list-wrapper">
    <VList
      v-for="list in lists"
      :key="list.id"
      :title="list.title"
      :id="list.id"
      :cards="list.cards"
      @delete-card="deleteCard"
      @add-card="addCard"
    />
    <VAddButton class="add-column">Добавить еще одну колонку</VAddButton>
  </div>
</template>

<script>
  import VList from '@/components/VList.vue';
  import VAddButton from '@/components/VAddButton.vue';

  export default {
    data: () => ({
      lists: [
        {
          id: 0,
          title: 'Список дел',
          cards: [
            {
              id: 0,
              value: 'Foo',
            },
            {
              id: 1,
              value: 'Bar',
            },
          ],
        },
      ],
      lastId: 2,
    }),

    methods: {
      deleteCard({ listId, cardId }) {
        const cardIndex = this.lists[listId].cards.findIndex(
          (v) => v.id == cardId
        );
        this.lists[listId].cards.splice(cardIndex, 1);
      },

      addCard({ listId, value }) {
        this.lists[listId].cards.push({ id: this.lastId++, value: value });
      },
    },

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
    align-items: flex-start;

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
    --peachDark: #f6a89e;
  }

  body {
    background-color: var(--aquaDark);
    font-family: 'Roboto', sans-serif;
    padding: 50px 30px;
    color: var(--black);
  }
</style>
