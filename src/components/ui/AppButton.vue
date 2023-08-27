<template>
  <button
    :class="{ button_disabled: isDisable }"
    :disabled="isDisable"
    :type="type"
    class="button"
    @click="$emit('click')"
  >
    {{ label }}
  </button>
</template>
<script>
export default {
  name: 'AppButton',
  props: {
    label: {
      type: String,
      required: true
    },
    isDisable: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'button'
    }
  }
}
</script>

<style scoped>
.button {
  padding: 8px 16px;
  font-size: 14px;
  line-height: 1.25;
  font-weight: 500;
  color: var(--light);
  border-radius: 4px;
  border: none;
  background: var(--primary);
  width: fit-content;
}

.button:hover {
  cursor: pointer;
  opacity: 0.9;
  transition: opacity 0.5s ease;
}

.button_disabled {
  background: var(--light);
  color: var(--dark);
  border: 1px solid var(--gray);
}

.button_disabled:hover {
  cursor: not-allowed;
}
</style>
