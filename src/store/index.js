
import Vuex from "vuex";
import toast from "./toast.js";
import cart from "./cart.js";

export default new Vuex.Store({
  modules: {
    toast: toast,
    cart: cart
  }
});
