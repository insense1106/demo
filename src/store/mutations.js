export default {
  addCounter(state, payload) {
    // console.log("addCounter");
    payload.count++;
  },
  real_addCart(state, payload) {
    state.cartList.push(payload);
  },
  change_select(state, payload) {
    console.log("change_select");
    state.cartList = payload;
  },
  change_select_all_mutations(state, payload) {
    console.log("change_select_all");
    state.cartList = payload;
  }
};
