<template>
  <div imgdisplay-root>
    <div class="container" v-for="(item, index) in img_list" :key="index">
      <img :src="item.path" alt="#" @load="img_load" />
    </div>
  </div>
</template>

<script>
import { mixin } from "../../../assets/js/mixin";
export default {
  name: "imgdisplay",
  components: {},
  props: {
    img_list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return { count: 0 };
  },
  mixins: [mixin],
  computed: {},
  watch: {},
  created() {},
  mounted() {
    console.log(this.img_list);
  },
  methods: {
    img_load() {
      console.log("img_load");
      // this.count++;
      if (++this.count === this.img_list.length) {
        this.$emit("img_load");
        console.log('this.$emit("img_load");');
        console.log("1111");
      }
    }
  }
};
</script>

<style scoped>
img {
  display: block;

  height: 100%;

  width: 100%;
  background-color: rgb(149, 1, 235);
}
</style>
