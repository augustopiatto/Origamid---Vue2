// Fiz mixin só pra aprender, nesse caso onde não tem chamada dessa API em outro componente,
// não é necessário
import { api } from '@/api/rickAndMorty.js'

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
        const response = await api.get('/character')
        this.rickAndMorty = response.data.results[0]
      } catch (error) {
        this.$store.commit('toast/TOAST_INFOS', {
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
