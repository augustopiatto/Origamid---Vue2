<template>
  <div>
    <v-app-bar-nav-icon @click="drawer = !drawer">
      <mdicon name="menu" />
    </v-app-bar-nav-icon>
    <DrawerMenu v-if="drawer" />
  </div>
</template>

<script lang="js">
import DrawerMenu from '@/components/DrawerMenu.vue'

export default {
  data () {
    return {
      drawer: false
    }
  },
  components: {
    DrawerMenu
  }
}
</script>
