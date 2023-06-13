export default {
  namespaced: true,
  state: {
    cartItems: [],
    cartObj: {}
  },
  getters: {
    clothesInCart (state) {
      return state.cartItems.includes('Brusinha')
    },
    filterClothes: (state) => (isFiltered) => {
      // usando function se transforma o getters em métodos. Se procurar esse mapGetters no
      // código vai ver que é um executável, não é mais uma computed
      if (!isFiltered) {
        return state.cartItems
      }
      return state.cartItems.filter(item => item === 'Brusinha')
    }
  },
  mutations: {
    ADD_TO_CART(state, item) {
      state.cartItems.push(item)
    },
    ADD_CART_OBJ_FIELD(state, obj) {
      state.cartObj = Object.assign(state.cartObj, obj)
    }
  },
  actions: {
    ADD_TO_CART({ commit, state }, item) {
      if (!state.cartItems.includes(item)) {
        commit("ADD_TO_CART", item)
        commit('toast/TOAST_INFOS', {
          message: 'Adicionado com sucesso',
          type: 'success'
        },
        { root: true }
        )
      } else {
        const errorMsg = 'O item já está no carrinho'
        commit('toast/TOAST_INFOS',
          { message: errorMsg, type: 'error' },
          { root: true }
        )
      }
    }
  }
};
