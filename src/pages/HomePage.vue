<template>
  <v-container>
    <v-row class="pa-5">
      <v-col cols="12">
        <v-row align="center" justify="center" class="gap-3">
          <mdicon name="alert" />
          <h1>Este site não é mobile-friendly, use no seu computador</h1>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-autocomplete
          v-model="product"
          label="Busca mockada"
          item-title="name"
          item-value="id"
          :items="products"
        >
          <template v-slot:append-inner="{ on }">
            <mdicon v-on="on" name="magnify" />
          </template>
        </v-autocomplete>
      </v-col>
      <v-col cols="12">
        <v-row align="center" justify="center" class="py-5 gap-5">
          <v-btn color="grey" @click="component = 'home'">Home</v-btn>
          <v-btn color="grey" @click="component = 'productModal'">Produtos</v-btn>
        </v-row>
      </v-col>
      <v-col cols="6" v-for="product in products" :key="product.name" align="center">
        <component :is="chosenComponent" :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="js">
import { products } from '@/api'
import HomeModal from '@/components/HomeModal.vue'
import ProductModal from '@/components/ProductModal.vue'

export default {
  name: 'HomePage',
  components: {
    HomeModal,
    ProductModal
  },
  data () {
    return {
      component: 'home',
      product: null,
      products: []
    }
  },
  async mounted () {
    this.products = await products.getProducts()
  },
  computed: {
    chosenComponent () {
      const components = {
        home: 'HomeModal',
        productModal: 'ProductModal'
      }
      return components[this.component]
    }
  }
}
</script>
