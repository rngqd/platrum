<template>
  <fragment>
    <tr :style="{ backgroundColor: `var(--${childColor})` }" class="table-row">
      <td class="table-row__cell">
        <span
          v-for="level in item.level"
          :key="level"
          class="table-row__space"
        />
        <span
          v-if="item.children"
          :class="{ 'table-row__toggle_expand': isShowChildren }"
          class="table-row__toggle"
          @click="toggleExpand"
        >
          +
        </span>
        {{ item.name }}
      </td>
      <td class="table-row__cell table-row__cell_phone">
        <a :href="`tel:${item.phone}`" style="text-decoration: none">
          {{ item.phone }}
        </a>
      </td>
    </tr>
    <table-row
      v-for="child in item.children"
      v-if="item.children && isShowChildren"
      :key="child.name"
      :is-child="true"
      :item="child"
    />
  </fragment>
</template>
<script>
export default {
  name: 'TableRow',
  props: {
    item: {
      type: Object,
      required: true
    },
    isChild: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isShowChildren: false
    }
  },
  methods: {
    toggleExpand() {
      this.isShowChildren = !this.isShowChildren
    }
  },
  computed: {
    childColor() {
      if (this.$props.item.level === 0) return 'light'
      return this.$props.item.level % 2 === 0 ? 'light' : 'secondary'
    }
  }
}
</script>
<style scoped>
.table-row__space {
  display: inline-block;
  width: 1rem;
  height: 1px;
}

.table-row__cell {
  font-size: 1.25rem;
  padding: 4px 8px;
}

.table-row__cell_phone {
  text-align: center;
}

.table-row__toggle {
  width: fit-content;
  height: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  transition: 0.3s ease;
}

.table-row__toggle:hover {
  cursor: pointer;
  transform: scale(1.1);
}

.table-row__toggle_expand {
  transform: rotate(45deg);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
