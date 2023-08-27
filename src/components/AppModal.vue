<template>
  <transition name="fade" appear>
    <div v-if="isShow" class="modal-overlay">
      <transition name="pop" appear>
        <div class="modal">
          <div class="modal__header">
            <h2 class="modal__title">Добавление пользователя</h2>
            <div class="modal__close" @click="close">+</div>
          </div>
          <app-form @clear="close" />
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import AppForm from './AppForm.vue'

export default {
  name: 'AppModal',
  components: {
    AppForm
  },
  props: {
    isShow: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    close() {
      this.$emit('toggle')
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  position: fixed;
  width: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: white;
  border: 2px solid var(--gray);
  box-shadow: 1px 5px 20px var(--dark);
  border-radius: 16px;
  gap: 20px;
}

.modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1;
}

.modal__title {
  font-size: 1.5rem;
  margin: 0;
}

.modal__close {
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  opacity: 0.3;
  font-size: 2rem;
  transition: 0.5s ease-in-out;
  transform: rotate(45deg);
}

.modal__close:hover {
  opacity: 1;
  cursor: pointer;
  transform: scale(1.05) rotate(45deg);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
</style>
