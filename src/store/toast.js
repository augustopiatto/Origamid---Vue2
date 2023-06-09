const STANDARD_DURATION = 5000; // 5 segundos

export default {
  state: {
    toast: {
      duration: STANDARD_DURATION,
      message: "",
      type: "error",
    },
  },
  getters: {
    toast(state) {
      return state.toast;
    },
  },
  mutations: {
    TOAST_INFOS(state, obj) {
      state.toast.duration = obj.duration || STANDARD_DURATION;
      state.toast.message = obj.message;
      state.toast.type = obj.type;
    },
  },
  actions: {}
};
