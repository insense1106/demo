<template>
  <div>
    <contentdisplay :cd_list="cd_list"></contentdisplay>
  </div>
</template>

<script>
import swiperTemplate from "../../components/common/swiper/swiperTemplate";
import contentdisplay from "../../components/common/display/contentdisplay";
import { model_displayList } from "../../assets/js/utils";
export default {
  name: "newyork",
  components: { swiperTemplate, contentdisplay },
  data() {
    return {
      cd_list: model_displayList
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped></style>
