<template>
  <div class="wraper">
    <Header />
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  }
};
</script>
<style lang="stylus" scoped>
.wraper
  width: 100%;
  height: 100%;
</style>