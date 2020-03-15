<template>
  <div class="inputtemp-root">
    <div class="header form">
      <input type="text" class="input1 input" name="" />
      <input type="text" class="input2 input" name="" />
      <input type="text" class="input3 input" name="" />
    </div>
    <div class="container form">
      <input type="text" class="input4 input" />
      <input type="text" class="input5 input" />
      <input type="text" class="input6 input" ref="input6" />
    </div>
    <div class="footer form ">
      <input type="text" class="input7 input" />
      <input type="text" class="input8 input" />
      <input type="text" class="input9 input onlyone" id="one" />
    </div>
  </div>
</template>

<script>
export default {
  name: "inputtemp",
  components: {},
  props: {},
  data() {
    return {
      array_input: [],
      index: null
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.addEnterListener();
    // this.$refs.input6.focus();
  },
  destroyed() {
    this.removeEnterListener();
  },
  methods: {
    addEnterListener() {
      if (window.__completeEnterBind__) return;
      window.addEventListener("keydown", this.enterCallback);
      window.__completeEnterBind__ = true;
    },

    removeEnterListener() {
      window.removeEventListener("keydown", this.enterCallback);
      window.__completeEnterBind__ = false;
    },
    enterCallback(e) {
      console.log(e);

      if (e.keyCode === 13) {
        console.log(this.array_input);

        this.next_input(this.array_input, this.index);
      }
    },
    next_input(array, number) {
      array = document.body.querySelectorAll(".input"); // return Object
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element == document.activeElement) {
          number = index;
        }
      }
      number++;

      if (number >= array.length) {
        number = 0;
        array[number].focus();
      } else {
        array[number].focus();
      }
    }
  }
};
</script>

<style scoped></style>
