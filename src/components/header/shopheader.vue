<template>
  <div class="shopheader-root">
    <div class="container" v-for="(item, index) in header" :key="index">
      <div class="reutrn" @click="returnClick">
        <svg
          class="icon"
          width="30px"
          height="30.00px"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="black"
            d="M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z"
          />
        </svg>
      </div>
      <div class="search">
        <input type="text" />
        <input type="submit" value="search" />
      </div>
      <div class="logo">
        <img :src="item.headerLogoPath" alt="#" />
      </div>
      <div class="more">
        <img :src="item.headerLogoPath" alt="#" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopheader",
  components: {},
  props: {
    header: {
      type: Object,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    //方法: return 
    returnClick() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.container {
  background-color: #fff;
  display: flex;
}
.reutrn {
  position: relative;
  top: 10px;
  margin-left: 6px;
}
.search {
  position: relative;
  top: 13px;
  margin-left: 10px;
}
.logo {
  position: relative;
  top: -2px;
  margin-left: 11px;
}
.more {
  position: relative;
  top: -2px;
  margin-left: 5px;
}
</style>
