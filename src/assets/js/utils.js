const sliders = [
  {
    img: require("../img/sliders/img5.jpg")
  },
  {
    img: require("../img/sliders/img1.jpg")
  },
  {
    img: require("../img/sliders/img2.jpg")
  },
  {
    img: require("../img/sliders/img3.jpg")
  },
  {
    img: require("../img/sliders/img4.jpg")
  },
  {
    img: require("../img/sliders/img2.jpg")
  }
];
const shopDetailList = {
  rocket: {
    header: {
      title: "rocket",
      content: "rocket-content",
      search: "rocket-search",
      headerLogoPath: require("../img/header/londonHeader/icon2.png")
    }
  },
  water: {
    header: {
      title: "water",
      content: "water-content",
      search: "water-search",
      headerLogoPath: require("../img/header/londonHeader/icon2.png")
    }
  },
  paper: {
    header: {
      title: "paper",
      content: "paper-content",
      search: "paper-search",
      headerLogoPath: require("../img/header/londonHeader/icon2.png")
    }
  }
};
const displayList = [
  {
    shopName: "rocket",
    price: 25,
    info: "introduce",
    imgPath: require("../img/displayList/img1.jpg"),
    shop_id: "rocket"
  },
  {
    shopName: "water",
    price: 224,
    info: "water",
    shop_id: "water",
    imgPath: require("../img/displayList/vueLogo.png")
  },
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../img/displayList/vueLogo.png")
  },
  {
    shopName: "rocket",
    price: 25,
    info: "introduce",
    imgPath: require("../img/displayList/img1.jpg"),
    shop_id: "rocket"
  },
  {
    shopName: "water",
    price: 224,
    info: "water",
    shop_id: "water",
    imgPath: require("../img/displayList/img2.jpg")
  },
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../img/displayList/vueLogo.png")
  },
  {
    shopName: "water",
    price: 224,
    info: "water",
    shop_id: "water",
    imgPath: require("../img/displayList/img3.jpg")
  },
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../img/displayList/vueLogo.png")
  },
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../img/displayList/vueLogo.png")
  },
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../img/displayList/img4.jpg")
  },
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../img/displayList/img3.jpg")
  },
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../img/displayList/img5.jpg")
  },
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../img/displayList/img2.jpg")
  },
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../img/displayList/img3.jpg")
  },
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../img/displayList/img4.jpg")
  },
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../img/displayList/img5.jpg")
  },
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../img/displayList/img1.jpg")
  },
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../img/displayList/vueLogo.png")
  },
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../img/displayList/vueLogo.png")
  },
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../img/displayList/vueLogo.png")
  },
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../img/displayList/vueLogo.png")
  },
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../img/displayList/vueLogo.png")
  }
];
const cityData = [
  {
    name: "london",
    temperature: 22,
    imgPath: require("../img/header/londonHeader/icon2.png")
  }
];
const london_header_title_list = [
  {
    name: "vector"
  },
  {
    name: "chelsea"
  },
  {
    name: "anyway"
  },
  {
    name: "leeds"
  }
];
//方法: 防抖函数
const debounce = (func, delay = 300) => {
  let timer = null;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
      console.log("-----debounce is excuting!!---");
    }, delay);
  };
};
const displayList_update_part2 = [
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../img/displayList/vueLogo.png")
  },
  {
    shopName: "rocket",
    price: 25,
    info: "introduce",
    imgPath: require("../img/displayList/img1.jpg"),
    shop_id: "rocket"
  },
  {
    shopName: "water",
    price: 224,
    info: "water",
    shop_id: "water",
    imgPath: require("../img/displayList/img2.jpg")
  },
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../img/displayList/vueLogo.png")
  },
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../img/displayList/vueLogo.png")
  },
  {
    shopName: "rocket",
    price: 25,
    info: "introduce",
    imgPath: require("../img/displayList/img1.jpg"),
    shop_id: "rocket"
  },
  {
    shopName: "water",
    price: 224,
    info: "water",
    shop_id: "water",
    imgPath: require("../img/displayList/img2.jpg")
  },
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../img/displayList/vueLogo.png")
  }
];
const model_displayList = [
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../../assets/img/bt/img5.jpg")
  },
  {
    shopName: "rocket",
    price: 25,
    info: "introduce",
    imgPath: require("../../assets/img/bt/img1.jpg"),
    shop_id: "rocket"
  },
  {
    shopName: "water",
    price: 224,
    info: "water",
    shop_id: "water",
    imgPath: require("../../assets/img/bt/icon2.png")
  },
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../../assets/img/bt/icon2.png")
  },
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../../assets/img/bt/icon2.png")
  },
  {
    shopName: "rocket",
    price: 25,
    info: "introduce",
    imgPath: require("../../assets/img/bt/img1.jpg"),
    shop_id: "rocket"
  },
  {
    shopName: "water",
    price: 224,
    info: "water",
    shop_id: "water",
    imgPath: require("../../assets/img/bt/img2.jpg")
  },
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../../assets/img/displayList/vueLogo.png")
  },
  {
    shopName: "water",
    price: 224,
    info: "water",
    shop_id: "water",
    imgPath: require("../../assets/img/bt/icon2.png")
  },
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../../assets/img/bt/icon2.png")
  },
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../../assets/img/bt/icon2.png")
  },
  {
    shopName: "rocket",
    price: 25,
    info: "introduce",
    imgPath: require("../../assets/img/bt/img1.jpg"),
    shop_id: "rocket"
  },
  {
    shopName: "water",
    price: 224,
    info: "water",
    shop_id: "water",
    imgPath: require("../../assets/img/bt/img2.jpg")
  },
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../../assets/img/displayList/vueLogo.png")
  },
  {
    shopName: "water",
    price: 224,
    info: "water",
    shop_id: "water",
    imgPath: require("../../assets/img/bt/icon2.png")
  },
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../../assets/img/bt/icon2.png")
  },
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../../assets/img/bt/icon2.png")
  },
  {
    shopName: "rocket",
    price: 25,
    info: "introduce",
    imgPath: require("../../assets/img/bt/img1.jpg"),
    shop_id: "rocket"
  },
  {
    shopName: "water",
    price: 224,
    info: "water",
    shop_id: "water",
    imgPath: require("../../assets/img/bt/img2.jpg")
  },
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../../assets/img/displayList/vueLogo.png")
  },
  {
    shopName: "water",
    price: 224,
    info: "water",
    shop_id: "water",
    imgPath: require("../../assets/img/bt/icon2.png")
  },
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../../assets/img/bt/icon2.png")
  },
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../../assets/img/bt/icon2.png")
  },
  {
    shopName: "rocket",
    price: 25,
    info: "introduce",
    imgPath: require("../../assets/img/bt/img1.jpg"),
    shop_id: "rocket"
  },
  {
    shopName: "water",
    price: 224,
    info: "water",
    shop_id: "water",
    imgPath: require("../../assets/img/bt/img2.jpg")
  },
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../../assets/img/displayList/vueLogo.png")
  }
];
const shop_show_list = [
  {
    shopName: "rocket",
    price: 25,
    info: "introduce",
    imgPath: require("../img/header/londonHeader/icon2.png"),
    shop_id: "rocket"
  },
  {
    shopName: "water",
    price: 224,
    info: "water",
    shop_id: "water",
    imgPath: require("../img/header/londonHeader/icon2.png"),
    shop_id: "rocket"
  },
  {
    shopName: "paper",
    price: 253,
    info: "paper",
    shop_id: "paper",
    imgPath: require("../img/header/londonHeader/icon2.png")
  },
  {
    shopName: "rocket",
    price: 25,
    info: "introduce",
    imgPath: require("../img/header/londonHeader/icon2.png"),
    shop_id: "rocket"
  }
];
const togglebar_list_shop_header_data = [
  {
    name: "name1",
    title: "East"
  },
  {
    name: "name2",
    title: "South"
  },
  {
    name: "name3",
    title: "North"
  },
  {
    name: "name4",
    title: "West"
  }
];
const model_content_display_list = {
  page1: [
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/img1.jpg"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/img2.jpg"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "rocket",
      price: 25,
      info: "introduce",
      imgPath: require("../../assets/img/bt/img3.jpg"),
      shop_id: "rocket",
      detail_id: "rocket",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "water",
      price: 224,
      info: "water",
      shop_id: "water",
      imgPath: require("../../assets/img/bt/img4.jpg"),
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/img5.jpg"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/img1.jpg"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "rocket",
      price: 25,
      info: "introduce",
      shop_id: "rocket",
      imgPath: require("../../assets/img/bt/img4.jpg"),
      detail_id: "rocket",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "water",
      price: 224,
      info: "water",
      shop_id: "water",
      imgPath: require("../../assets/img/bt/img2.jpg"),
      detail_id: "water",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/img5.jpg"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/img3.jpg"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "rocket",
      price: 25,
      info: "introduce",
      shop_id: "rocket",
      imgPath: require("../../assets/img/bt/img2.jpg"),
      detail_id: "rocket",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "water",
      price: 224,
      info: "water",
      shop_id: "water",
      imgPath: require("../../assets/img/bt/img4.jpg"),
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/img5.jpg"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/icon2.png"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "rocket",
      price: 25,
      info: "introduce",
      shop_id: "rocket",
      imgPath: require("../../assets/img/bt/icon2.png"),
      detail_id: "rocket",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "water",
      price: 224,
      info: "water",
      shop_id: "water",
      imgPath: require("../../assets/img/bt/icon2.png"),
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/icon2.png"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    }
  ],
  page2: [
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/img1.jpg"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/img2.jpg"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "rocket",
      price: 25,
      info: "introduce",
      imgPath: require("../../assets/img/bt/img3.jpg"),
      shop_id: "rocket",
      detail_id: "rocket",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "water",
      price: 224,
      info: "water",
      shop_id: "water",
      imgPath: require("../../assets/img/bt/img4.jpg"),
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/img5.jpg"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/img1.jpg"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "rocket",
      price: 25,
      info: "introduce",
      shop_id: "rocket",
      imgPath: require("../../assets/img/bt/img4.jpg"),
      detail_id: "rocket",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "water",
      price: 224,
      info: "water",
      shop_id: "water",
      imgPath: require("../../assets/img/bt/img2.jpg"),
      detail_id: "water",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/img5.jpg"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/img3.jpg"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "rocket",
      price: 25,
      info: "introduce",
      shop_id: "rocket",
      imgPath: require("../../assets/img/bt/img2.jpg"),
      detail_id: "rocket",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "water",
      price: 224,
      info: "water",
      shop_id: "water",
      imgPath: require("../../assets/img/bt/img4.jpg"),
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/img5.jpg"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/icon2.png"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "rocket",
      price: 25,
      info: "introduce",
      shop_id: "rocket",
      imgPath: require("../../assets/img/bt/icon2.png"),
      detail_id: "rocket",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "water",
      price: 224,
      info: "water",
      shop_id: "water",
      imgPath: require("../../assets/img/bt/icon2.png"),
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/icon2.png"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    }
  ],
  page3: [
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/img1.jpg"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/img2.jpg"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "rocket",
      price: 25,
      info: "introduce",
      imgPath: require("../../assets/img/bt/img3.jpg"),
      shop_id: "rocket",
      detail_id: "rocket",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "water",
      price: 224,
      info: "water",
      shop_id: "water",
      imgPath: require("../../assets/img/bt/img4.jpg"),
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/img5.jpg"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/img1.jpg"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "rocket",
      price: 25,
      info: "introduce",
      shop_id: "rocket",
      imgPath: require("../../assets/img/bt/img4.jpg"),
      detail_id: "rocket",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "water",
      price: 224,
      info: "water",
      shop_id: "water",
      imgPath: require("../../assets/img/bt/img2.jpg"),
      detail_id: "water",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/img5.jpg"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/img3.jpg"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "rocket",
      price: 25,
      info: "introduce",
      shop_id: "rocket",
      imgPath: require("../../assets/img/bt/img2.jpg"),
      detail_id: "rocket",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "water",
      price: 224,
      info: "water",
      shop_id: "water",
      imgPath: require("../../assets/img/bt/img4.jpg"),
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/img5.jpg"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/icon2.png"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "rocket",
      price: 25,
      info: "introduce",
      shop_id: "rocket",
      imgPath: require("../../assets/img/bt/icon2.png"),
      detail_id: "rocket",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "water",
      price: 224,
      info: "water",
      shop_id: "water",
      imgPath: require("../../assets/img/bt/icon2.png"),
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/icon2.png"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    }
  ],
  page4: [
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/img1.jpg"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/img2.jpg"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "rocket",
      price: 25,
      info: "introduce",
      imgPath: require("../../assets/img/bt/img3.jpg"),
      shop_id: "rocket",
      detail_id: "rocket",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "water",
      price: 224,
      info: "water",
      shop_id: "water",
      imgPath: require("../../assets/img/bt/img4.jpg"),
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/img5.jpg"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/img1.jpg"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "rocket",
      price: 25,
      info: "introduce",
      shop_id: "rocket",
      imgPath: require("../../assets/img/bt/img4.jpg"),
      detail_id: "rocket",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "water",
      price: 224,
      info: "water",
      shop_id: "water",
      imgPath: require("../../assets/img/bt/img2.jpg"),
      detail_id: "water",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/img5.jpg"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/img3.jpg"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "rocket",
      price: 25,
      info: "introduce",
      shop_id: "rocket",
      imgPath: require("../../assets/img/bt/img2.jpg"),
      detail_id: "rocket",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "water",
      price: 224,
      info: "water",
      shop_id: "water",
      imgPath: require("../../assets/img/bt/img4.jpg"),
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/img5.jpg"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/icon2.png"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "rocket",
      price: 25,
      info: "introduce",
      shop_id: "rocket",
      imgPath: require("../../assets/img/bt/icon2.png"),
      detail_id: "rocket",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "water",
      price: 224,
      info: "water",
      shop_id: "water",
      imgPath: require("../../assets/img/bt/icon2.png"),
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    },
    {
      shopName: "paper",
      price: 253,
      info: "paper",
      shop_id: "paper",
      imgPath: require("../../assets/img/bt/icon2.png"),
      detail_id: "paper",
      iid: Math.ceil(Math.random() * 10000),
      product: Math.floor(Math.random() * 1000)
    }
  ]
};
const model_data_detail = {
  paper: [
    {
      title: "Title-paper",
      img_list: [
        {
          path: require("../img/bt/img1.jpg")
        },
        {
          path: require("../img/bt/img2.jpg")
        },
        {
          path: require("../img/bt/img3.jpg")
        },
        {
          path: require("../img/bt/img4.jpg")
        }
      ]
    }
  ],
  rocket: [
    {
      title: "Title-rocket",
      img_list: [
        require("../img/bt/img1.jpg"),
        require("../img/bt/img1.jpg"),
        require("../img/bt/img1.jpg"),
        require("../img/bt/img1.jpg"),
        require("../img/bt/img1.jpg"),
        require("../img/bt/img1.jpg"),
        require("../img/bt/img1.jpg")
      ]
    }
  ]
};
const model_img_list = [
  {
    path: require("../img/bt/img1.jpg")
  },
  {
    path: require("../img/bt/img2.jpg")
  },
  {
    path: require("../img/bt/img3.jpg")
  },
  {
    path: require("../img/bt/img4.jpg")
  },
  {
    path: require("../img/bt/img5.jpg")
  },
  {
    path: require("../img/bt/img2.jpg")
  }
];
export {
  sliders,
  displayList,
  cityData,
  london_header_title_list,
  shopDetailList,
  debounce,
  displayList_update_part2,
  shop_show_list,
  model_displayList,
  togglebar_list_shop_header_data,
  model_content_display_list,
  model_data_detail,
  model_img_list
};
