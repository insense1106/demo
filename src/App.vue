<template>
  <div id="app">
    <mt class="mt"></mt>
    <keep-alive exclude="shop">
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
window.onload = function() {
  document.addEventListener("touchstart", function(event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  });

  var lastTouchEnd = 0;

  document.addEventListener(
    "touchend",
    function(event) {
      var now = new Date().getTime();

      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }

      lastTouchEnd = now;
    },
    false
  );

  document.addEventListener("gesturestart", function(event) {
    event.preventDefault();
  });
};

import footguide from "./components/footguide/footguide";
import mt from "./components/tabbar/mt";
export default {
  name: "app",
  components: { footguide, mt }
};
</script>
<style scoped></style>
