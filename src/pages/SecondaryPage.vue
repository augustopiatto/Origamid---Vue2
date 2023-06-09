<template>
  <v-row align="center" justify="center" class="secondary-page">
    <v-column>
      <v-progress-circular v-if="loading" color="primary" indeterminate />
      <div v-else>
        <p class="text-md-h5 font-weight-bold">WOOOOW! Que vazio, não?</p>
        <RouterLink
          :to="{ name: 'rickInfos', params: { rickInfos: rickAndMorty.name } }"
          @click="clearTimeout"
        >
          <img :src="rickAndMorty.image" />
        </RouterLink>
        <!-- Esse router view não mostra nada a princípio porque o secondaryPage não tem children no
        router. Quando eu defino que tem children, aí ele consegue mostrar -->
        <RouterView />
      </div>
    </v-column>
  </v-row>
</template>

<script lang="js">

import rickAndMortyAPI from '@/mixins/rickAndMortyAPI.js'
import router from '@/router/index.js';

const timeout = setTimeout(() => {
  router.push('/')
}, 3000)

export default {
  name: 'SecondaryPage',
  mixins: [rickAndMortyAPI],
  async created () {
    await this.getAPI()
    timeout
  },
  methods: {
    clearTimeout () {
      clearTimeout(timeout)
    }
  }
}
</script>

<style lang="scss" scoped>
.secondary-page {
  height: 100%;
}
</style>
