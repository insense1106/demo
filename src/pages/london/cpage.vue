<template>
  <div class="cpage-root">
    <div class="header">Cart:_____{{ length }}</div>
    <div class="container">
      <ul
        v-for="(item, index) in $store.state.cartList"
        :key="index"
        @click="select_single_product(item)"
      >
        <li>
          <span :class="{ active: item.select }"></span>
          <span> IID:{{ item.iid }} </span>
          <span> Count: {{ item.count }} </span>
        </li>
      </ul>
    </div>
    <div class="footer">
      <div class="footer-container">
        <ul class="footer-ul">
          <li @click="select_all">select All</li>
          <li>product:{{}}</li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "cpage",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {
    // 使用vuex的mapgetters方法，直接获取state中的数据；
    // ...mapGetters(["cart_length", "cartList"])
    ...mapGetters({
      length: "cart_length",
      cart: "cartList"
    })
  },
  watch: {},
  created() {
    console.log("cpage-----created---hook");
  },
  mounted() {},
  methods: {
    //--------------------------------------------------
    // 全选 选中或取消选中所有商品
    select_all() {
      this.$store.dispatch("change_select_all").then(res => {
        this.$toast.judge_show("是否全选？");
      });
    },
    //--------------------------------------------------
    // 单选 每次选中或取消选中 单个商品
    select_single_product(item) {
      this.$store.dispatch("change_select", item);
    }
  }
};
</script>

<style scoped>
li {
  list-style: none;
}
li span:nth-child(2) {
  font-size: 2rem;
  color: blue;
}
li span:nth-child(3) {
  font-size: 2rem;
  color: rgb(231, 94, 2);
}
li span:nth-child(1) {
  display: inline-block;
  height: 20px;
  width: 20px;

  border-radius: 40%;
  border: 2px solid rgb(14, 13, 13);
}
.active {
  background-color: orange;
  border: 2px solid orange;
}
.footer-ul {
  display: flex;
  text-align: center;
}
.footer-ul li {
  flex: 1;
  background-color: rgb(238, 131, 131);
  margin-left: 10px;
}
.footer {
  position: fixed;
  width: 100%;
  bottom: 100px;
}
.header {
  height: 100px;
  font-size: 2rem;
  background-color: rgba(255, 255, 255, 0);
}
.container {
  position: relative;
  top: 120px;
}
</style>
