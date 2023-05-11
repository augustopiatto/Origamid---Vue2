<template>
  <div>
    <v-app-bar-nav-icon @click="toggleMenu">
      <mdicon name="menu" />
    </v-app-bar-nav-icon>
    <DrawerMenu v-if="drawer" @close-menu="toggleMenu" />
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
