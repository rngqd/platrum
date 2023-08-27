import Vue from 'vue'
import Vuex from 'vuex'
import { updatePeopleList } from '../utils/functions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    people: JSON.parse(localStorage.getItem('users'))
  },
  mutations: {
    updatePeopleList(state, newValue) {
      state.people = newValue
      localStorage.setItem('users', JSON.stringify(newValue))
    },

    addPerson(state, newPersonData) {
      const { name, phone, selectedParent } = newPersonData
      const newPerson = { name, phone, children: null }
      if (selectedParent) {
        const selectedName = selectedParent.split('(')[0].trim()
        const selectedPhone = selectedParent
          .split('(')[1]
          .slice(0, -1)
          .trim()
        updatePeopleList(state.people, selectedName, selectedPhone, newPerson)
      } else {
        newPerson.level = 0
        state.people = [...state.people, newPerson]
      }
    },

    addPersonName(state, newPersonName) {
      state.newPersonName = newPersonName
    },

    addPersonPhone(state, newPersonPhone) {
      state.newPersonPhone = newPersonPhone
    }
  }
})
export default store
