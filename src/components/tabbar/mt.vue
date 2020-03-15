<template>
  <div class="mt-root">
    <tabbar class="tabbar">
      <item path="/london">
        <img slot="item-icon" src="../../assets/img/tabbar/icon1.png" alt="#" />
        <img
          slot="item-icon-active"
          src="../../assets/img/tabbar/icon2.png"
          alt="#"
        />
        <p slot="item-text">London</p>
      </item>
      <item path="/pairs" activeColor="blue">
        <img slot="item-icon" src="../../assets/img/tabbar/icon1.png" alt="#" />
        <img
          slot="item-icon-active"
          src="../../assets/img/tabbar/icon2.png"
          alt="#"
        />
        <p slot="item-text">pairs</p>
      </item>
      <item path="/newyork" activeColor="blue">
        <img slot="item-icon" src="../../assets/img/tabbar/icon1.png" alt="#" />
        <img
          slot="item-icon-active"
          src="../../assets/img/tabbar/icon2.png"
          alt="#"
        />
        <p slot="item-text">newyork</p>
      </item>
      <item path="/tokyo" activeColor="blue">
        <img slot="item-icon" src="../../assets/img/tabbar/icon1.png" alt="#" />
        <img
          slot="item-icon-active"
          src="../../assets/img/tabbar/icon2.png"
          alt="#"
        />
        <p slot="item-text">tokyo</p>
      </item>
    </tabbar>
  </div>
</template>

<script>
import tabbar from "./tabbar";
import item from "./item";
export default {
  name: "mt",
  components: { tabbar, item },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.mt-root {
  width: 100%;
  z-index: 999;
  background-color: #fff;
}
.tabbar {
  display: flex;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  box-shadow: 0 -3px 1px rgba(100, 1000, 100, 0.4);
  width: 100%;
  z-index: 10;
}
</style>
