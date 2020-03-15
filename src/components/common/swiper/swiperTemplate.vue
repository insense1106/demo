<template>
  <div id="dataCenter">
    <!--  window -->
    <div class="window" @mouseover="stop" @mouseleave="play">
      <ul class="container" :style="containerStyle">
        <li>
          <!-- 把最后一张图放在最开始 -->
          <img
            :style="{ width: imgWidth + 'px' }"
            :src="sliders[sliders.length - 1].img"
            alt=""
          />
        </li>
        <li v-for="(item, index) in sliders" :key="index">
          <img
            :style="{ width: imgWidth + 'px' }"
            :src="item.img"
            alt=""
            @click="amplification(index)"
          />
        </li>
        <li>
          <!-- 把第一张图放在最后 -->
          <img
            :style="{ width: imgWidth + 'px' }"
            :src="sliders[0].img"
            alt=""
          />
        </li>
      </ul>
      <!--  direction -->
      <ul class="direction">
        <li class="left" @click="move(imgWidth, 1, speed)">
          <svg
            class="icon"
            width="30px"
            height="30.00px"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              d="M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z"
            />
          </svg>
        </li>
        <li class="right" @click="move(imgWidth, -1, speed)">
          <svg
            class="icon"
            width="30px"
            height="30.00px"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              d="M557.179 904c-8.189 0-16.379-3.124-22.628-9.372-12.496-12.497-12.496-32.759 0-45.256L871.924 512 534.551 174.627c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l360 360c12.496 12.497 12.496 32.758 0 45.255l-360 360c-6.249 6.249-14.439 9.373-22.628 9.373z"
            />
          </svg>
        </li>
      </ul>
      <!-- dots -->
      <ul class="dots">
        <li
          v-for="(dot, i) in sliders"
          :key="i"
          :class="{ dotted: i === currentIndex - 1 }"
          @click="jump(i + 1)"
        ></li>
      </ul>
    </div>
    <!-- 预览 -->
    <div class="mask-div" @click="maskFun()" v-if="maskBol">
      <img
        :style="{ width: imgWidth + 'px' }"
        :src="sliders[imgNumber].img"
        alt=""
        class="mask-img"
      />
    </div>
  </div>
</template>
<script>
import { sliders } from "../../../assets/js/utils";
export default {
  name: "swiperTemplate",
  props: {
    initialSpeed: {
      type: Number,
      default: 5
    }, // 图片移动速度
    initialInterval: {
      type: Number,
      default: 2
    } // 如果是一个组件 接受外部传入的切换周期
  },
  data() {
    return {
      sliders, // 放图片的数组
      imgWidth: 600, // 图片宽度
      currentIndex: 1, // 原点起始位置
      distance: -600, // 外层嵌套的初始移动距离
      transitionEnd: true, // 防止多次快速点击切换出现问题的闸门
      speed: this.initialSpeed,
      timer: null, // 定时器
      imgNumber: 0, // 点击放大的图片
      maskBol: false
    };
  },
  computed: {
    containerStyle() {
      return {
        transform: `translate3d(${this.distance}px, 0, 0)`
      };
    },
    interval() {
      return this.initialInterval * 2000;
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.play();
    },
    move(offset, direction, speed) {
      // 移动一次的距离， 向左还是向右移动， 图片移动速度
      if (!this.transitionEnd) return;
      this.transitionEnd = false;
      direction === -1
        ? (this.currentIndex += offset / this.imgWidth)
        : (this.currentIndex -= offset / this.imgWidth);
      if (this.currentIndex > this.sliders.length) this.currentIndex = 1;
      if (this.currentIndex < 1) this.currentIndex = this.sliders.length;

      const destination = this.distance + offset * direction;
      this.animate(destination, direction, speed);
    },
    animate(des, direc, speed) {
      // 实际移动距离 想左还是向右 移动速度 负右正左
      if (this.temp) {
        window.clearInterval(this.temp);
        this.temp = null;
      }
      this.temp = window.setInterval(() => {
        if (
          (direc === -1 && des < this.distance) ||
          (direc === 1 && des > this.distance)
        ) {
          this.distance += speed * direc;
        } else {
          this.transitionEnd = true;
          window.clearInterval(this.temp);
          this.distance = des;
          let allWidth = this.sliders.length * this.imgWidth;
          if (des < -allWidth) this.distance = -this.imgWidth;
          if (des > -this.imgWidth) this.distance = -allWidth;
        }
      }, 10);
    },
    jump(index) {
      const direction = index - this.currentIndex >= 0 ? -1 : 1;
      const offset = Math.abs(index - this.currentIndex) * this.imgWidth;
      const jumpSpeed =
        Math.abs(index - this.currentIndex) === 0
          ? this.speed
          : Math.abs(index - this.currentIndex) * this.speed;
      this.move(offset, direction, jumpSpeed);
    },
    // 自动播放函数
    play() {
      if (!this.maskBol) {
        if (this.timer) {
          window.clearInterval(this.timer);
          this.timer = null;
        }
        this.timer = window.setInterval(() => {
          this.move(this.imgWidth, -1, this.speed);
        }, this.interval);
      }
    },
    stop() {
      window.clearInterval(this.timer);
      this.timer = null;
    },
    amplification(index) {
      this.imgNumber = index;
      this.maskBol = true;
      this.stop();
    },
    maskFun() {
      this.maskBol = false;
      this.play();
    }
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
ol,
ul {
  list-style: none;
}
#dataCenter {
  text-align: center;
  width: 100%;
  /* z-index: 999; */
  /* overflow: hidden; */
}
.window {
  top: 101px;
  position: relative;
  width: 100%;
  height: 300px;
  margin: 0 auto;
  overflow: hidden;
}
.container {
  display: flex;
  position: absolute;
}
.left,
.right {
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.177);
  border-radius: 50%;
  cursor: pointer;
}
.left {
  left: 2%;
  padding-left: 12px;
  padding-top: 10px;
}
.right {
  right: 3%;
  padding-right: 12px;
  padding-top: 10px;
}
img {
  user-select: none;
}

.dots {
  position: absolute;
  bottom: 25%;
  left: 50%;
  transform: translateX(-50%);
}
.dots li {
  display: inline-block;
  width: 13px;
  height: 13px;
  margin: 0 6px;
  border: 1px solid white;
  border-radius: 50%;
  background-color: rgba(243, 234, 234, 0.034);
  cursor: pointer;
}
.dots .dotted {
  background-color: rgb(173, 243, 11);
}
.mask-div {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
}
.mask-img {
  margin-top: calc(50vh - 200px);
}
</style>
