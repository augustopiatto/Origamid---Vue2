<template>
  <v-row align="center" justify="center" class="secondary-page">
    <v-column>
      <p class="text-md-h5 font-weight-bold">WOOOOW! Que vazio, não?</p>
      <v-progress-circular v-if="loading" color="primary" indeterminate />
      <div v-else>
        <img :src="rickAndMorty.image" />
        <p>{{ rickAndMorty.name }}</p>
        <p>{{ rickAndMorty.location.name }}</p>
      </div>
    </v-column>
  </v-row>
</template>

<script lang="js">
export default {
  name: "SecondaryPage",
  data () {
    return {
      rickAndMorty: {},
      loading: false
    }
  },
  created () {
    this.getAPI()
  },
  methods: {
    async getAPI () {
      try {
        this.loading = true
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const jsonResponse = await response.json()
        this.rickAndMorty = jsonResponse.results[0]
      } catch (error) {
        this.$store.commit('toast', {
          message: error,
          type: 'error'
        })
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.secondary-page {
  height: 100%;
}
</style>
