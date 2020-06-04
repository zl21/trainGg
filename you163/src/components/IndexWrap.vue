<template>
  <div class="header">
    <!-- logo + searchDiv + loginBtn -->
    <van-row type="flex" justify="space-between" style="padding:0 .2rem">
      <van-col span="5">
        <img class="logo" src="../assets/logo-img.png" />
      </van-col>
      <van-col @click="searchBtnFn" span="15" class="search">
        <van-icon class="searchIcon" name="search" size=".5rem" />
        <span>搜索商品, 共29863款好物</span>
      </van-col>
      <van-col span="3">
        <van-button class="loginBtn" type="primary" size="mini">登录</van-button>
      </van-col>
    </van-row>
    <!-- 滑动/选项卡切换 -->
    <van-tabs v-model="active" swipeable class="tabWrap">
      <van-tab v-for="(item,index) in tabArr" :key="index" :title="item">
        <!-- {{ item }} -->
      </van-tab>
    </van-tabs>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="1000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in swiperImgArr" :key="index">
        <img :src="item" />
      </van-swipe-item>

      <!-- <van-swipe-item>
        <img src="../assets/images/lun1.webp" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/images/lun2.webp" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/images/lun3.webp" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/images/lun4.webp" />
      </van-swipe-item>-->
    </van-swipe>
    <!-- 轮播图下面的三个小nodes -->
    <div class="m-indexServicePolicy">
      <ul>
        <li>
          <i
            style="background-image: url(https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png);"
          ></i>网易自营品牌
        </li>
        <li>
          <i
            style="background-image: url(https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png);"
          ></i>天无忧退货
        </li>
        <li>
          <i
            style="background-image: url(https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png);"
          ></i>48小时快速退款
        </li>
      </ul>
    </div>
    <!-- categoryGrid -->
    <div class="categoryGridWrap">
      <van-grid :column-num="5">
        <van-grid-item
          v-for="(item,index) in categoryGridArr"
          :key="index"
          :icon="item.img_url"
          :text="item.img_txt"
        />
      </van-grid>
    </div>
  </div>
</template>

<script>
// 引入对vant框架本身一些样式的重置文件
import "../assets/resetVant.css";
import axios from "axios";
// import '../assets/images/lun5.png'
export default {
  name: "IndexWrap",
  // props: {
  //   msg: String
  // }
  data() {
    return {
      active: "",
      tabArr: [],
      swiperImgArr: [],
      categoryGridArr: [
        {
          img_url:
            "https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png",
          img_txt: "新品首发"
        },
        {
          img_url:
            "http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png",
          img_txt: "居家生活"
        },
        {
          img_url:
            "https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png",
          img_txt: "服饰鞋包"
        },
        {
          img_url:
            "http://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png",
          img_txt: "美食酒水"
        },
        {
          img_url:
            "https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png",
          img_txt: "个护清洁"
        },
        {
          img_url:
            "https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png",
          img_txt: "母婴亲子"
        },
        {
          img_url:
            "https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png",
          img_txt: "运动旅行"
        },
        {
          img_url:
            "https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png",
          img_txt: "数码家电"
        },
        {
          img_url:
            "https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png",
          img_txt: "全球特色"
        },
        {
          img_url:
            "http://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif",
          img_txt: "好货抄底"
        }
      ]
    };
  },
  created() {
    axios.get("http://localhost:3344/get_tabList").then(_d => {
      // console.log(_d.data);
      this.tabArr = _d.data;
    });
    axios.get("http://localhost:3344/get_swiperImg").then(_d => {
      // console.log(_d.data);
      this.swiperImgArr = _d.data;
    });
  },
  methods: {
    searchBtnFn() {
      this.$router.push("/search");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  padding: 0.21333rem 0 0.4rem 0;
}
.logo {
  width: 1.84rem;
  height: 0.53333rem;
  padding-top: 0.1rem;
}
.search {
  height: 0.74667rem;
  font-size: 0.37333rem;
  background-color: #ededed;
  border-radius: 0.10667rem;
  display: flex;
  justify-content: center;
  align-content: center;
}
.searchIcon {
  padding-top: 0.15rem;
}
.loginBtn {
  width: 0.98667rem;
  height: 0.53333rem;
  line-height: 0.53333rem;
  text-align: center;
  color: #dd1a21;
  border: 1px solid #dd1a21;
  border-radius: 0.10667rem;
  margin-left: 0.21333rem;
  font-size: 0.32rem;
  background: #fff;
}
.tabWrap {
  font-size: 0.4rem;
  padding: 0.2rem 0.2rem 0.1rem;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  height: 4rem;
}
.m-indexServicePolicy {
  width: 100%;
}
.m-indexServicePolicy ul {
  height: 0.96rem;
  display: flex;
  align-items: center;
  padding: 0 0.3rem 0 0.22rem;
}
.m-indexServicePolicy ul li {
  flex: 1;
  font-size: 0.32rem;
  color: #333;
  line-height: 0.42667rem;
  display: inline-block;
  vertical-align: middle;
}
.m-indexServicePolicy ul li i {
  display: inline-block;
  vertical-align: middle;
  width: 0.42667rem;
  height: 0.42667rem;
  font-size: 0.32rem;
  color: #333;
  line-height: 0.42667rem;
  background-size: 100% 100%;
  margin-right: 0.13rem;
}
</style>
