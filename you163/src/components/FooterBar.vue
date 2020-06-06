<template>
  <div class="footerTabbar">
    <van-tabbar active-color="#f00" v-model="footer_obj" @change="onFooterBtnChange">
      <!-- v-model="footer_obj"双向数据绑定，footer_obj值为number，指定当前哪个标签被选中 -->
      <van-tabbar-item to="/">
        <span>首页</span>
        <template #icon="props">
          <div :class="props.active ? icon.i_home_a : icon.i_home"></div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/category">
        <span>分类</span>
        <template #icon="props">
          <div :class="props.active ? icon.i_sort_a : icon.i_sort"></div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>值得买</span>
        <template #icon="props">
          <div :class="props.active ? icon.i_worthy_a : icon.i_worthy"></div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>购物车</span>
        <template #icon="props">
          <div :class="props.active ? icon.i_cart_a : icon.i_cart"></div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>个人</span>
        <template #icon="props">
          <div :class="props.active ? icon.i_personal_a : icon.i_personal"></div>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "FooterBar",
  data() {
    return {
      active: "",
      footer_obj: 0,
      icon: {
        i_home: "footerIcon footer_i_home",
        i_home_a: "footerIcon footer_i_home_a",
        i_sort: "footerIcon footer_i_sort",
        i_sort_a: "footerIcon footer_i_sort_a",
        i_worthy: "footerIcon footer_i_worthy",
        i_worthy_a: "footerIcon footer_i_worthy_a",
        i_cart: "footerIcon footer_i_cart",
        i_cart_a: "footerIcon footer_i_cart_a",
        i_personal: "footerIcon footer_i_personal",
        i_personal_a: "footerIcon footer_i_personal_a"
      }
    };
  },
  mounted() {
    let activeInx = localStorage.getItem("save_inx");
    // console.log(typeof activeInx); //string类型
    this.footer_obj = Number(activeInx);
  },
  methods: {
    // footer按钮切换
    onFooterBtnChange(_inx) {
      // console.log(_inx);
      // console.log(typeof _inx); //number类型
      // 保存从首页跳转时点击跳转的bar的索引，而后反向赋值给footer_obj，从而实现跳转后的当前bar为选中状态。
      // 涉及到路由跳转及传参，参数的处理方法有很多，此处使用localStorage的方式
      localStorage.setItem("save_inx", _inx);
    }
  }
};
</script>

<style scoped lang="scss">
// footer
.footerIcon {
  width: 0.53rem;
  height: 0.53rem;
  margin: 0 auto;
  background-image: url("../assets/footer_icon.png");
  background-size: 0.53333rem;
  background-repeat: no-repeat;
}
.footer_i_home {
  background-position: 0 -251px;
}
.footer_i_home_a {
  background-position: 0 -200px;
}
.footer_i_sort {
  background-position: 0 -151px;
}
.footer_i_sort_a {
  background-position: 0 -100px;
}
.footer_i_worthy {
  background-position: 0 -351px;
}
.footer_i_worthy_a {
  background-position: 0 -300px;
}
.footer_i_cart {
  background-position: 0 -51px;
}
.footer_i_cart_a {
  background-position: 0 -0px;
}
.footer_i_personal {
  background-position: 0 -251px;
}
.footer_i_personal_a {
  background-position: 0 -401px;
}
</style>>
