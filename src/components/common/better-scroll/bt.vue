<template>
  <div class="bt-root">
    <div class="img">
      <img src="../../../assets/img/bt/icon2.png" alt="#" />
    </div>
  </div>
</template>

<script>
export default {
  name: "bt",
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.bt-root {
  position: fixed;
  right: 10px;
  bottom: 60px;
  border: 3px solid rgb(5, 71, 3);
  border-radius: 10px;
}
/*  3.2-4 set img style*/
.bt-root img {
  width: 50px;
  height: 50px;
}
</style>
