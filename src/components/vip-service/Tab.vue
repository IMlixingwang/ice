<!--  tab栏切换  -->
<template>
<nav>
    <ul>
        <li v-for="(item,index) of tabList" :key="index" @click="activeTab(index)" :class="activeItem === index?'activeTab':''">{{item}}</li>
    </ul>
</nav>
</template>

<script>
export default {
    data() {
        return {
            activeItem:0
        }
    },
    props: ['tabList'],
    methods: {
        activeTab(index){
            this.activeItem = index;
            this.$emit('activeTab',index);
        }
    },
}
</script>

<style lang='less' scoped>
ul{
    height: 55px;
    display: flex;
    justify-content: center;
    background: #7ebdfb;
    li{
        margin-left: 60px;
        height: 50px;
        line-height: 50px;
        font-size: 22px;
        letter-spacing: 4px;
        box-sizing: border-box;
        cursor: pointer;
        &:nth-child(1){
            margin-left: 0;
        }
        &:hover::after{
            content: '';
            display: block;
            border: 0.4px solid #fff;
            margin-top: -5px;
        }
    }
    .activeTab{
        &::after{
            content: '';
            display: block;
            border: 0.4px solid #fff;
            margin-top: -5px;
        }
    }
}
</style>
