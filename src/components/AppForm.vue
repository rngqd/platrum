<template>
  <form class="form" @submit="saveData">
    <div class="form__input-container">
      <label for="person-name">Имя</label>
      <input
        id="person-name"
        v-model="personName"
        :class="{ 'is-valid': isValidName, 'is-invalid': !isValidName }"
        autocomplete="off"
        class="form__input"
        placeholder="Имя кириллицей"
        type="text"
        @input="validateName"
      />
    </div>
    <div class="form__input-container">
      <label for="person-number">Номер телефона</label>
      <input
        id="person-number"
        v-model="personPhone"
        v-mask="['+# ### ### ## ##']"
        :class="{
          'is-valid': isValidPhone,
          'is-invalid': !isValidPhone
        }"
        autocomplete="off"
        class="form__input"
        placeholder="В формате +# ### ### ## ##"
        @input="validatePhone"
      />
    </div>
    <div class="form__input-container">
      <label for="person-parent">Начальник</label>
      <select id="person-parent" v-model="currentOption" class="form__input">
        <option :value="null" selected>-</option>
        <option v-for="option in options" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
    <div class="form__footer">
      <AppButton :disabled="!isValidForm" :type="'submit'" label="Сохранить" />
    </div>
  </form>
</template>
<script>
import AppButton from './ui/AppButton.vue'
import { mask } from 'vue-the-mask'

export default {
  name: 'AppForm',
  directives: { mask },
  components: { AppButton },
  data() {
    return {
      currentOption: null,
      personName: '',
      isValidName: false,
      personPhone: '',
      isValidPhone: false
    }
  },
  computed: {
    options() {
      return this.getAllPeople(this.$store.state.people) || []
    },
    isValidForm() {
      return this.isValidName && this.isValidPhone
    }
  },
  methods: {
    saveData(e) {
      e.preventDefault()
      const selectedParent = this.currentOption || null
      console.log(selectedParent)
      this.$store.commit('addPerson', {
        name: this.personName,
        phone: this.personPhone,
        selectedParent
      })
      localStorage.setItem('users', JSON.stringify(this.$store.state.people))
      this.$emit('clear')
    },
    getAllPeople(arr) {
      let people = []
      arr.forEach(item => {
        people.push(`${item.name} (${item.phone})`)
        if (item.children) {
          people = people.concat(this.getAllPeople(item.children))
        }
      })
      return people
    },
    validatePhone() {
      const validationRegex = /^\+\d{1} \d{3} \d{3} \d{2} \d{2}$/
      this.isValidPhone = validationRegex.test(this.personPhone)
    },
    validateName() {
      const validationRegex = /^[А-ЯЁ][а-яё]*$/
      this.isValidName = validationRegex.test(this.personName)
    }
  }
}
</script>
<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form__input-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form__input {
  padding: 0;
  border: none;
  border-bottom: 1px solid var(--gray);
  width: 40%;
  min-width: 200px;
  height: 2rem;
  outline: none;
}

.form__footer {
  margin: 20px auto 0;
}

.is-invalid {
  border-bottom: 2px solid var(--negative);
}

.is-valid {
  border-bottom: 2px solid var(--positive);
}
</style>
