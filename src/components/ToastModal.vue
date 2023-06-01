<template>
  <div v-if="toast.message.length" class="toast-modal">
    <div class="tm__centered-div" :class="toast.type">
      {{ toast.message }} teste teste teste teste teste teste teste teste
      <mdicon name="close" class="tm__icon--clickable" @click="closeToast" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToastModal',
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
  position: sticky;
  bottom: 0;
  left: 50%;
  float: left;

  .tm__centered-div {
    position: relative;
    left: -50%;
    float: left;

    padding: 8px;
    border-radius: 5px 5px 0 0;
    color: white;
    max-width: 300px;
    z-index: 10;
  }

  .tm__icon--clickable {
    cursor: pointer;
  }
}
</style>
