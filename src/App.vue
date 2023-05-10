<template>
  <div>
    <v-toolbar theme="dark">
      <DrawerIcon />
      <v-row align="center" justify="center">
        <h1>AugustinhoShop</h1>
      </v-row>
    </v-toolbar>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script lang="js" setup>
import { RouterView } from 'vue-router'
import DrawerIcon from '@/components/DrawerIcon.vue'
</script>
