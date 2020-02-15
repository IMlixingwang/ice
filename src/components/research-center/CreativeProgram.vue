<!--  创意编程组件 -->
<template>
<div>
    <ul>
        <li v-for="(item,index) of list" :key="index">
            <span :style="{order:item.data.order['0']}" class="teach-center-title ">{{item.data.title}}</span>
            <span :style="{order:item.data.order['1']}" class="teach-center-title">{{item.data.lessonName}}</span>
            <span :style="{order:item.data.order['2']}" class="teach-center-age">适合年龄：{{item.data.age}}</span>
            <span :style="{order:item.data.order['3']}" class="tengxiang ar">学习语言：{{item.data.lessonLanguage}}</span>
            <span :style="{order:item.data.order['4']}" @click="toLessonVideo(`3-${index}`)" class="teach-center-description">{{item.data.description}}</span>
            <img :style="{order:item.data.order['5']}" :src="item.data.src" alt="" width="100%" height="auto">
        </li>
    </ul>
</div>
</template>

<script>
export default {
    props: ['list'],
    methods: {
        toLessonVideo(path) {
            this.$router.push({
                name: 'lessonlist',
                params: {
                    category: path
                }
            })
        }
    },
}
</script>

<style lang="less" scoped>
ul {
    width: 100%;
    display: flex;
    justify-content: space-between;

    li {
        display: flex;
        flex-direction: column;
        width: 20%;
        align-items: center;
        span{
             &:nth-child(1){
                letter-spacing: 0.4375rem;
            }
             &:nth-child(2){
                letter-spacing: 0.25rem;
            }
             &:nth-child(4){
                width: 100%;
                text-align: right;
            }
            &:nth-child(5){
                letter-spacing: 0;
            }
        }

        &:first-child {
            padding: 1.875rem 3.125rem 0 3.4375rem;
            background: url('http://139.224.164.231:9004/images/research-center/create-program/3-4-4-1.scratch3.0.png') 0 0 no-repeat;
            background-size: 100% 100%;
        }

        &:nth-child(2) {
            background: url('http://139.224.164.231:9004/images/research-center/create-program/3-4-4-2.python.png') 0 0 no-repeat;
            background-size: 100% 100%;
            padding: 3.125rem 3.4375rem 0 2.4375rem;
             span{
                &:nth-child(4){
                    text-align: center;
                }
            }
        }

        &:last-child {
            padding: 1.875rem 3.4375rem 0 2.4375rem;
            background: url('http://139.224.164.231:9004/images/research-center/create-program/3-4-4-3.noip.png') 0 0 no-repeat;
            background-size: 100% 100%;
            span{
                &:nth-child(2){
                    letter-spacing: 0.0625rem;
                }
            }
        }
        img {
            width: 100%;
            height: 15.5rem;
        }
    }
}

@media (max-width:750px) {}

@media (min-width:750px) and (max-width:980px) {

       ul{
        li{
            span{
                &:nth-child(2){
                    letter-spacing: 0px;
                    font-size: 1.125rem;
                }
            }
        }
    }
}

@media (min-width:980px) and (max-width: 1280px) {
    ul{
        li{
            span{
                &:nth-child(2){
                    letter-spacing: 0px;
                    font-size: 1.4375rem;
                }
            }
        }
    }
}

@media (min-width:1280px) {}
</style>
