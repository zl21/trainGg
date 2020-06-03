<template>
  <div class="header">
    <van-row type="flex" justify="space-between">
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
      <!-- <van-swipe-item v-for="(item,index) in swiperImgArr" :key="index">
        <img :src="item.src" />
      </van-swipe-item>-->
      <van-swipe-item>
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
      </van-swipe-item>
    </van-swipe>
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
      swiperImgArr: []
    };
  },
  created() {
    axios.get("http://localhost:3344/get_tabList").then(_d => {
      console.log(_d.data);
      this.tabArr = _d.data;
    });
    axios.get("http://localhost:3344/get_swiperImg").then(_d => {
      console.log(_d.data);
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
  padding: 0.21333rem 0.4rem;
}
.logo {
  width: 1.84rem;
  height: 0.53333rem;
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
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  height: 4rem;
}
</style>
