<template>
  <!-- 导航头部 -->
  <div class="nav-head">
    <nav>
      <div class="nav-head-line">
        <h1>
          <img class="logo" src="./images/logo-header.jpg" alt="网易严选" />
        </h1>

        <van-button class="loginSeach">
          <van-icon name="search" size="0.18rem" />
          <span>搜索商品，共888888款好物</span>
        </van-button>
        <van-button class="loginBtn">登录</van-button>
      </div>
      <div class="nav-selsect">
        <span class="tabAlter" v-if="!isShow">全部频道</span>
        <div class="list" v-if="isShow">
          <span class="nav-selsect-active">推荐</span>
          <span>居家生活</span>
          <span>服饰鞋包</span>
          <span>美食酒水</span>
        </div>

        <div class="moreCate isshow" v-else>
          <van-button class="cateTag nav-selsect-active">推荐</van-button>
          <van-button class="cateTag">居家生活</van-button>
          <van-button class="cateTag">服饰鞋包</van-button>
          <van-button class="cateTag">美食酒水</van-button>
          <van-button class="cateTag">个护清洁</van-button>
          <van-button class="cateTag">母婴亲子</van-button>
          <van-button class="cateTag">运动流行</van-button>
          <van-button class="cateTag">数码家电</van-button>
          <van-button class="cateTag">严选全球</van-button>
        </div>

        <div class="toggle">
          <van-icon
            :name="isShow?'arrow-up':'arrow-down'"
            @touchstart.stop.prevent="isShowSelsect"
          />
        </div>
      </div>
      <div class="nav-Line" v-show="isShow"></div>
    </nav>
    <van-overlay :show="!isShow" @click="isShow = false" />
  </div>
</template>
<script>
import Vue from "vue";
import { Button, Icon, Overlay } from "vant";
Vue.use(Button, Icon, Overlay);
export default {
  data() {
    return {
      isShow: true,
      active: ""
    };
  },
  methods: {
    isShowSelsect() {
      this.isShow = !this.isShow;
    },

    showPopup() {
      this.show = true;
    }
  }
};
</script>
<style lang="stylus" scoped>
.nav-head 
  padding-top: 10px;
  background-color: white;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  .nav-head-line 
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    .logo 
      width: 70px;
      height: 20px;
      margin-right: 10px;
    .loginSeach 
      border-radius: 5px;
      height: 30px;
      background-color: #ededed;
      vertical-align: middle;
      span 
        vertical-align: top;
    .loginBtn 
      margin-left: 10px;
      border-radius: 5px;
      border: red 1px solid;
      color: red;
      font-size: 10px;
      height: 20px;
      width: 40px;
      padding: 0;
  .nav-selsect-active 
    color: red;
  .nav-selsect 
    position: relative;
    .tabAlter 
      position: absolute;
      left: 20px;
    .moreCate 
      display: flex;
      flex-wrap: wrap;
      padding-top: 30px;
      margin-top: 10px;
        // display: inline-block;
        padding: 5px 10px;
        font-size: 14px;
      .nav-selsect-active 
        color: red;
      .cateTag 
        margin: 10px;
        width: 70px;
        height: 30px;
        padding: 0px;
        .van-button__content 
          .van-button__text 
            font-size: 12px;
    .list 
      display: flex;
      flex-wrap: wrap;
      margin: 10px 0 0 25px;
      span 
        display: inline-block;
        padding: 5px 10px;
        font-size: 14px;
    .toggle 
      margin-left: 30px;
      position: absolute;
      right: 20px;
      top: 5px;
  .nav-Line 
    width: 40px;
    height: 2px;
    background-color: red;
    transform: translateX(30px);
</style>