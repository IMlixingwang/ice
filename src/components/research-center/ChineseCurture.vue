<!--  中国特色文化  -->
<template>
<div>
    <ul>
        <li v-for="(item,index) of list" :key="index" :style="item.style">
            <span class="teach-center-title" :style="{order:item.data.order[0]}">{{item.data.title}}</span>
            <span class="teach-center-age" :style="{order:item.data.order[1]}">{{item.data.age}}</span>
            <span class="teach-center-description" :style="{order:item.data.order[2]}" @click="toLessonVideo(`1-${index}`)">{{item.data.description}}</span>
            <img :src="item.data.src" alt="" :style="{order:item.data.order[3]}">
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
    display: flex;
    justify-content: space-around;

    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25%;
        padding: 1.25rem 0.3125rem 0 0.3125rem;
        height: 33.125rem;
        background: url('http://139.224.164.231:9004/images/research-center/chinese-curture/tesewenhua.png') 0 0 no-repeat;
        background-size: 100% 100%;
        img {
            width: 80%;
            height: auto;
        }
    }
}
</style>
