<template>
  <BasePopup :visible="visible">
    <p>Título</p>
    <p>Título</p>
    <p>Título</p>
    <p>Título</p>
    <p>Título</p>
    <p>Título</p>
    <p>Título</p>
    <p>Título</p>
    <p>Título</p>
    <p>Título</p>
    <p>Título</p>
    <p>Título</p>
    <p>Título</p>
    <p>Título</p>
    <p>Título</p>
    <p>Título</p>
    <p>Título</p>
    <p>Título</p>
    <p>Título</p>
    <p>Título</p>
    <p>Título</p>
    <p>Título</p>
    <p>Título</p>
    <p>Título</p>
    <p>Título</p>
    <p>Título</p>
  </BasePopup>
</template>

<script>
import BasePopup from '@/components/popups/BasePopup.vue'

export default {
  name: 'AddToCartPopup',
  components: {
    BasePopup
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    openPopup() {
      this.visible = true
    }
  }
}
</script>
