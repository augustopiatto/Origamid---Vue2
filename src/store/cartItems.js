export default {
  state: {
    cartItems: []
  },
  getters: {
    cartItems(state) {
      return state.cartItems
    }
  },
  mutations: {
    ADD_TO_CART(state, item) {
      state.cartItems.push(item)
    }
  },
  actions: {
    ADD_TO_CART({ commit, getters }, item) {
      if (!getters.cartItems.includes(item)) {
        commit("ADD_TO_CART", item)
        commit('TOAST_INFOS', {
          message: 'Adicionado com sucesso',
          type: 'success'
        })
      } else {
        const errorMsg = 'O item já está no carrinho'
        commit('TOAST_INFOS',
          { message: errorMsg, type: 'error' },
          { root: true }
        )
      }
    }
  }
};
