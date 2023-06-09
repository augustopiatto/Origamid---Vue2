<template>
  <div class="app">
    <v-toolbar theme="dark" class="a__toolbar--position">
      <DrawerIcon />
      <v-row align="center" justify="center">
        <h1>AugustinhoShop</h1>
      </v-row>
      <CartIcon />
    </v-toolbar>
    <main class="a__main--bodysize">
      <RouterView v-slot="{ Component }">
        <Transition name="router" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
      <Transition name="toast">
        <ToastModal />
      </Transition>
    </main>
  </div>
</template>

<script lang="js" setup>
import { RouterView } from 'vue-router'
import CartIcon from '@/components/cart/CartIcon.vue'
import DrawerIcon from '@/components/drawer/DrawerIcon.vue'
import ToastModal from '@/components/ToastModal.vue'
</script>

<style lang="scss" scoped>
.app {
  .a__main--bodysize {
    position: absolute;
    top: 64px;
    height: calc(100vh - 64px /* tamanho toolbar */);
    width: 100%;
  }

  .a__toolbar--position {
    position: fixed;
    top: 0;
    z-index: 20;
  }
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.5s ease-out;
}

.toast-enter-from,
.toast-leave-to {
  transform: translateY(100px);
}

.router-enter-active,
.router-leave-active {
  transition: all 0.5s;
}

.router-enter-from,
.router-leave-to {
  transform: translateX(-200px);
  opacity: 0;
}
</style>
