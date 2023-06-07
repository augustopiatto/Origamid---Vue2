<template>
  <v-row align="center" justify="center" class="secondary-page">
    <v-column>
      <v-progress-circular v-if="loading" color="primary" indeterminate />
      <div v-else>
        <p class="text-md-h5 font-weight-bold">WOOOOW! Que vazio, não?</p>
        <RouterLink :to="{ name: 'rickInfos', params: { rickInfos: rickAndMorty.name } }">
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

export default {
  name: 'SecondaryPage',
  mixins: [rickAndMortyAPI],
  async created () {
    await this.getAPI()
    // setTimeout(() => {
    //   this.$router.push('/')
    // }, 5000)
  }
}
</script>

<style lang="scss" scoped>
.secondary-page {
  height: 100%;
}
</style>
