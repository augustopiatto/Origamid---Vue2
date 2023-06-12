<template>
  <BasePopup :title="title" :visible="visible" @close="closePopup" @confirm="confirm">
    <v-row align="center" justify="center" class="add-to-cart-popup">
      <p class="text-md-h5">Você está adicionando um produto ao carrinho, e não comprando.</p>
    </v-row>
  </BasePopup>
</template>

<script>
import BasePopup from '@/components/popups/BasePopup.vue'

export default {
  name: 'AddToCartPopup',
  components: {
    BasePopup
  },
  props: {
    name: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      visible: false
    }
  },
  computed: {
    title() {
      return `Adicionar ${this.name.toLowerCase()} ao carrinho?`
    }
  },
  methods: {
    closePopup() {
      this.visible = false
    },
    confirm() {
      this.$store.dispatch('cart/ADD_TO_CART', this.name)
      this.closePopup()
    },
    openPopup() {
      this.visible = true
    }
  }
}
</script>

<style lang="scss" scoped>
.add-to-cart-popup {
  height: calc(100% - 24px /* margin do v-row **/);
}
</style>
