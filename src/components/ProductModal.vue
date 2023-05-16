<template>
  <div class="product-modal">
    <v-card>
      <v-card-text class="flex-column align-start gap-3">
        {{ image }}
        <img :src="image" :alt="name" />
        <h1 class="font-weight-bold">{{ name }}</h1>
        <h3 class="font-weight-medium">{{ $filters.real(price) }}</h3>
        <h3 class="font-weight-medium">Descrição</h3>
        <p>Esse produto é um {{ type }}</p>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-row justify="end" class="px-3">
          <v-btn icon @click="addToCart">
            <mdicon name="cart-arrow-down" />
          </v-btn>
          <v-btn icon @click="openPopup">
            <mdicon name="open-in-new" />
          </v-btn>
        </v-row>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="js">
export default {
  props: {
    image: {
      required: true,
      type: String
    },
    name: {
      required: true,
      type: String
    },
    price: {
      required: true,
      type: Number
    },
    type: {
      required: true,
      type: String
    }
  },
  methods: {
    addToCart () {
      console.log('carrinho')
    },
    openPopup () {
      console.log('popup')
    }
  }
}
</script>

<style lang="scss" scoped>
.product-modal {
  height: auto;
  max-height: 80%;
  width: 80%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
</style>
