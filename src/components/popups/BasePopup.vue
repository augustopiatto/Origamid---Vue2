<template>
  <div v-click-outside="closeByClickingOutside">
    <!-- gambiarra usando v-dialog porque no quero reescrever código que já existe -->
    <v-dialog v-model="isVisible" width="60%" :height="height + '%'">
      <v-card class="base-popup">
        <v-card-text>
          <h1>{{ title }}</h1>
          <slot />
        </v-card-text>
        <v-card-actions class="bp__actions--fixed">
          <v-row justify="space-between" class="px-5">
            <v-btn class="c-btn error" @click="close"> Fechar </v-btn>
            <v-btn v-if="!this.viewOnly" class="c-btn success" @click="confirm"> Confirmar </v-btn>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
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
    viewOnly: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    isVisible () {
      return true
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    closeByClickingOutside () {
    if (this.viewOnly) {
        this.close()
      }
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

  .bp__actions--fixed {
    position: sticky;
    width: 100%;
    border-top: solid 1px grey;
    bottom: 0;
    background-color: rgb(250, 250, 250);
  }
}
</style>
