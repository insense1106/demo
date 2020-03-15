<template>
  <div>
    <londonheader></londonheader>
    <inputtemp class="temp"></inputtemp>
  </div>
</template>

<script>
import londonheader from "../../components/header/londonHeader";
import inputtemp from "../../components/input/inputtemp";
export default {
  name: "tokyo",
  components: { londonheader, inputtemp },
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
.temp {
  margin-top: 200px;
}
</style>
