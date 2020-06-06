<template>
  <div class="category">
    <div class="sidebarWrap">
      <van-sidebar v-model="activeKey"><van-sidebar-item v-for="(item,index) in sidebarArr" :key="index" :title="item.txt" /></van-sidebar>
    </div>

    <!-- footerTabbar -->
    <FooterBar />
  </div>
</template>

<script>
import FooterBar from "./FooterBar";
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
      ]
    };
  },
  components: {
    FooterBar
  }
};
</script>

<style scoped lang="scss">
</style>>
