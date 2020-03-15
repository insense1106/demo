<template>
  <div class="scroll-root" ref="scroll">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import bs from "better-scroll";
import { debounce } from "../../../assets/js/utils";
import { scroll_methods } from "../../../assets/js/mixin";
export default {
  name: "scroll",
  components: {},
  data() {
    return {
      scrollObject: null
    };
  },
  computed: {},
  watch: {},
  mixins: [scroll_methods],
  created() {},
  updated() {},
  mounted() {
    // 创建better-scroll实例对象
    this.scrollObject = new bs(this.$refs.scroll, {
      probeType: 3, // 开启 监听 侦测
      pullUpLoad: true, // 开启监听
      click: true, // 开启 监听 点击
      mouseWheel: true // 开启 鼠标滑轮
    });
    //方法: 监听 scroll 事件
    this.scrollObject.on("scroll", position => {
      this.$emit("scrollEvent", position);
    });

    //方法: 监听   事件
    this.scrollObject.on("pullingUp", () => {
      this.$emit("pulling_up_Event");
      this.finish_pull_up();
      console.log(this.scrollObject);

      console.log("可以继续拉了");
    });
  }
};
/**
 *   console.log(this.scrollObject.scrollerHeight);
      console bs实例对象 查看大量属性信息
       console.log("pullingUP");
 */
</script>

<style scoped></style>
