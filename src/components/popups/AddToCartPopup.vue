<template>
  <BasePopup :title="title" :visible="visible" @close="closePopup">
    <p class="text-md-h5">Você está adicionando um produto ao carrinho, e não comprando.</p>
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
      return `Adicionar ${name.toLowerCase()} ao carrinho?`
    }
  },
  methods: {
    closePopup() {
      this.visible = false
    },
    openPopup() {
      this.visible = true
    }
  }
}
</script>
