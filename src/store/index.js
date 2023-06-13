
import Vuex from "vuex";
import toast from "@/store/toast.js";
import cart from "@/store/cart.js";

export default new Vuex.Store({
  strict: true,
  modules: {
    toast,
    cart
  }
});
