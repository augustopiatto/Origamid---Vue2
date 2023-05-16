<template>
  <transition name="toast">
    <div v-if="toast.message.length" class="toast-modal" :class="toast.type">
      <v-row no-gutters align="center" class="px-4">
        <v-col cols="11">
          <v-row align="center" justify="center">
            {{ toast.message }}
          </v-row>
        </v-col>
        <v-col cols="1">
          <mdicon name="close" class="tm__icon--clickable" @click="closeToast" />
        </v-col>
      </v-row>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ToastModal',
  data() {
    return {}
  },
  watch: {
    'toast.message': {
      handler() {
        setTimeout(() => {
          this.closeToast()
        }, this.toast.duration)
      }
    }
  },
  computed: {
    toast() {
      return this.$store.getters.toast
    }
  },
  methods: {
    closeToast() {
      this.$store.commit('toast', {
        message: ''
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.toast-modal {
  height: auto;
  bottom: 0;
  padding: 8px;
  position: fixed;
  border-radius: 5px 5px 0 0;
  color: white;
  z-index: 10;
  min-width: 200px;
  left: calc(50% - 250px);

  .tm__icon--clickable {
    cursor: pointer;
  }
}
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease-out;
}

.toast-enter-from,
.toast-leave-to {
  transform: translateY();
}
</style>
