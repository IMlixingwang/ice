<!--  创客沙龙  -->
<template>
<div>
    <ul>
        <li v-for="(item,index) of list" :key="index" :style="item.style">
            <span :style="{order:item.data.order[0]}" class="tengxiang">{{item.data.title}}</span>
            <span :style="{order:item.data.order[1]}" class="jiaoyue" @click="toLessonVideo(`7-${index}`)">{{item.data.description}}</span>
            <img :src="item.data.src" alt="" :style="{order:item.data.order[2]}">
        </li>
    </ul>
</div>
</template>

<script>
export default {
    props: ['list'],
      methods: {
        toLessonVideo(path){
        this.$router.push({ name: 'lessonlist', params: { category: path }})
        }
    },
}
</script>

<style lang="less" scoped>
ul {
    display: flex;
    justify-content: space-around;

    li {
        width: 360px;
        display: flex;
        flex-direction: column;
        align-items: center;
        &:first-child {
            background: url('http://139.224.164.231:9004/images/research-center/salon/3-4-8-1.salon.png') 0 0 no-repeat;
            background-size: 90% 90%;
            padding: 60px 40px 115px 43px;
        }

        &:last-child {
            background: url('http://139.224.164.231:9004/images/research-center/salon/3-4-8-2.biping.png') 0 0 no-repeat;
            background-size: 90% 90%;  
             padding: 87px 88px 110px 0px; 
        }
        img{
            width: 70%;
            height: auto;
        }
        span{
            &:first-child{
                text-align: center;
                font-size: 32px;
            }
            &:nth-child(2){
                font-size: 20px;
                text-indent: 40px;
                line-height: 36px;
                margin-bottom: 10px;
                width: 66%;
                &:hover{
                    cursor: pointer;
                    text-decoration: underline;
                }
            }
        }
    }
}
</style>
