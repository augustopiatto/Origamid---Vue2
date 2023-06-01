<template>
  <v-dialog v-model="isVisible" width="60%" :height="height + '%'" persistent class="base-popup">
    <v-card>
      <v-card-text>
        <slot />
      </v-card-text>
      <v-card-actions class="bp-actions--fixed">
        <v-row justify="space-between" class="px-5">
          <v-btn class="error" @click="close"> Fechar </v-btn>
          <v-btn class="success" @click="confirm"> Confirmar </v-btn>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="js">
export default {
  name: 'BasePopup',
  props: {
    height: {
      default: 50,
      type: Number
    },
    visible: {
      required: true,
      type: Boolean
    }
  },
  computed: {
    isVisible () {
      return this.visible || false
    }
  },
  methods: {
    async close () {
      this.$emit('close')
    },
    async confirm () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.base-popup {
  .bp-actions--fixed {
    position: sticky;
    width: 100%;
    border-top: solid 1px grey;
    bottom: 0;
    background-color: rgb(250, 250, 250);
  }
}
</style>
