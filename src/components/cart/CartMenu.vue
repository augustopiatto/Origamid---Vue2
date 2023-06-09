<template>
  <div class="cart-menu" v-click-outside="closeMenu">
    {{ $store.getters.cartItems }}
  </div>
</template>

<script lang="js">
export default {
  name: 'CartMenu',
  methods: {
    closeMenu () {
      this.$emit('close-menu')
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-menu {
  position: fixed;
  top: 64px;
  right: 0px;
  width: 300px;
  height: 20%;
  max-height: 500px;
  background-color: rgb(150, 150, 150);
  z-index: 1;
  border: solid 2px rgb(128, 128, 128);
}
</style>
