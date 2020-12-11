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
      @save="save"
    />

    <div class="add-column">
      <VAddButton v-show="!isAddColumn" @click="showAddColumn()" @keypress.enter.space="showAddColumn()">
        Добавить еще одну колонку
      </VAddButton>

      <!-- Add-clumn -->
      <div class="add-column__fields" v-show="isAddColumn" v-click-outside="mouseCancelAddColumn">
        <input
          class="add-column__input"
          placeholder="Введите название колонки"
          maxlength="60"
          ref="columnField"
          tabindex="0"
          v-model="columnTitle"
          @keypress.enter="addColumn()"
        />

        <div class="add-column__variants">
          <VAddButton class="add-column__add-button" @click="addColumn()" @keypress.space.enter="addColumn()">
            Добавить колонку
          </VAddButton>

          <!-- Cancel button -->
          <img
            class="add-column__cancel"
            role="button"
            tabindex="0"
            src="@/assets/delete.svg"
            alt="Отменить добавление колонки"
            @keypress.enter.space="cancelAddColumn()"
            @click="cancelAddColumn()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VList from '@/components/VList.vue';
  import VAddButton from '@/components/VAddButton.vue';

  export default {
    data: () => ({
      lastCardId: 2,
      lastColumnId: 1,
      isAddColumn: false,
      block: true,
      columnTitle: '',

      lists: [],
    }),

    methods: {
      showAddColumn() {
        this.isAddColumn = true;
        setTimeout(() => {
          this.$refs.columnField.focus();
          this.block = false;
        });
      },

      mouseCancelAddColumn() {
        if (this.isAddColumn && !this.block && document.activeElement.type != 'text') {
          this.addColumn();

          this.block = true;
          this.isAddColumn = false;
          this.columnTitle = '';
        }

        this.save();
      },

      cancelAddColumn() {
        if (this.isAddCard && !this.block && document.activeElement.type != 'text') {
          this.columnTitle = '';
          this.block = true;
          this.isAddColumn = false;
        }
      },

      addColumn() {
        if (this.columnTitle !== '') {
          this.lists.push({ id: this.lastColumnId++, title: this.columnTitle, cards: [] });
          this.columnTitle = '';
        }

        setTimeout(() => this.$refs.columnField.focus());

        this.save();
      },

      deleteCard({ listId, cardId }) {
        const cardIndex = this.lists[listId].cards.findIndex((v) => v.id == cardId);
        this.lists[listId].cards.splice(cardIndex, 1);

        this.save();
      },

      addCard({ listId, value }) {
        this.lists[listId].cards.push({ id: this.lastCardId++, value: value });
        this.save();
      },

      save() {
        localStorage.setItem('lists', JSON.stringify(this.lists));
        localStorage.setItem('lastCardId', JSON.stringify(this.lastCardId));
        localStorage.setItem('lastColumnId', JSON.stringify(this.lastColumnId));
      },
    },

    mounted() {
      this.lists = JSON.parse(localStorage.getItem('lists')) || [];
      this.lastCardId = JSON.parse(localStorage.getItem('lastCardId')) || 0;
      this.lastColumnId = JSON.parse(localStorage.getItem('lastColumnId')) || 0;
    },

    components: {
      VList,
      VAddButton,
    },
  };
</script>

<style scoped>
  .add-column__add-button {
    background: var(--peachDark);
    padding: 4px 7px;

    border-radius: 10px;
    border: 2px solid var(--black);
    box-shadow: 2px 2px 0px var(--black);
    font-size: 14px;
  }

  .add-column__variants {
    display: grid;
    grid-template-columns: 1fr 30px;
    column-gap: 10px;
    align-items: center;
  }

  .add-column__cancel {
    cursor: pointer;
  }

  .add-column__input {
    border-radius: 10px;
    border: 2px solid var(--black);
    padding: 7px 10px;
    font-size: 18px;
    font-family: inherit;
    width: calc(100% - 26px);
    box-shadow: 2px 2px 0px var(--black);
    margin-bottom: 15px;
  }

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
    min-width: 307px;
    max-width: 307px;
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
    overflow-x: auto;
  }
</style>
