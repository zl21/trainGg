<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- 从当前的组件Home传一个值到HelloWorld组件去，引入、注册、使用并属性传参 -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
