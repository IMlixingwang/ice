<!--  无人机  -->
<template>
<div>
    <ul>
        <li v-for="(item,index) of list" :key="index">
            <div :style="{order:item.data.order[0]}">
                <span class="tengxiang">{{item.data.title}}</span>
                <span class="tengxiang">适合年龄：{{item.data.age}}</span>
                <span class="jiaoyue" @click="toLessonVideo(`6-${index}`)">{{item.data.description}}</span>
            </div>
            <img :src="item.data.src" alt="" :style="{order:item.data.order[1]}">
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name:'airplane',
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
    width: 86%;
    margin: 0 auto;
    flex-direction: column;

    li {
        display: flex;
        height: 15.625rem;

        div {
            width: 46%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 2%;
            span{
                &:first-child{
                    font-size: 2rem;
                    letter-spacing: 0.625rem;
                    margin-bottom: 0.5rem;
                    margin-top: 0.625rem;
                }
                 &:nth-child(2){
                    font-size: 1.125rem;
                    letter-spacing: 0.25rem;
                    margin-bottom: 0.25rem;
                }
                &:last-child{
                    font-size: 1.25rem;
                    text-indent: 2.5rem;
                    line-height: 2.25rem;
                    &:hover{
                        cursor: pointer;
                        text-decoration: underline;
                    }
                }
            }
        }

        img {
            width: 50%;
            height: auto;
        }

        &:first-child {
            background: url('http://139.224.164.231:9004/images/research-center/airplane/gudingyibimg.png') 0 0 no-repeat;
            background-size: 100% 100%;
            padding: 2.5rem 2.5rem 3.125rem 2.5rem;
            margin-bottom: 30px;
        }

        &:last-child {
            background: url('http://139.224.164.231:9004/images/research-center/airplane/duoxuanyibimg.png') 0 0 no-repeat;
            background-size: 100% 100%;
            padding: 2.5rem 1.25rem 3.125rem 2.5rem;

        }
    }
}
</style>
