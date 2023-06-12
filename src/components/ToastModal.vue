<template>
  <div v-if="toast.message.length" class="toast-modal" :class="toast.type">
    <span>{{ toast.message }}</span>
    <mdicon name="close" class="tm__icon--clickable" @click="closeToast" />
  </div>
</template>

<script lang="js">
import { mapState } from 'vuex'

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
    ...mapState({ toast: state => state.toast.toastObj })
  },
  methods: {
    closeToast() {
      this.$store.commit('TOAST_INFOS', {
        message: ''
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.toast-modal {
  width: 300px;
  margin-left: -150px;
  color: white;
  text-align: center;
  border-radius: 6px 6px 0 0;
  padding: 16px;
  position: fixed;
  z-index: 10;
  left: 50%;
  bottom: 0px;

  .tm__icon--clickable {
    margin-left: 16px;
    cursor: pointer;
  }
}
</style>
