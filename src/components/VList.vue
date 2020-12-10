<template>
  <div class="list">
    <div class="list__header">
      <h2 class="list__header-text">{{ title }}</h2>
    </div>
    <div class="list__body">
      <VListCard
        v-for="card in cards"
        :key="card.id"
        :id="card.id"
        @delete="deleteCard"
      >
        {{ card.value }}
      </VListCard>
    </div>
    <div class="list__footer">
      <VAddButton
        v-show="!isAddCard"
        class="list__add-card"
        @click="addCard()"
        @keypress.enter.space="addCard()"
      >
        Добавить новую карточку
      </VAddButton>
      <div
        class="list__add-card"
        v-show="isAddCard"
        v-click-outside="mouseCancel"
      >
        <textarea
          placeholder="Введите заголовок для карточки"
          class="list__textarea"
          ref="listField"
          v-model="cardValue"
          @keypress.enter.prevent
          @keypress.enter="sendAddCard"
        ></textarea>

        <div class="list__actions">
          <VAddButton
            class="list__button"
            @click="sendAddCard()"
            @keypress.enter.space="sendAddCard()"
          >
            Добавить карточку
          </VAddButton>
          <img
            class="list__cancel"
            role="button"
            tabindex="1"
            src="@/assets/delete.svg"
            alt="Отменить добавление карточки"
            @click="cancel()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VListCard from '@/components/VListCard.vue';
  import VAddButton from '@/components/VAddButton.vue';

  export default {
    data: () => ({
      isAddCard: false,
      block: true,
      cardValue: '',
    }),

    props: {
      title: String,
      id: Number,
      cards: Array,
    },

    methods: {
      deleteCard(id) {
        this.$emit('delete-card', { cardId: id, listId: this.id });
      },

      deleteList() {
        this.$emit('delete-list', this.id);
      },

      addCard() {
        this.isAddCard = true;
        setTimeout(() => {
          this.$refs.listField.focus();
          this.block = false;
        });
      },

      mouseCancel(event) {
        if (
          this.isAddCard &&
          !this.block &&
          document.activeElement.type != 'textarea'
        ) {
          this.sendAddCard();

          this.block = true;
          this.isAddCard = false;
          this.cardValue = '';
        }
      },

      cancel(event) {
        if (
          this.isAddCard &&
          !this.block &&
          document.activeElement.type != 'textarea'
        ) {
          this.cardValue = '';
          this.block = true;
          this.isAddCard = false;
        }
      },

      sendAddCard() {
        if (this.cardValue !== '') {
          this.$emit('add-card', { value: this.cardValue, listId: this.id });
          this.cardValue = '';
          this.$refs.listField.focus();
        } else {
          this.$refs.listField.focus();
        }
      },
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
    display: grid;
    grid-row-gap: 15px;
  }

  .list__body {
    padding: 16px 25px 34px;
  }

  .list__body:empty {
    padding: 0;
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

  .list__textarea {
    line-height: 130%;
    font-weight: 500;
    font-size: 15px;
    font-family: inherit;

    margin: 0;
    padding: 8px;
    box-shadow: 2px 2px 0px var(--black);
    border: 2px solid var(--black);
    resize: none;
    border-radius: 13px;
    width: calc(100% - 21px);
  }

  .list__button {
    background: var(--peachDark);
    padding: 4px 7px;

    border-radius: 10px;
    border: 2px solid var(--black);
    box-shadow: 2px 2px 0px var(--black);
    font-size: 14px;
  }

  .list__actions {
    margin-top: 7px;
    display: grid;
    grid-template-columns: 1fr 30px;
    grid-column-gap: 10px;
    align-items: center;
  }

  .list__cancel {
    cursor: pointer;
  }
</style>
