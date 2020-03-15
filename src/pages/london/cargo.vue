<template>
  <div class="cargo-root">
    <div class="container">
      <ul>
        <li></li>
        <li></li>
        <li @click="add_product_to_cargo"><span>+ </span></li>
        <li @click="linkToCargo">Cartgo</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "cargo",
  components: {},
  props: {
    product: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      temp: null
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    //--------------------------------------------------
    // 导入vuex-store-actions中的相关方法，映射在当前组件中，注意书写格式
    ...mapActions(["addCart"]),
    //--------------------------------------------------
    //  点击 添加商品 至 购物车中
    // #1点击#2 使用vuex-acitons 添加 actions默认处理异步操作 3# 在actions的addcart方法中 reutrn的是一个promise对象，所以this.$store.dispatch("addCart", this.product)执行返回的是一个promise对象，可以直接调用then方法；
    // this.$store.dispatch("fn", data) 等同于  fn（data）； 如果fn（data）有返回结果，可以直接使用；
    add_product_to_cargo() {
      this.addCart(this.product).then(res => {
        this.$toast.judge_show(res, 115000);
      });
      // this.$toast.judge_show(this.temp);
      // console.log(this.$toast);

      //  this.$store.dispatch("addCart", this.product).then(res => {
      //     console.log(res);
      //   });
    },
    //--------------------------------------------------
    // 跳转路由：跳转至购物车页面
    linkToCargo() {
      this.$router.push("/cpage");
    }
  }
};
</script>

<style scoped>
ul {
  display: flex;
  text-align: center;
  overflow: hidden;
}
li {
  list-style: none;
  flex: 1;
  background: cyan;
  /* margin-left: 5px; */
}
ul li:nth-child(3) {
  font-size: 3rem;
}
li:nth-child(1) {
  background-color: red;
}
</style>
