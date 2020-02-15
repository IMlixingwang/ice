<!--  课程卡片组件  -->
<template>
<div>
    <span :style="{order:order[0]}" class="title">{{title}}</span>
    <span :style="{order:order[1],fontFamily:'tengxiang',fontSize:'0.75rem'}" v-show="age.length > 0">适合年龄：{{age}}</span>
    <span :style="{order:order[2]}" class="hover description" @click="toLessonVideo()">{{description}}</span>
    <img :src="src" alt="" width="80%" height="auto" :style="{order:order[3]}" />
</div>
</template>

<script>
export default {
    props: ['title', 'age', 'description', 'src', 'order','path'],
    methods: {
        toLessonVideo(){
            this.$router.push({ name: 'lessonlist', params: { category: this.path}})
        }
    },
}
</script>

<style lang="less" scoped>
div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: space-around;
    padding-bottom: 0.75rem;
    position: relative;
    height: 28.25rem;
    transform: translate(0px, -1rem);
    .title {
        font-size: 2rem;
        letter-spacing: 0.8rem;
        margin-left: 0.8rem;
        font-family: 'tengxiang';
    }

    &:first-child {
        margin-top: -0.5rem
    }

    img {
        border-radius: 30px;
    }

    .description {
        text-indent: 2.5rem;
        letter-spacing: 0.25rem;
        line-height: 1.9rem;
        font-family: 'jiaoyue';
        font-size: 1.25rem;
    }

    .hover {
        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }

    &:after {
        position: absolute;
        bottom: -0.75rem;
        content: '';
        display: block;
        width: 100%;
        border-bottom: 0.75rem #fff dashed;
    }
}
</style>
