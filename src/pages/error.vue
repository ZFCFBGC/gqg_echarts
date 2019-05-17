<template>
    <div class="qrerror">
        <Header title="扫码失败"></Header>
        <div style="height:0.44rem"></div>
        <div class="errorimg">
            <img src="img/common_icon_crroy@2x.png" alt="">
        </div>
        <div class="errortext">
            <p>设备({{}})已离线</p>
            <p>暂不可用，请稍候尝试！</p>
        </div>
        <div class="errorbtn">重新扫码</div>
    </div>
</template>
<script>
import Header from "~/components/common/header.vue"
export default {
    data(){
        return {

        }
    },
    components:{
        Header
    }
}
</script>
<style lang="less" scoped>
    .errorimg{
        margin:.945rem 1.17rem 0 1.17rem;
        img{
            width:1.405rem;
            height:1.405rem;
            background:rgba(218,238,255,1);
            opacity:0.5;
            border-radius:50%;
        }
    }
    .errortext{
        height:0.37rem;
        line-height:0.37rem;
        font-size:0.15rem;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(95,154,255,1);
        line-height:0.21rem;
        text-align:center;
        margin-top:0.18rem;
    }
    .errorbtn{
        height:0.34rem;
        width:0.8rem;
        background:rgba(91,146,255,1);
        border-radius:10px;
        font-size:0.14rem;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(254,254,255,1);
        line-height:0.34rem;
        text-align:center;
        margin:0.27rem auto;
    }
</style>
