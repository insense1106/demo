<template>
  <div class="london-root">
    <!-- header -->
    <londonHeader :city="city" :title="titleList"></londonHeader>
    <!-- swiper -->

    <div class="swiper-root">
      <swiperTemplate></swiperTemplate>
    </div>
    <!-- scroll -->
    <scroll
      class="scroll"
      ref="scroll_london"
      @scrollEvent="scrollEvent"
      @pulling_up_Event="pulling_up_Event"
    >
      <!-- display -->

      <display
        @displayImgLoad="displayImgLoad"
        ref="display"
        :displayList="displayList"
      ></display>
    </scroll>
    <!-- bt -->
    <div class="bt" ref="bt" v-show="isbtShow">
      <bt @click.native="backIndex"></bt>
    </div>
  </div>
</template>

<script>
import swiperTemplate from "../../components/common/swiper/swiperTemplate";
import display from "../../components/common/display/display";
import scroll from "../../components/common/better-scroll/scroll";
import bt from "../../components/common/better-scroll/bt";
import londonHeader from "../../components/header/londonHeader";
import {
  cityData,
  london_header_title_list,
  debounce,
  displayList
} from "../../assets/js/utils";
export default {
  name: "london",
  components: {
    londonHeader,
    bt,
    scroll,
    swiperTemplate,
    display
  },
  data() {
    return {
      levave_coordinate: 0,
      isbtShow: false,
      city: cityData,
      titleList: london_header_title_list,
      refresh: null,
      displayList: displayList
    };
  },
  computed: {},
  watch: {},
  //组件重新创建时,挂载非$el 的数据 只有组件首次创建和destoryed后,此方法才会执行
  created() {},
  // 挂载$el数据
  mounted() {
    // this.refresh = debounce(this.$refs.scroll_london.refresh);
    this.refresh = debounce(() => {
      this.$refs.scroll_london.refresh("2115");
      console.log(this.$refs.scroll_london.$el.offsetTop);
      console.log(this.$refs.display.$el.offsetTop);
      console.log(this.$refs.bt.offsetTop);
    });
    // console.log(window);
  },

  activated() {
    //刷新scroll  重新渲染
    this.$refs.scroll_london.scrollObject &&
      this.$refs.scroll_london.refresh("activated");
    //london组件激活时 scroll滚到指定位置
    this.$refs.scroll_london.scrollObject &&
      this.$refs.scroll_london.scrollObject.scrollTo(
        0,
        this.levave_coordinate,
        200
      );
  },
  deactivated() {
    this.levave_coordinate = this.$refs.scroll_london.scrollObject.y;
  },
  destroyed() {},
  methods: {
    //方法:滚轴返回顶端
    backIndex() {
      this.$refs.scroll_london.scrollObject &&
        this.$refs.scroll_london.backIndex();
    },
    //方法: emit--监听滚轴高度  动态获取 布尔值
    scrollEvent(position) {
      this.isbtShow = Math.abs(position.y) >= 1516;
    },
    //方法: emit--图片加载完成后-- 执行better-scroll的refresh()
    displayImgLoad() {
      this.$refs.scroll_london.scrollObject && this.refresh("displayImgLoad");
    },
    //方法: emit--上拉到底 加载更多数据
    pulling_up_Event() {
      this.update_display_data();
    },
    //方法:  更新 display 数据
    update_display_data() {
      this.$refs.display.update_data();
    }
  }
};

// 获取scroll 实时高度
//console.log(this.$refs.scroll_london.scrollObject.scrollerHeight);
// debounce(this.$refs.scroll_london.refresh, 1000)("displayImgLoad");
// this.refresh = debounce(this.$refs.scroll_london.refresh, 1000);
// this.refresh("displayImgLoad")
</script>

<style scoped>
.scroll {
  position: relative;
  top: 32px;
  height: 350px;
  background-color: rgb(170, 161, 168);
  overflow: hidden;
  width: 100%;
}
</style>
