<template>
  <div class="app">
    <app-table v-if="people && people.length > 0" />
    <p v-else>Список сотрудников пуст</p>
    <app-modal :is-show="modalShow" @toggle="toggleModal" />
    <div class="main-table__buttons">
      <app-button label="Добавить человека" @click="toggleModal" />
      <app-button label="Установить тестовые данные" @click="setMockData" />
    </div>
  </div>
</template>

<script>
import AppButton from './components/ui/AppButton.vue'
import AppModal from './components/AppModal.vue'
import TableRow from './components/TableRow.vue'
import AppTable from './components/AppTable.vue'

export default {
  components: {
    AppTable,
    TableRow,
    AppModal,
    AppButton
  },
  data() {
    return {
      modalShow: false,
      mockData: [
        {
          name: 'Иван',
          phone: '+7 123 123 12 32',
          level: 0,
          children: [
            {
              name: 'Сара',
              phone: '+7 123 456 12 32',
              level: 1,
              children: null
            },
            {
              name: 'Михаил',
              phone: '+7 123 789 12 13',
              level: 1,
              children: [
                {
                  name: 'Алексей',
                  phone: '+7 123 101 12 31',
                  level: 2,
                  children: null
                },
                {
                  name: 'Екатерина',
                  phone: '+7 123 102 12 32',
                  level: 2,
                  children: null
                }
              ]
            }
          ]
        },
        {
          name: 'Алиса',
          phone: '+7 123 423 12 23',
          level: 0,
          children: [
            {
              name: 'Том',
              phone: '+7 123 567 12 35',
              level: 1,
              children: null
            }
          ]
        }
      ]
    }
  },
  computed: {
    people() {
      return this.$store.state.people
    }
  },
  methods: {
    toggleModal() {
      this.modalShow = !this.modalShow
    },
    setMockData() {
      this.$store.commit('updatePeopleList', this.mockData)
      localStorage.setItem('users', JSON.stringify(this.mockData))
    }
  },
  mounted() {
    const localStorageData = localStorage.getItem('users')
    if (localStorageData) {
      this.$store.commit('updatePeopleList', JSON.parse(localStorageData))
    }
  }
}
</script>

<style>
:root {
  --primary: #1e90ff;
  --secondary: #abd0fc;
  --light: #fefefe;
  --dark: #000000;
  --gray: #a9a9a9;
  --negative: #ff3333;
  --positive: #8fce00;
}

body {
  padding: 0;
  margin: 0;
  font-size: 16px;
}

.app {
  padding: 1rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
}

.main-table__buttons {
  margin: 20px auto;
  width: fit-content;
}
</style>
