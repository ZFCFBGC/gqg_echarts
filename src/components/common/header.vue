<template>
  <van-nav-bar :title="title" fixed class="header"  @click-left="goBack()">
    <van-icon v-if="show" name="cross" slot="left"/>
    <van-icon v-else name="arrow-left" slot="left"/>
    <!-- <van-icon v-else name="ellipsis" slot="right"/> -->
  </van-nav-bar>
</template>
<script>
export default {
  props: ["title"],
  data() {
    return {
      show: false,
      show1: false,
      show2:false
    };
  },
  methods: {
        goBack: function() {
      this.$router.go(-1)
    },
    exit() {
      this.$app.finish()
    },
    jumpInPopup() {
      if (document.querySelectorAll('.v-modal')) {
        _.last(document.querySelectorAll('.v-modal')).classList.add('allow-jump')
        setTimeout(() => {
          _.last(document.querySelectorAll('.v-modal')).classList.remove('allow-jump')
        }, 100)
      }
    }
  },
  created() {
    if (this.title == "扫码失败" || this.title == "首页") {
      this.show = true;
      // if(this.title="消息"){
      //     this.show=true
      // }
      console.log(123);
      console.log();
    }
    // if (this.title == "消息") {
    //   this.show1 = true;
      
    // }
    // if(this.title == "申诉建议"){
    //   this.show2 = true;
    //   console.log('有进来了吗')
    // }
    // if(this.title == '设备派币'){
    //   this.show2 = true;
    // }
    console.log(this.title);
  }
};
</script>
<style lang="less">
.header {
  z-index:10000 !important;
  height: 0.44rem;
  line-height: 0.44rem;
  background: rgba(242, 242, 242, 1);
  .van-nav-bar__title {
    font-size: 0.18rem !important;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(0, 0, 0, 1);
  }
  .van-icon {
    font-size: 0.16rem;
    color: rgba(0, 0, 0, 1);
  }
}
</style>


