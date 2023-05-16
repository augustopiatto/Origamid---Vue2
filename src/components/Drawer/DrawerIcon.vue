<template>
  <div>
    <v-app-bar-nav-icon @click="toggleMenu">
      <mdicon name="menu" />
    </v-app-bar-nav-icon>
    <Transition name="menu">
      <DrawerMenu v-if="drawer" @close-menu="toggleMenu" />
    </Transition>
  </div>
</template>

<script lang="js">
import DrawerMenu from '@/components/Drawer/DrawerMenu.vue'

export default {
  data () {
    return {
      drawer: false
    }
  },
  components: {
    DrawerMenu
  },
  methods: {
    toggleMenu () {
      this.drawer = !this.drawer
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-enter-active,
.menu-leave-active {
  transition: all 0.5s ease-out;
}

.menu-enter-from,
.menu-leave-to {
  transform: translateX(-300px);
}
</style>
