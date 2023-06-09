<template>
  <div>
    <v-app-bar-nav-icon @click="toggleMenu">
      <mdicon name="menu" />
    </v-app-bar-nav-icon>
    <Transition name="menu">
      <CartMenu v-if="cart" @close-menu="toggleMenu" />
    </Transition>
  </div>
</template>

<script lang="js">
import CartMenu from '@/components/cart/CartMenu.vue'

export default {
  name: 'CartIcon',
  data () {
    return {
      cart: false
    }
  },
  components: {
    CartMenu
  },
  methods: {
    toggleMenu () {
      this.cart = !this.cart
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-enter-active,
.menu-leave-active {
  transition: all 0.5s ease-out;
}

.menu-enter-from {
  transform: translateY(-16px);
}
.menu-leave-to {
  transform: translateX(300px);
}
</style>