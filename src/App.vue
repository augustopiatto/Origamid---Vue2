<template>
  <div class="app">
    <v-toolbar theme="dark">
      <DrawerIcon />
      <v-row align="center" justify="center">
        <h1>AugustinhoShop</h1>
      </v-row>
    </v-toolbar>
    <main class="a__main--bodysize">
      <RouterView />
      <Transition name="toast">
        <ToastModal />
      </Transition>
    </main>
  </div>
</template>

<script lang="js" setup>
import { RouterView } from 'vue-router'
import DrawerIcon from '@/components/drawer/DrawerIcon.vue'
import ToastModal from '@/components/ToastModal.vue'
</script>

<style lang="scss" scoped>
.app {
  .a__main--bodysize {
    position: fixed;
    top: 64px;
    height: calc(100vh - 64px /* tamanho toolbar */);
    width: 100%;
    overflow-y: auto;
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
</style>
