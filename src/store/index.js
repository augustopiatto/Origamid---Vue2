
import Vuex from "vuex";
import toast from "./toast.js";
import cartItems from "./cartItems.js";

export default new Vuex.Store({
  modules: {
    toast: toast,
    cartItems: cartItems
  }
});
