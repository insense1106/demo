export default {
  //  添加商品
  //---------------------------------------------------------------------
  addCart(context, payload) {
    let old_product = null;
    return new Promise((resolve, reject) => {
      for (let item of context.state.cartList) {
        if (item.iid === payload.iid) {
          old_product = item;
        }
      }

      if (old_product) {
        context.commit("addCounter", old_product);
      } else {
        payload.count = 1;
        payload.select = false;
        context.commit("real_addCart", payload);
      }
      resolve("addcart执行完毕");
    });
  },
  //---------------------------------------------------------------------
  // 单个商品的 选中||取消选中
  change_select(context, payload) {
    let new_list = context.state.cartList.map(item => {
      if (item === payload) {
        item.select = !item.select;
      }
      return item;
    });
    context.commit("change_select", new_list);
  },
  //---------------------------------------------------------------------
  // 全选 || 全不选
  change_select_all(context) {
    console.log("change_select_all");
    let new_list = null;
    return new Promise((resolve, reject) => {
      // if  如果所有的商品都被选中  #true 则让所有商品点击后变为不选中  #false 让所有商品变为选中
      if (
        context.state.cartList.filter(item => {
          return item.select === true;
        }).length === context.state.cartList.length
      ) {
        new_list = context.state.cartList.map(item => {
          item.select = false;
          resolve(false); // resolve 不能放在return 后面， 否则不会执行
          return item;
        });
      } else {
        new_list = context.state.cartList.map(item => {
          item.select = true;
          resolve(true); // resolve 不能放在return 后面， 否则不会执行
          return item;
        });
      }
      context.commit("change_select_all_mutations", new_list);
    });
  }
};
