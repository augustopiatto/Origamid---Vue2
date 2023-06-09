<template>
  <BasePopup view-only :title="product.name" @close="closePopup" @confirm="confirm">
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
  props: {
    product: {
      required: true,
      type: Object
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
      this.$emit('close')
    },
    confirm() {
      this.$store.commit('TOAST_INFOS', {
        message: 'Adicionado com sucesso',
        type: 'success'
      })
      this.closePopup()
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
