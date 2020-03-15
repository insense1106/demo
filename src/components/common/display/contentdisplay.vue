<template>
  <div class="contentdisplay-root">
    <div
      class="item2"
      v-for="(item, index) in cd_list"
      :key="index"
      @click="itemclick(item)"
    >
      <div class="img2">
        <img :src="item.imgPath" alt="#" @load="imgLoad" />
      </div>
      <div class="text2">
        <span class="shopName2">
          商品:
          {{ item.shopName }}</span
        >
        <span class="price2">价格:{{ item.price }}</span>
        <span class="info2">公司:{{ item.info }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contentdisplay",
  components: {},
  props: {
    cd_list: {
      type: Array,
      default() {
        return [];
      }
    },
    isDisplay: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      temp_data: null
    };
  },
  computed: {},
  watch: {},
  created() {
    console.log("contentdisplaycontentdisplaycontentdisplay");
  },
  mounted() {},
  beforeDestroy() {
    console.log("***********", this.temp_data);
    this.$bus.$emit("product_present", this.temp_data);
  },
  destroyed() {},

  methods: {
    imgLoad() {},
    itemclick(item) {
      this.temp_data = item;
      this.$router.push("/detail/" + item.detail_id);
    }
  }
};
</script>

<style scoped>
.contentdisplay-root {
  display: flex;
  flex-flow: wrap;
  /* width:140%; */
  justify-content: space-between;
  color: rgba(18, 19, 18, 0.844);
}
.item2 {
  width: 40%;
  margin-top: 5px;
}
.img2 {
  text-align: center;
}
.img2 img {
  width: 150px;
  height: 120px;
}
.text2 span {
  display: block;
  color: red;
}
.text2 {
  display: block;
  text-align: left;
  margin-left: 19%;
}
</style>
