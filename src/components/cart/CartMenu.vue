<template>
  <div class="cart-menu" v-click-outside="closeMenu">
    <div v-if="cartItems.length">
      <ul class="cm__item--display" v-for="item in filterClothes(isFiltered)" :key="item">
        <li>{{ item }}</li>
      </ul>
      <v-btn icon @click="isFiltered = !isFiltered">
        <mdicon v-if="clothesInCart" name="tshirt-crew-outline" />
      </v-btn>
    </div>
    <div v-else class="cm__empty-cart--text">
      <span>Carrinho vazio</span>
    </div>
  </div>
</template>

<script lang="js">
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'CartMenu',
  data () {
    return {
      isFiltered: false
    }
  },
  computed: {
    ...mapGetters(['clothesInCart', 'filterClothes']),
    ...mapState({ cartItems: state => state.cart.cartItems })
  },
  methods: {
    closeMenu () {
      this.$emit('close-menu')
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-menu {
  position: fixed;
  top: 64px;
  right: 0px;
  width: 300px;
  min-height: 10%;
  max-height: 500px;
  background-color: rgb(150, 150, 150);
  z-index: 1;
  border: solid 2px rgb(128, 128, 128);
  padding: 16px;

  .cm__item--display {
    text-align: center;
    list-style-position: inside;
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 4px;
  }

  .cm__empty-cart--text {
    text-align: center;
    font-size: 22px;
    font-weight: 500;
  }
}
</style>
