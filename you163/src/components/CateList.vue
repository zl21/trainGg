<template>
  <div class="category">
    <h1>{{msg}}</h1>
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
      msg: "栏目页面"
    };
  },
  components: {
    FooterBar
  }
};
</script>

<style scoped lang="scss">
</style>>
