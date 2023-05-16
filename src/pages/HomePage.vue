<template>
  <v-container>
    <v-row class="pa-5 gap-3">
      <v-col cols="12">
        <v-row align="center" justify="center" class="gap-3">
          <mdicon name="alert" />
          <h1>Este site não é mobile-friendly, use no seu computador</h1>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-autocomplete v-model="product" label="Busca mockada" color="white" :items="products">
          <template v-slot:append-inner="{ on }">
            <mdicon v-on="on" name="magnify" />
          </template>
        </v-autocomplete>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="js">
export default {
  data () {
    return {
      products: [
        'Água, coca, latão',
        'Brusinha',
        'Cerulá',
        'Capinha de cerulá',
        'Croissant',
        'Laptop',
      ]
    }
  }
}
</script>
