<template>
  <table class="main-table">
    <thead class="main-table__header">
      <tr class="main-table__row">
        <th class="main-table__cell">Имя</th>
        <th class="main-table__cell">Номер телефона</th>
      </tr>
    </thead>
    <tbody class="main-table__body">
      <table-row
        v-for="(item, idx) in people"
        :key="item.name + idx"
        :item="item"
      />
    </tbody>
  </table>
</template>
<script>
import TableRow from './TableRow.vue'

export default {
  name: 'AppTable',
  components: { TableRow },
  computed: {
    people() {
      return this.$store.state.people
    }
  }
}
</script>

<style scoped>
.main-table {
  border: 2px solid var(--primary);
  border-collapse: collapse;
}

.main-table__header {
  background: var(--primary);
  color: var(--light);
  border: 1px solid var(--primary);
  font-size: 1.25rem;
}

.main-table__cell {
  min-width: 200px;
  text-align: center;
}
</style>
