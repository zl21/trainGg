<template>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img
          src="https://yanxuan.nosdn.127.net/7406334eaca021f7316b86ee21c3f320.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://yanxuan.nosdn.127.net/bf7495290f221e9e637332ce2d97f44c.png?type=webp&imageView&quality=75&thumbnail=750x0"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://yanxuan.nosdn.127.net/ea312e4b5a94fbac8856b7a923705832.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
          alt
        />
      </van-swipe-item>
    </van-swipe>
</template>
<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
  name: "Swiper"
};
</script>
<style lang="stylus" scoped>
.my-swipe 
  padding-top: 80px;
  img 
    width: 100%;
    height: 200px;
</style>