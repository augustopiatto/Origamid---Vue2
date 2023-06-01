<template>
  <div class="drawer-menu" v-click-outside="closeMenu">
    <DrawerItem icon="home" title="Página inicial" to="/" />
  </div>
</template>

<script lang="js">
import DrawerItem from '@/components/drawer/DrawerItem.vue'

export default {
  name: 'DrawerMenu',
  components: {
    DrawerItem
  },
  methods: {
    closeMenu () {
      this.$emit('close-menu')
    }
  }
}
</script>

<style lang="scss" scoped>
.drawer-menu {
  position: fixed;
  top: 64px;
  width: 300px;
  height: 100vh;
  background-color: #f7e7ce;
  z-index: 1;
  border-right: solid 2px #cfb997;
}
</style>
