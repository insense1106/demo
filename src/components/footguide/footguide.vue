<template>
  <div class="footguide">
    <!-- :class="{ active: currentIndex === index }" -->
    <div
      class="item-container"
      v-for="(item, index) in footbarList"
      :key="index"
      :class="{ active: '/' + item.name === $route.path }"
      @click="skipTo(item)"
    >
      <div class="item-img">
        <img :src="item.imgSrc" alt="" />
      </div>
      <div class="item-text">
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footguide",
  components: {},
  data() {
    return {
      footbarList: [
        {
          name: "london",
          imgSrc: require("../../assets/img/footerguide/icon2.png")
        },
        {
          name: "newyork",
          imgSrc: require("../../assets/img/footerguide/icon2.png")
        },
        {
          name: "pairs",
          imgSrc: require("../../assets/img/footerguide/icon2.png")
        },
        {
          name: "tokyo",
          imgSrc: require("../../assets/img/footerguide/icon2.png")
        }
      ],
      currentIndex: 0
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    skipTo(item) {
      this.$router.push(item.name);
    }
  }
};
</script>

<style lang="stylus" scoped>
.footguide
    position fixed
    display flex
    border 1px solid grey
    width 100%
    bottom 0
    .item-container
        flex 1
        height 44px
        line-height 44px


        .item-img
            width 34%
            height 40%
            margin 0 auto
            img
                display block
                margin-top 10%
                width 100%
                height 100%
        .item-text
            line-height 160%
            text-align center
    .active
        background-color cyan
        opacity 0.8

        border-bottom 2px solid blue
        color yellow
        font bold
</style>
