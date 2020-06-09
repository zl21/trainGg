<template>
  <div>
    <!-- 商品信息 -->
    <div class="goodsDetail">
      <img :src="goods_img" />
      <p>{{goods_name}}</p>
    </div>
    <!-- 立即购买/加入购物车 -->
    <div class="goodsAction">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
        <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
        <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
        <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "Detail",
  data() {
    return {
      goods_name: "",
      goods_img: "",
      goods_price: 0
    };
  },
  created() {
    // 接收路由传参的data
    console.log(this.$route.params.goodsInfo);
    let goodsInfoObj = this.$route.params.goodsInfo;
    this.goods_name = goodsInfoObj.goods_name;
    this.goods_img = goodsInfoObj.goods_img;
    this.goods_price = goodsInfoObj.goods_price;
  },
  methods: {
    onClickIcon() {
      Toast("点击图标");
    },
    onClickButton() {
      Toast("点击按钮");
    }
  }
};
</script>

<style scoped>
</style>