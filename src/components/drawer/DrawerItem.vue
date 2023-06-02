<template>
  <RouterLink :to="to" class="drawer-item" @click="closeMenu">
    <mdicon :name="icon" />
    <p :name="to">{{ title }}</p>
  </RouterLink>
</template>

<script lang="js">
import { RouterLink } from 'vue-router';

export default {
  name: 'DrawerItem',
  props: {
    icon: {
      required: true,
      type: String
    },
    title: {
      required: true,
      type: String
    },
    to: {
      required: true,
      type: String
    }
  },
  components: {
    RouterLink
  },
  methods: {
    closeMenu (event) {
      if (this.$route.path !== event.target.getAttribute('name')) {
        this.$parent.closeMenu()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.drawer-item {
  padding: 16px;
  display: flex;
  gap: 8px;
  font-size: 20px;
  color: rgba(66, 66, 66);
}
</style>
