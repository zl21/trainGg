<template>
  <div class="header">
    <!-- <h1>{{msg}}</h1> -->
    <van-row type="flex" justify="space-between">
      <van-col span="20">
        <van-field
          class="search"
          v-model="input_v"
          @input="fieldValFn"
          @keyup.enter="submitFn"
          placeholder="Pro会员专场·专属6折疯抢"
        >
          <!-- 使用插槽的方式插入 搜索框放大镜
        由于目前cli4中的van-field标签中的left/right-icon属性设置的icon会导致图标的size不正常
          -->
          <template v-slot:left-icon>
            <van-icon name="search" size=".48rem" />
          </template>
          <!-- 清空搜索框图标 -->
          <template #button>
            <van-icon v-show="isCloseShow" @click="claerInputFn" name="close" />
          </template>
        </van-field>
      </van-col>
      <van-col span="3" class="header_h">
        <van-button class="cancelBtn" type="primary" size="mini">登录</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SearchPage",
  data() {
    return {
      input_v: "",
      isCloseShow: false
    };
  },
  watch: {
    input_v() {
      // 监听到input_v改变时即显示清空输入框icon
      if (this.input_v) {
        this.isCloseShow = true;
      }
    }
  },
  // 页面一加载就执行
  created() {
    // console.log(1111111);
    // axios.get("http://localhost:3344/aaa").then(_d => {
    //   console.log(_d.data);
    // });
  },
  methods: {
    // 参数_v是用户实时输入的东西string
    fieldValFn(_v) {
      // 将用户输入的东西赋值给在watch中被监听的变量input_v
      this.input_v = _v;
      console.log(_v);
    },
    // 清空搜索框
    claerInputFn() {
      this.input_v = "";
      this.isCloseShow = false;
    },
    // enter按键的事件响应
    submitFn() {
      axios
        .get("http://localhost:3344/search", {
          params: { search_content: this.input_v }
        })
        .then(_d => {
          console.log(_d.data);
        });
    }
  }
};
</script>

<style scope>
.header {
  font-size: 0.5rem;
  padding: 0.2rem 0.4rem;
}
.search {
  padding-top: 0;
  padding-left: 0.26667rem;
  padding-bottom: 0;
  border: 0;
  background-color: #f4f4f4;
  height: 0.74667rem;
  line-height: 0.74667rem;
  border-radius: 4px;
  font-size: 0.37333rem;
}
.cancelBtn {
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
</style>