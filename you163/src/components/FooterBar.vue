<template>
  <div class="footerTabbar">
    <van-tabbar active-color="#f00" v-model="footer_obj" @change="onFooterBtnChange">
      <van-tabbar-item>
        <span>首页</span>
        <template #icon="props">
          <div :class="props.active ? icon.i_home_a : icon.i_home"></div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
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
  methods: {
    // footer按钮切换
    onFooterBtnChange(index) {
      console.log(index);
      /* if (index === 1) {
        this.$router.push("/category");
      } */
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
