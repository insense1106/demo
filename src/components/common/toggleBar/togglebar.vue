<template>
  <div class="container">
    <div
      class="item"
      v-for="(item, index) in togglebar_list"
      :key="index"
      @click="itemClick(index)"
      :class="{ active: currentIndex === index }"
    >
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "togglebar",
  components: {},
  props: {
    togglebar_list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.togglebar_mounted_data();
  },
  methods: {
    //方法:  点击 激活样式   然后 挂载数据
    itemClick(index) {
      this.currentIndex = index;
      this.togglebar_mounted_data(index);
    },

    //方法: mounted data
    togglebar_mounted_data(index = 0) {
      this.$emit("togglebar_mounted_data", index);
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  text-align: center;
  font: bold;
}
.item {
  background-color: rgb(147, 204, 204);
  flex: 1;
  height: 60px;
  line-height: 60px;
}
.active {
  background: rgb(76, 117, 240);
  font-size: 1.4rem;
}
</style>
