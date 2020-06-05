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
    <!-- Big Promotion Module -->
    <div class="m-indexBigPromotionModule">
      <div class="floor floorTop">
        <a
          class="promItem promItem-1"
          style="background: url('https://yanxuan.nosdn.127.net/5d07f2917f7831cd868fc0a0cdf4b9b5.jpeg?quality=75&type=webp&imageView&thumbnail=750x0') 0% 0% / 100% 100%;"
        ></a>
      </div>
      <div class="floor floorFirst" style="height: 1.06667rem;">
        <a
          class="promItem promItem-1"
          style="background: url(&quot;https://yanxuan.nosdn.127.net/3c252eead9c9a9474fda096c73a300ff.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=750x0&quot;) 0% 0% / 100% 100%;"
        ></a>
      </div>
      <div class="floor" style="height: 2.48rem;">
        <a
          class="promItem promItem-2"
          style="background: url(&quot;https://yanxuan.nosdn.127.net/a526ae177b5302d3143d88520d330604.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=375x0&quot;) 0% 0% / 100% 100%;"
        ></a>
        <a
          class="promItem promItem-2"
          style="background: url(&quot;https://yanxuan.nosdn.127.net/bacb1276d285175e40a1e0c149f9c6f8.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=375x0&quot;) 0% 0% / 100% 100%;"
        ></a>
      </div>
    </div>
    <!-- Exclusive for freshman Module -->
    <div class="m-freshmanModule">
      <div class="moduleTitle">
        <span class="txt">新人专享礼</span>
      </div>
      <div class="content">
        <div class="left">
          <div class="name">新人专享礼包</div>
          <div class="imgWrap">
            <div class="m-lazyload img m-lazyload-loaded">
              <img
                data-original="//yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png"
                data-src="//yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png"
                class="swiper-lazy"
                src="//yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png"
                style="display: inline;"
              />
            </div>
            <div class="animate"></div>
          </div>
        </div>
        <div class="right">
          <div class="module1">
            <div
              class="m-activityItem"
              style="background-image: url(&quot;?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=343x220&quot;); background-size: 100% 100%;"
            >
              <div class="picWrap">
                <div class="m-lazyload pic m-lazyload-loaded">
                  <img
                    data-original="https://yanxuan-item.nosdn.127.net/0558cf6c29e030f072210755f1ad7db7.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
                    data-src="https://yanxuan-item.nosdn.127.net/0558cf6c29e030f072210755f1ad7db7.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
                    class="swiper-lazy"
                    src="https://yanxuan-item.nosdn.127.net/0558cf6c29e030f072210755f1ad7db7.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
                    style="display: inline;"
                  />
                </div>
                <div class="discount">
                  <div class="line1">¥18.9</div>
                  <div class="line2">¥21.8</div>
                </div>
              </div>
              <div class="cnt">
                <div class="title">福利社</div>
                <div class="subTitle">今日特价</div>
              </div>
            </div>
          </div>
          <div class="module2">
            <div
              class="m-activityItem"
              style="background-image: url(&quot;{0}?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=343x220&quot;); background-size: 100% 100%;"
            >
              <div class="picWrap">
                <div class="m-lazyload pic m-lazyload-loaded">
                  <img
                    data-original="https://yanxuan-item.nosdn.127.net/a40fd46da5dcb4b91412272f331a61f5.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
                    data-src="https://yanxuan-item.nosdn.127.net/a40fd46da5dcb4b91412272f331a61f5.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
                    class="swiper-lazy"
                    src="https://yanxuan-item.nosdn.127.net/a40fd46da5dcb4b91412272f331a61f5.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
                    style="display: inline;"
                  />
                </div>
                <div class="discount">
                  <div class="line1">¥218</div>
                  <div class="line2">¥299</div>
                </div>
              </div>
              <div class="cnt">
                <div class="title">新人拼团</div>
                <div class="subTitle"></div>
                <div class="tag">1元起包邮</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 倒计时 -->
    <div class="countDownWrap">
      <p>限时购</p>
      <van-count-down :time="time_val" class="countDdown">
        <template v-slot="timeData">
          <span class="block">{{ timeData.hours }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.minutes }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
      <a href="#" class="right">更多 ></a>
    </div>
    <!-- 限时购的商品分类展示 -->
    <div class="goodListWrap">
      <van-grid :column-num="3">
        <van-grid-item
          v-for="(item,index) in goodsListObj"
          :key="index"
          :icon="item.img_url"
          :text="item.img_txt"
        />
      </van-grid>
    </div>
    <!-- footerTabbar -->
    <div class="footerTabbar">
      <van-tabbar active-color="#f00" v-model="active">
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
      time_val: 30 * 60 * 60 * 1000,
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
        i_personal_a: "footerIcon footer_i_personal_a",
      },
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
      ],
      goodsListObj: [
        {
          img_url:
            "https://yanxuan-item.nosdn.127.net/e78096b543cc65af16da3a93cacb4071.png?quality=75&type=webp&imageView&thumbnail=216x216",
          img_txt: "￥219"
        },
        {
          img_url:
            "https://yanxuan-item.nosdn.127.net/570e762763536175b9ec226c0d93a7cd.png?quality=75&type=webp&imageView&thumbnail=216x216",
          img_txt: "￥167"
        },
        {
          img_url:
            "https://yanxuan-item.nosdn.127.net/f3f18a4fe9e7905cd7c9ff28e42ff0c2.png?quality=75&type=webp&imageView&thumbnail=216x216",
          img_txt: "￥50.2"
        },
        {
          img_url:
            "https://yanxuan-item.nosdn.127.net/0b05c22b99e8fc2cf3015e4bbb8d7c3f.png?quality=75&type=webp&imageView&thumbnail=216x216",
          img_txt: "￥139"
        },
        {
          img_url:
            "https://yanxuan-item.nosdn.127.net/ec55e5314bfd670320c3c15ce5e0b095.png?quality=75&type=webp&imageView&thumbnail=216x216",
          img_txt: "￥42.8"
        },
        {
          img_url:
            "https://yanxuan-item.nosdn.127.net/f815bf4d31ece0500089d69475c2014c.png?quality=75&type=webp&imageView&thumbnail=216x216",
          img_txt: "￥249"
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

.m-indexBigPromotionModule {
  background-color: rgb(239, 239, 239);
  background-image: none;
  background-size: 100% 100%;
  padding-bottom: 0.4rem;
}
.m-indexBigPromotionModule .floorTop {
  margin: 0 !important;
  height: 3.2rem;
}
.m-indexBigPromotionModule .floor {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0.26667rem 0.10667rem;
}
.m-indexBigPromotionModule .promItem {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 100%;
  color: #333;
  width: 100%;
}
.m-indexBigPromotionModule .promItem .promGood {
  width: 1.86667rem;
  height: 1.86667rem;
  position: absolute;
}
.m-indexBigPromotionModule .floorFirst {
  margin-top: 0.26667rem;
}
.m-indexBigPromotionModule .promItem-2 {
  width: 4.68rem;
}

.m-freshmanModule {
  background-color: rgb(239, 239, 239);
  padding-bottom: 0.3rem;
}
.m-freshmanModule .moduleTitle {
  height: 1.2rem;
  width: 100%;
  line-height: 1.2rem;
  text-align: center;
  font-family: PingFangSC-Regular;
  font-size: 0.42667rem;
  background: #fff;
  overflow: hidden;
}
.m-freshmanModule .moduleTitle .txt {
  display: inline-block;
  position: relative;
}
.m-freshmanModule .moduleTitle .txt::after,
.m-freshmanModule .moduleTitle .txt::before {
  content: "";
  position: absolute;
  top: 0.6rem;
  width: 0.32rem;
  height: 0.04rem;
  background: #333;
  box-sizing: border-box;
  text-size-adjust: 100%;
}
.m-freshmanModule .moduleTitle .txt::before {
  left: -0.53333rem;
}
.m-freshmanModule .moduleTitle .txt::after {
  right: -0.53333rem;
}
.m-freshmanModule .content {
  padding: 0 0 0.4rem 0.4rem;
  overflow: hidden;
  background-color: #fff;
}
.m-freshmanModule .left {
  display: block;
  width: 4.57333rem;
  height: 5.78667rem;
  background: #f9e9cf;
  border-radius: 0.05333rem;
  margin-right: 0.05333rem;
  float: left;
  color: #333;
}
.m-freshmanModule .left .name {
  font-family: PingFangSC-Medium;
  font-size: 0.42667rem;
  padding: 0.4rem 0 0 0.4rem;
}
.m-freshmanModule .left .imgWrap {
  margin: 0.49333rem auto;
  width: 3.44rem;
  height: 3.42667rem;
  position: relative;
}
.m-freshmanModule .right {
  float: left;
}
.m-freshmanModule .right .module1 {
  background: #fbe2d3;
  border-radius: 4px;
  width: 4.57333rem;
  height: 2.86667rem;
  margin-bottom: 0.05333rem;
}
.m-freshmanModule .m-activityItem {
  display: block;
  color: #333;
  width: 4.57333rem;
  height: 2.86667rem;
  float: left;
  border-radius: 0.05333rem;
  margin: 0 0.05333rem 0.05333rem 0;
  font-size: 0.32rem;
  padding: 0.26667rem 0 0 0.4rem;
  position: relative;
  box-sizing: border-box;
}
.m-freshmanModule .right .module2 {
  background: #ffecc2;
  border-radius: 4px;
  width: 4.57333rem;
  height: 2.86667rem;
}
.m-activityItem .picWrap,
.m-activityItem .picWrap .pic {
  width: 2.66667rem;
  height: 2.66667rem;
}
.m-activityItem .picWrap {
  position: absolute;
  right: 0;
}
.m-activityItem .picWrap .discount {
  position: absolute;
  top: 0;
  right: 0.4rem;
  width: 1.06667rem;
  height: 1.06667rem;
  opacity: 0.8;
  background: #f59524;
  border-radius: 50%;
  padding-top: 0.13333rem;
  color: #fff;
  text-align: center;
}
.m-activityItem .picWrap .discount .line2 {
  font-size: 0.26667rem;
  margin-top: -0.09333rem;
  text-decoration: line-through;
}
.m-activityItem .cnt {
  position: relative;
}
.m-activityItem .title {
  font-family: PingFangSC-Medium;
  font-size: 0.42667rem;
  display: flex;
  text-align: left;
}
.m-activityItem .subTitle,
.tag {
  color: #7f7f7f;
  display: flex;
  text-align: left;
}
.m-freshmanModule .right .module1 .picWrap,
.m-freshmanModule .right .module2 .picWrap {
  top: 0.2rem;
}

// 倒计时
.countDownWrap {
  overflow: hidden;
  padding: 0.4rem 0.4rem;
}
.countDownWrap p {
  float: left;
  font-size: 0.42667rem;
  font-family: PingFangSC-Regular;
  height: 0.48rem;
  line-height: 0.48rem;
}
.countDownWrap .countDdown {
  float: left;
  margin: 0.05rem 0 0 0.3rem;
}
.countDownWrap a.right {
  display: block;
  font-size: 0.37333rem;
  float: right;
  color: #333;
}
.colon {
  display: inline-block;
  margin: 0 0.1rem;
  font-size: 0.37333rem;
  font-weight: max($numbers: 550);
}
.block {
  display: inline-block;
  width: 0.48rem;
  height: 0.48rem;
  line-height: 0.48rem;
  color: #fff;
  font-size: 0.32rem;
  text-align: center;
  background-color: #333;
  border-radius: 0.05333rem;
}

// footer
.footerIcon {
  width: 0.53rem;
  height: 0.53rem;
  margin: 0 auto;
  background-image: url("../assets/footer_icon.png");
  background-size: 0.53333rem;
  background-repeat: no-repeat;
}
.footer_i_home{
  background-position: 0 -251px;
}
.footer_i_home_a{
  background-position: 0 -200px;
}
.footer_i_sort{
  background-position: 0 -151px;
}
.footer_i_sort_a{
background-position: 0 -100px;
}
.footer_i_worthy{
background-position: 0 -351px;
}
.footer_i_worthy_a{
background-position: 0 -300px;
}
.footer_i_cart{
background-position: 0 -51px;
}
.footer_i_cart_a{
background-position: 0 -0px;
}
.footer_i_personal{
background-position: 0 -251px;
}
.footer_i_personal_a{
background-position: 0 -401px;
}
</style>
