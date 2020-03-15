const mixin = {
  created: function() {
    console.log("mixin");
  }
};

const scroll_methods = {
  methods: {
    //回到 容器顶部
    backIndex() {
      this.scrollObject && this.scrollObject.scrollTo(0, 0, 300);
    },
    //方法: 刷新better-scroll
    refresh(params) {
      this.scrollObject && this.scrollObject.refresh();
      console.log("scroll - refresh -operate in excuting!!");

      console.log(params);
    },
    //方法: 再次开启  监听下拉到底的动作 (取消原规则:只能监听一次该操作)
    finish_pull_up() {
      this.scrollObject && this.scrollObject.finishPullUp();
    }
  }
};
export { mixin, scroll_methods };
// 1  use its function first
// 2 the key must same with the Object
