<template>
  <div class="londonTitle-root">
    <div class="text" v-for="(item, index) in title" :key="index">
      <span> {{ item.name }} </span>
      <span class="line">|</span>
    </div>
  </div>
</template>

<script>
import { london_header_title_list } from "../../assets/js/utils";

export default {
  name: "londonTitle",
  components: {},
  props: {
    other_title: {
      type: Array,
      default() {
        return london_header_title_list;
      }
    }
  },
  data() {
    2;
    return {
      title: london_header_title_list
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.londonTitle-root {
  height: 50px;
  display: flex;
  position: relative;
  top: 1.6rem;
  justify-content: space-around;
  font-size:1.2rem;
  color: rgba(17, 125, 131, 0.864);
}
.line{
    margin-left: 1rem;
}
.text:nth-last-child(1) span:last-child{
    display: none;
}
</style>
