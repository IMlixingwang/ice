<!--  vip 登陆页面  -->
<template>
<div>
    <img src="http://139.224.164.231:9004//images/vip/vip.png" alt="会员" width="100%" height="auto" />
    <div class="vip-login">
        <div @click="test">
            <span>我是校长</span>
        </div>
         <div>
            <span>我是老师</span>
        </div>
         <div>
            <span>我是学生</span>
        </div>
         <div>
            <span>我是家长</span>
        </div>
    </div>
</div>
</template>
<script>
export default {
methods: {
    test(){
        this.$router.push('/admin');
    }
},
}
</script>
<style lang='less' scoped>
.vip-login{
    height: 31.25rem;
    width: 37.5rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    div {
        width: 15rem;
        height: 12.5rem;
        box-sizing: border-box;
        background-image: url('../../assets/images/vip/base.png');
        background-size: 100% 100%;
        text-align: center;
        line-height: 12.5rem;
        font-size: 2.5rem;
        font-weight: bold;
        letter-spacing: 0.125rem;
        cursor: pointer;
        &:first-child:hover{
            background-image: url('../../assets/images/vip/headmaster.png');
        }
         &:nth-child(2):hover{
            background-image: url('../../assets/images/vip/teacher.png');
        }
         &:nth-child(3):hover{
            background-image: url('../../assets/images/vip/student.png');
        }
         &:last-child:hover{
            background-image: url('../../assets/images/vip/parents.png');
        }
    }
}

</style>