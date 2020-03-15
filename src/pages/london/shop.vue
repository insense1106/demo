<template>
  <div class="shop-root">
    <div class="header">
      <shopheader :header="header"></shopheader>
    </div>
    <div class="content">
      <togglebar
        class="togglebar-hide"
        ref="togglebar_hide"
        :togglebar_list="togglebar_list"
        @togglebar_mounted_data="togglebar_mounted_data"
        v-show="!is_active_fixed"
      ></togglebar>
      <scroll class="scroll" ref="scroll" @scrollEvent="scrollEvent">
        <div class="content-header"></div>
        <togglebar
          class="togglebar"
          ref="togglebar"
          :togglebar_list="togglebar_list"
          @togglebar_mounted_data="togglebar_mounted_data"
        ></togglebar>
        <contentdisplay
          class="contentDisplay"
          :cd_list="cd_list"
        ></contentdisplay>
      </scroll>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import {
  shopDetailList,
  model_displayList,
  togglebar_list_shop_header_data,
  model_content_display_list,
  debounce
} from "../../assets/js/utils";
import shopheader from "../../components/header/shopheader";
import contentdisplay from "../../components/common/display/contentdisplay";
import test from "../../components/common/display/test";
import scroll from "../../components/common/better-scroll/scroll";
import display from "../../components/common/display/display";
import togglebar from "../../components/common/toggleBar/togglebar";
export default {
  name: "shop",
  components: { shopheader, contentdisplay, test, display, scroll, togglebar },

  data() {
    return {
      header: null,
      cd_list: null,
      togglebar_list: togglebar_list_shop_header_data,
      is_active_fixed: true,
      debounce_scroll: null
    };
  },
  computed: {},
  watch: {},
  created() {
    this.header = shopDetailList[this.$route.params.shop_id];
  },
  mounted() {
    this.togglebar_mounted_data();
    //高级用法 防抖
    this.debounce_scroll_event = debounce(this.debounce_scroll_event, 20);
  },
  methods: {
    //方法:  根据点击get数据
    togglebar_mounted_data(index = 0) {
      this.$refs.togglebar_hide.currentIndex = index; // 同步数据

      switch (index) {
        case 0:
          this.contentdisplay_mounted_data("page1");
          break;
        case 1:
          this.contentdisplay_mounted_data("page2");
          break;
        case 2:
          this.contentdisplay_mounted_data("page3");
          break;
        case 3:
          this.contentdisplay_mounted_data("page4");
          break;
        default:
          this.contentdisplay_mounted_data("page1");
          break;
      }
    },
    //方法:  request data
    contentdisplay_mounted_data(key) {
      this.cd_list = model_content_display_list[key];
    },
    //方法:  scroll Event
    scrollEvent(position) {
      if (this.is_active_fixed && Math.abs(position.y) >= 285) {
        this.is_active_fixed = !this.is_active_fixed;
      }
      if (!this.is_active_fixed && Math.abs(position.y) <= 283) {
        this.is_active_fixed = !this.is_active_fixed;
      }
      // debounce
      this.debounce_scroll_event(position);
    },

    debounce_scroll_event(position) {
      console.log(position.y);
    }
  }
};
</script>
<style scoped>
.scroll {
  height: 500px;
  margin-top: 70px;
  overflow: hidden;
}
.togglebar {
  position: relative;
}
.togglebar-hide {
  position: fixed;
  top: 68px;
  width: 100%;
  display: flex;
  text-align: center;
  z-index: 2;
}

.content-header {
  height: 280px;
  background-color: rgba(199, 231, 58, 0.646);
}
</style>
