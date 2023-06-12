const STANDARD_DURATION = 5000; // 5 segundos

export default {
  state: {
    toastObj: {
      duration: STANDARD_DURATION,
      message: "",
      type: "error",
    },
  },
  // getters é como se fosse computed, não preciso duplicar o "toastObj" para retornar pelo getters,
  // posso fazer isso através de $store.state.toastObj
  getters: {},
  mutations: {
    TOAST_INFOS(state, obj) {
      state.toastObj.duration = obj.duration || STANDARD_DURATION;
      state.toastObj.message = obj.message;
      state.toastObj.type = obj.type;
    },
  },
  actions: {}
};
