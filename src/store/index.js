import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations,

  actions,
  modules: {},
  getters
});

//   if the product has exist just change the count  else add a new product and set its value: count =1;  next time , if still add this product , just change its count, like  count =count+1;
//// you had better put the function with  intricacy  estimate logic or   asynchronous callback function in actions
// mutations method  as possible as deal the single type event
// let product = state.cartList.find(function(item) {
//   return item.iid === payload.iid;
// });
// state.cartList.push(payload);
/**
 * 商品添加到cart的操作有没有成功?
 *  操作执行完毕后 需要反馈一个信号 : success or fail
 *
 *
 */
