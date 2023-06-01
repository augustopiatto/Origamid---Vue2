<template>
  <v-dialog v-model="isVisible" width="60%" :height="height + '%'" persistent>
    <v-card class="base-popup">
      <v-card-text>
        <h1>{{ title }}</h1>
        <v-row align="center" justify="center" class="bp__row--height">
          <slot />
        </v-row>
      </v-card-text>
      <v-card-actions class="bp__actions--fixed">
        <v-row justify="space-between" class="px-5">
          <v-btn class="c-btn error" @click="close"> Fechar </v-btn>
          <v-btn class="c-btn success" @click="confirm"> Confirmar </v-btn>
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
      type: Number,
      validator(value) {
        // compatível com o css "base-popup"
        return value >= 50
      }
    },
    title: {
      required: true,
      type: String
    },
    visible: {
      required: true,
      type: Boolean
    }
  },
  computed: {
    isVisible () {
      return this.visible
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    confirm () {
      this.$emit('confirm')
    }
  }
}
</script>

<style lang="scss" scoped>
.base-popup {
  min-height: 50%;

  .bp__row--height {
    height: calc(100% - 24px /* margin do v-row **/);
  }

  .bp__actions--fixed {
    position: sticky;
    width: 100%;
    border-top: solid 1px grey;
    bottom: 0;
    background-color: rgb(250, 250, 250);
  }
}
</style>
