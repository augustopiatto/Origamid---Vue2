<template>
  <div class="cart-menu" v-click-outside="closeMenu">
    <ul class="cm__item--display" v-for="item in $store.getters.cartItems" :key="item">
      <li>{{ item }}</li>
    </ul>
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
  min-height: 10%;
  max-height: 500px;
  background-color: rgb(150, 150, 150);
  z-index: 1;
  border: solid 2px rgb(128, 128, 128);
  padding: 16px;

  .cm__item--display {
    text-align: center;
    list-style-position: inside;
    font-size: 22px;
    font-weight: 500;;
    margin-bottom: 4px;
  }
}
</style>
