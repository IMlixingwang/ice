<!--  查看校长信息  -->
<template>
<div>
    <span class="back" @click="lookInformation">返回</span>
    <div class="information">
        <p>校区账号：</p>
        <p>密&nbsp;&nbsp;码：</p>
        <p>校区名称：</p>
        <p>校&nbsp;&nbsp;长：</p>
        <p>校长电话：</p>
        <p>校长微信：</p>
        <p>地&nbsp;&nbsp;址：</p>
        <p>加盟课程：</p>
    </div>
</div>
</template>
<script>
export default {
    methods: {
        lookInformation(){
            this.$emit('lookInformation',false)
        }
    },
}
</script>
<style lang='less' scoped>
.back{
    display: block;
    height: 40px;
    padding: 20px 10px;
    line-height: 40px;
    color: #7ebdfb;
    letter-spacing: 5px;
    text-align: right;
}
.information{
    padding: 0px 60px;
    p{
        height: 30px;
        color: black;
        line-height: 30px;
        letter-spacing: 3px;
    }
}
</style>