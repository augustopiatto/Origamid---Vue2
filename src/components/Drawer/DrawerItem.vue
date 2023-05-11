<template>
  <RouterLink :to="to" class="drawer-item">
    <mdicon :name="icon" />
    <p>{{ title }}</p>
  </RouterLink>
</template>

<script lang="js">
import { RouterLink } from 'vue-router';

export default {
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
