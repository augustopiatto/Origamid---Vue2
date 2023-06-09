// Fiz mixin só pra aprender, nesse caso onde não tem chamada dessa API em outro componente,
// não é necessário
export default {
  data() {
    return {
      rickAndMorty: {},
      loading: false
    }
  },
  methods: {
    async getAPI() {
      try {
        this.loading = true
        // só pra ver o loading
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const jsonResponse = await response.json()
        this.rickAndMorty = jsonResponse.results[0]
      } catch (error) {
        this.$store.commit('TOAST_INFOS', {
          message: error,
          type: 'error'
        })
      } finally {
        setTimeout(async () => {
          this.loading = false
        }, 800)
      }
    }
  }
}
