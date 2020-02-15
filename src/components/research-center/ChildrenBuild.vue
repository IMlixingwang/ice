<!--  幼儿搭建公用模板  -->
<template>
<ul class="container">
    <li v-for="(item,index) of list" :key="index" :style="item.style" class="father-li">
        <img :src="item.picDescription" alt="">
        <ul>
            <li v-for="(childItem,childIndex) of item.data" :key="childIndex" class="child-li">
                <div :style="{order:childItem.order[0]}">
                    <span class="teach-center-title" style="order:0">{{childItem.title}}</span>
                    <span class="teach-center-age" style="order:1" v-show="childItem.age.length > 0">适合年龄：{{childItem.age}}</span>
                    <span class="teach-center-description" style="order:2" @click="toLessonVideo(childItem.path)">{{childItem.description}}</span>
                </div>
                <img :src="childItem.src" :alt="childItem.title" width="80%" height="auto" :style="{order:childItem.order[1],marginTop:(index ==1&& childIndex==1)?'1.25rem':''}" />
            </li>
        </ul>
    </li>
</ul>
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
    }
}
</script>

<style lang="less" scoped>
.container {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;

    .father-li {
        display: flex;
        flex-direction: column;
        position: relative;
        padding-top: 1.8rem;
        border-radius: 3.49rem;
        width: 25%;

        .child-li {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 28.25rem;
            position: relative;

            // justify-content: center;
            &>div {
                display: flex;
                padding-bottom: 0.625rem;
                height: 10.625rem;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            img {
                border-radius: 1.875rem;
            }

            &:nth-child(odd):after {
                position: absolute;
                bottom: -0.75rem;
                content: '';
                display: block;
                width: 100%;
                border-bottom: 0.75rem #fff dashed;
            }

            &:nth-child(2n) {
                div {
                    margin-top: 0.9375rem;
                }
            }
        }

        &>img {
            position: absolute;
            top: 0;
            width: 55%;
            height: auto;
            align-self: center;
            transform: translateY(-50%);
        }
    }
}
</style>
