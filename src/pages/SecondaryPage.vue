<template>
  <v-row align="center" justify="center" class="secondary-page">
    <v-column>
      <v-progress-circular v-if="loading" color="primary" indeterminate />
      <div v-else>
        <p class="text-md-h5 font-weight-bold">WOOOOW! Que vazio, não?</p>
        <img :src="rickAndMorty.image" />
        <p>{{ rickAndMorty.name }}</p>
        <p>{{ rickAndMorty.location.name }}</p>
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
    setTimeout(() => {
      this.$router.push('/')
    }, 5000)
  }
}
</script>

<style lang="scss" scoped>
.secondary-page {
  height: 100%;
}
</style>
