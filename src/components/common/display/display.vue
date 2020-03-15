<template>
  <div class="display-root">
    <div
      class="item"
      v-for="(item, index) in local_displayList"
      :key="index"
      @click="itemclick(item)"
    >
      <div class="img">
        <img :src="item.imgPath" alt="#" @load="imgLoad" />
      </div>
      <div class="text">
        <span class="shopName">
          商品:
          {{ item.shopName }}</span
        >
        <span class="price">价格:{{ item.price }}</span>
        <span class="info">公司:{{ item.info }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {
  displayList,
  displayList_update_part2
} from "../../../assets/js/utils";
export default {
  name: "display",
  components: {},
  props: {},
  data() {
    return {
      local_displayList: null
    };
  },
  computed: {},
  watch: {},
  created() {
    this.local_displayList = this.request_server_data();
  },
  mounted() {},
  methods: {
    //方法: 点击 跳转 路由
    itemclick(item) {
      this.$router.push("/shop/" + item.shop_id);
    },
    //方法:监听 图片 加载
    imgLoad() {
      this.$emit("displayImgLoad");
    },
    // 请求服务器数据
    request_server_data() {
      return displayList;
    },
    //对当前数据进行更新
    update_data() {
      if (this.local_displayList.length <= 65) {
        //设置 阈值
        this.local_displayList = this.local_displayList.concat(
          displayList_update_part2
        );
      } else {
        console.log("数据更新达到阈值");
      }
    }
  }
};
</script>

<style scoped>
.display-root {
  display: flex;
  flex-flow: wrap;
  /* width:140%; */
  justify-content: space-between;
  color: rgb(78, 187, 105);
}
.item {
  width: 40%;
  margin-top: 5px;
}
.img {
  text-align: center;
}
.img img {
  width: 150px;
  height: 120px;
}
.text span {
  display: block;
  color: red;
}
.text {
  display: block;
  text-align: left;
  margin-left: 19%;
}
</style>
