<template>
  <div class="detail-root">
    <!--  -->
    <div class="header">IID:{{ product.iid }}</div>
    <div class="content">
      <scroll class="scroll" ref="scroll">
        <imgdisplay
          @img_load="img_load"
          class="imgdisplay"
          :img_list="img_list"
        ></imgdisplay>
      </scroll>
    </div>
    <div class="footer">
      <cargo :product="product"></cargo>
    </div>
  </div>
</template>

<script>
import cargo from "./cargo";
import imgdisplay from "../../components/common/display/imgdisplay";
import { model_img_list } from "../../assets/js/utils";
import scroll from "../../components/common/better-scroll/scroll";
export default {
  name: "detail",
  components: { imgdisplay, scroll, cargo },
  props: {},
  data() {
    return {
      img_list: model_img_list,
      title: "TITLE",
      product: null,
      iid: "iid1"
    };
  },
  computed: {},
  watch: {},
  created() {
    this.$bus.$on("product_present", item => {
      console.log(item);
      this.product = item;
    });
    console.log("=================", this.product);
  },
  mounted() {},
  methods: {
    img_load() {
      this.$refs.scroll.refresh("detail在调用scroll的refresh方法");
      // console.log(this.$route.path);
    }
  }
};
</script>

<style scoped>
.detail-root {
  height: 100vh;
}
.scroll {
  height: 400px;
  overflow: hidden;
}
.footer {
  position: fixed;
  bottom: 100px;
  z-index: 13;
  height: 120px;
  width: 100%;
}
</style>
