<template>
  <div class="londonHeader-root">
    <div class="container">
      <!-- top------part -->
      <div class="top-part" v-for="(item, index) in city" :key="index">
        <div class="userData" @click="userDataClick">
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
        <div class="city">
          <span class="city-name">{{ item.name }}</span>
          <span class="city-temperature">温度:{{ item.temperature }}^C</span>
        </div>
        <div class="search">
          <input
            class="search-input"
            type="text"
            placeholder="click here to search"
          />
        </div>
        <div class="search-button">
          <button class="btn">Search</button>
        </div>
        <div class="logo">
          <div class="voiceLg">
            <img :src="item.imgPath" alt="#" />
          </div>
          <div class="plusLg">
            <img :src="item.imgPath" alt="#" />
          </div>
        </div>
      </div>
      <!-- bottom-----part -->
      <div class="bottom-part">
        <londonTitle></londonTitle>
      </div>
    </div>
  </div>
</template>

<script>
import londonTitle from "../../components/header/londontitle.vue";
export default {
  name: "londonHeader",
  components: { londonTitle },
  props: {
    city: {
      type: Array,
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
    userDataClick() {
      console.log("userDataClick");
    }
  }
};
</script>

<style scoped>
.londonHeader-root {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  background-color: rgb(255, 255, 255);
}
.top-part {
  position: relative;
  top: 15px;
  height: 40px;
  display: flex;
}
span {
  display: block;
  font-size: 0.6rem;
}
.city-temperature {
  width: 60px;
}
.city-name {
  font-size: 1rem;
  margin-bottom: 3px;
}

.search-input {
  line-height: 30px;
  width: 100%;
  position: relative;
  left: 1rem;
  background-color: rgba(48, 206, 40, 0.395);
}
.btn {
  display: block;
  /* width: 34px; */
  height: 36px;
  position: relative;
  top: -12px;
  left: 10px;
  line-height: 34px;
  background-color: rgba(103, 50, 236, 0.844);
}
.logo {
  position: relative;
  display: flex;
  top: -3px;
  margin-left: 10px;
  right: 5px;
}
.logo img {
  width: 100%;
  height: 100%;
}
.plusLg {
  margin-left: 10px;
  /* margin-right: 10px; */
}
</style>
