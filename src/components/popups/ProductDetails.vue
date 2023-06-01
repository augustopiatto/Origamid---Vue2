<template>
  <BasePopup
    view-only
    :title="product.name"
    :visible="visible"
    @close="closePopup"
    @confirm="confirm"
  >
    <v-row class="product-details">
      <v-column>
        <img class="pd__img" :src="getImageUrl(product.image)" :alt="product.name" />
      </v-column>
      <v-column>
        <p class="text-md-h5 font-weight-bold">{{ product.info }}</p>
      </v-column>
    </v-row>
  </BasePopup>
</template>

<script>
import BasePopup from '@/components/popups/BasePopup.vue'

export default {
  name: 'ProductDetails',
  components: {
    BasePopup
  },
  data() {
    return {
      product: {},
      visible: false
    }
  },
  setup() {
    const getImageUrl = (image) => {
      return new URL(`../../assets/product-images/${image}`, import.meta.url).href
    }
    return { getImageUrl }
  },
  methods: {
    closePopup() {
      this.visible = false
    },
    confirm() {
      this.$store.commit('toast', {
        message: 'Adicionado com sucesso',
        type: 'success'
      })
      this.closePopup()
    },
    openPopup(product) {
      this.visible = true
      this.product = product
    }
  }
}
</script>

<style lang="scss" scoped>
.product-details {
  padding: 16px 16px 16px 8px;
  gap: 16px;

  .pd__img {
    border-radius: 8px;
  }
}
</style>
