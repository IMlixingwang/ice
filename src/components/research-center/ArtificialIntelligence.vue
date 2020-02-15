<!--  人工智能  -->
<template>
<div>
    <ul>
        <li v-for="(item,index) of list" :key="index">
            <div :style="{order:item.data.order[0]}">
                <span class="tengxiang">{{item.data.title}}</span>
                <span class="tengxiang">{{item.data.age}}</span>
                <span class="tengxiang">{{item.data.functionName}}</span>
                <span class="jiaoyue description" @click="toLessonVideo(`4-${index}`)">{{item.data.description}}</span>
            </div>
            <img :src="item.data.src" alt="" width="100%" height="auto" :style="{order:item.data.order[1]}">
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name:"artificialIntelligence",
    props: ['list'],
        methods: {
        toLessonVideo(path){
        this.$router.push({ name: 'lessonlist', params: { category: path }})
        }
    },
}
</script>

<style lang="less" scoped>
.description{
    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
}
ul {
    display: flex;
    width: 86%;
    flex-direction: column;
    margin: 0 auto;

    li {
        display: flex;
        height: 250px;

        div {
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;

            // justify-content: space-between;
            span {
                margin-bottom: 0.75rem;

                &:first-child {
                    font-size: 2rem;
                    letter-spacing: 0.25rem;
                }

                &:nth-child(2) {
                    font-size: 1.0625rem;
                    letter-spacing: 0.25rem;
                }

                &:nth-child(3) {
                    width: 100%;
                    font-size: 0.875rem;
                    text-align: right;
                    letter-spacing: 0.25rem;

                }

                &:last-child {
                    font-size: 1.375rem;
                    letter-spacing: 0.25rem;
                    text-indent: 2.75rem;
                    line-height: 2.25rem;

                }
            }
        }

        img {
            width: 50%;
        }

        margin-bottom: 2.5rem;

        &:first-child {
            background: url('http://139.224.164.231:9004/images/research-center/artificial-intelligence/3-4-5-1.micorbit.png') 0 0 no-repeat;
            background-size: 100% 100%;
            padding: 0.625rem 2.5rem 5rem 1.25rem;
        }

        &:nth-child(2) {
            background: url('http://139.224.164.231:9004/images/research-center/artificial-intelligence/3-4-5-2.arduino.png') 0 0 no-repeat;
            background-size: 100% 100%;
            padding: 0.625rem 2.5rem 5rem 1.25rem;
        }

        &:nth-child(3) {
            background: url('http://139.224.164.231:9004/images/research-center/artificial-intelligence/3-4-5-2.arduino.png') 0 0 no-repeat;
            background-size: 100% 100%;
            padding: 0.9375rem 2.5rem 5rem 1.25rem;

            div {
                width: 48%;
                padding-right: 2%;
            }
        }

        &:last-child {
            background: url('http://139.224.164.231:9004/images/research-center/artificial-intelligence/chuangkesysbimg.png') 0 0 no-repeat;
            background-size: 100% 100%;
            padding: 0.9375rem 2.5rem 6rem 1.25rem;

            div {
                width: 48%;
                padding-left: 2%;
            }
        }
    }

}
</style>
