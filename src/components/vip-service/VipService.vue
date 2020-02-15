<!--  vip-service  -->
<template>
<div>
    <img src="http://139.224.164.231:9004//images/vip/vip.png" alt="会员" width="100%" height="auto">
    <div class="vip-tips">
        <span>对不起,您的权限不足!</span>
        <span>您没有权限浏览,请先登录会员</span>
        <!-- <span @click="centerDialogVisible = true"></span> -->
        <span>第三方账号注册</span>
        <div class="vx_logo">
            <img src="http://139.224.164.231:9004//images/vip/vx.png" class="vxicon" height="auto" @click="centerDialogVisible = true">
        </div>
        <span>注册表示您已同意服务协议</span>
    </div>

    <el-dialog :visible.sync="centerDialogVisible" width="30%" center custom-class="vx-model">
        <span class="dialog-span vx-login">微信登录</span>
        <span slot="title"></span>
        <img src="http://139.224.164.231:9004//images/vip/vip_code.jpg" alt="" width="100%" height="auto">
        <span class="dialog-span vx-scan">扫码关注ICE创客基地公众号进行登录</span>
        <span class="dialog-span vx-agreement">注册表示您已阅读和同意服务协议</span>
    </el-dialog>
</div>
</template>

<script>
export default {
    data() {
        return {
            centerDialogVisible: false
        }
    },

}
</script>

<style lang="less">
.vip-tips {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 25rem;
    margin: 0.625rem auto;
    border: 1px solid #3B9BFB;

    span:first-child {
        font-size: 4.375rem;
        color: #3B9BFB;
        height: 6.25rem;
        line-height: 6.25rem;
        font-weight: bold;
        margin-top: -3.125rem;
    }

    span:nth-child(2) {
        font-size: 1.875rem;
        color: #3B9BFB;
        height: 3.125rem;
        line-height: 3.125rem;
        margin-top: 0.625rem;
    }
       span:nth-child(3) {
        font-size: 1rem;
        color: #3B9BFB;
        height: 3.125rem;
        line-height: 3.125rem;
        margin-top: 0.625rem;
    }
    span:last-child{
        font-size: 0.85rem;
        letter-spacing: 1px;
    }
    .vx_logo{
        width: 6.25rem;
        height: 6.25rem;
        background-color: #07C160;
        border-radius: 50%;
        img{
            width:85%;
            height: auto;
            margin-top: 0.925rem;
            margin-left: 0.625rem;
        }
    }
    span:last-child {
     margin-top: 0.5rem;
    }
}

.vxicon {
    width: 6.3rem;
    cursor: pointer;
}

.dialog-span {
    display: block;
    text-align: center;
}

.vx-login {
    font-size: 2rem;
    font-weight: bold;
    color: #3B9BFB;
    letter-spacing: 0.75rem;
    text-indent: 0.75rem;
}

.vx-scan {
    color: #3B9BFB;
    font-size: 1rem;
    letter-spacing: 0.15rem;
}

.vx-agreement {
    font-size: 0.75rem;
}

.vx-model {
    .el-dialog__header {
        height: 0;
        padding: 0;
    }
}
</style>
