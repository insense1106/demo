import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  //设置首次访问页面
  {
    path: "/",
    name: "root",
    component: () => {
      return import("../pages/pairs/pairs.vue");
    },
    meta: {
      title: "首次访问页面"
    }
  },
  {
    path: "/london",
    name: "london",
    component: () => {
      return import("../pages/london/london.vue");
    },
    meta: {
      title: "首次访问页面2"
    }
  },
  {
    path: "/newyork",
    name: "newyork",
    component: () => {
      return import("../pages/newyork/newyork.vue");
    },
    meta: {
      title: "首次访问页面3"
    }
  },
  {
    path: "/pairs",
    name: "pairs",
    component: () => {
      return import("../pages/pairs/pairs.vue");
    },
    meta: {
      title: "首次访问页面4"
    }
  },
  {
    path: "/tokyo",
    name: "tokyo",
    component: () => {
      return import("../pages/tokyo/tokyo.vue");
    },
    meta: {
      title: "首次访问页面5"
    }
  },
  {
    path: "/shop/:shop_id",
    name: "shop",
    component: () => {
      return import("../pages/london/shop.vue");
    },
    meta: {
      title: ":shop_id"
    }
  },
  {
    path: "/detail/:detail_id",
    name: "detail",
    component: () => {
      return import("../pages/london/detail.vue");
    },
    meta: {
      title: ":detail"
    }
  },
  {
    path: "/cpage",
    name: "cpage",
    component: () => {
      return import("../pages/london/cpage.vue");
    },
    meta: {
      title: ":cpage"
    }
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
export default router;
