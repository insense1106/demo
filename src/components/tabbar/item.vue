<template>
  <div class="item-root" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "item",
  components: {},
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "pink"
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
    itemClick() {
      this.$router.replace(this.path);
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  }
};
</script>

<style scoped>
.item-root {
  flex: 1;
  text-align: center;
  height: 49px;
}
.item-root img {
  height: 24px;
  width: 24px;
  vertical-align: middle;
  margin-bottom: 1px;
}
.item-root p {
  margin-top: 2px;
}
.active {
  color: red;
}
</style>
