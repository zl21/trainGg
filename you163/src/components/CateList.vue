<template>
  <div class="category">
    <!-- 左侧导航区 -->
    <div class="sidebarWrap">
      <van-sidebar v-model="activeKey" @change="onChangeSidebar">
        <van-sidebar-item v-for="(item,index) in sidebarArr" :key="index" :title="item.txt" />
      </van-sidebar>
    </div>
    <!-- 右侧：对应某导航类别的商品展示区 -->
    <div class="goodsSidebar">
      <div class="goodsItem" v-for="(item,index) in categoryListObj" :key="index">
        <img :src="item.goods_img" />
        <p>{{item.goods_name}}</p>
        <p>{{item.goods_price}}</p>
      </div>
    </div>
    <!-- footerTabbar -->
    <FooterBar />
  </div>
</template>

<script>
import FooterBar from "./FooterBar";
import axios from "axios";
export default {
  name: "CateList",
  data() {
    return {
      msg: "栏目页面",
      activeKey: 0,
      sidebarArr: [
        {
          txt: "推荐专区"
        },
        {
          txt: "爆品专区"
        },
        {
          txt: "新品专区"
        },
        {
          txt: "居家生活"
        },
        {
          txt: "服饰鞋包"
        },
        {
          txt: "美食酒水"
        },
        {
          txt: "个护清洁"
        },
        {
          txt: "母婴亲子"
        },
        {
          txt: "运动旅行"
        },
        {
          txt: "数码家电"
        },
        {
          txt: "严选全球"
        }
      ],
      categoryListObj: null
    };
  },
  components: {
    FooterBar
  },
  created() {
    //   默认展示第0个
    axios.get("http://localhost:3344/category_list_0").then(_d => {
      this.categoryListObj = _d.data;
    });
  },
  methods: {
    onChangeSidebar(_inx) {
      //   console.log(_inx);
      axios.get("http://localhost:3344/category_list_" + _inx).then(_d => {
        console.log(_d.data);
        this.categoryListObj = _d.data;
      });
    }
  }
};
</script>

<style scoped lang="scss">
.category {
  position: relative;
  padding-left: 2.15rem;
}
.sidebarWrap {
  position: fixed;
  top: 0;
  left: 0;
}
.goodsItem {
  float: left;
  width: 44%;
  margin: 0 0.2rem 0.44rem 0.2rem;
  font-size: 0.37333rem;
  overflow: hidden;
}
.goodsItem img {
  width: 100%;
  height: 4.6rem;
  border-radius: 0.05333rem 0.05333rem 0 0;
}
</style>>
