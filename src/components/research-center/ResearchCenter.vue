<!--  research center  -->
<template>
<div>
    <img src="../../assets/images/research-center/main.png" width="100%" height="500px" alt="教研中心">
    <nav>
        <ul>
            <li v-for="(item,index) in navList" :key="index" @mouseenter="setActiveItem(index)" :class="act">{{item}}</li>
        </ul>
    </nav>
    <div>
        <el-carousel :interval="5000" height="400px" :autoplay=false indicator-position="none" ref="carousel" @change='dosomething'>
            <el-carousel-item :key="0">
                <img src="../../assets/images/research-center/slide_0.png" width="100%" height="100%" alt="">
            </el-carousel-item>
            <el-carousel-item :key="1">
                <img src="../../assets/images/research-center/slide_1.png" width="100%" height="100%" alt="">
            </el-carousel-item>
            <el-carousel-item :key="2">
                <img src="../../assets/images/research-center/slide_2.png" width="100%" height="100%" alt="">
            </el-carousel-item>
            <el-carousel-item :key="3">
                <img src="../../assets/images/research-center/slide_3.png" width="100%" height="100%" alt="">
            </el-carousel-item>
            <el-carousel-item :key="4">
                <img src="../../assets/images/research-center/slide_4.png" width="100%" height="100%" alt="">
            </el-carousel-item>
            <el-carousel-item :key="5">
                <img src="../../assets/images/research-center/slide_5.png" width="100%" height="100%" alt="">
            </el-carousel-item>
            <el-carousel-item :key="6">
                <img src="../../assets/images/research-center/slide_6.png" width="100%" height="100%" alt="">
            </el-carousel-item>
            <el-carousel-item :key="7">
                <img src="../../assets/images/research-center/slide_7.png" width="100%" height="100%" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            navList: ['幼儿搭建', '中国传统特色文化', '机器人', '创意编程', '人工智能', '3D打印', '无人机', '创客沙龙'],
            activeIndex:0
        }
    },
    methods: {
        setActiveItem(index) {
            this.activeIndex = index;
            this.$refs.carousel.setActiveItem(index);

        },
        dosomething(index){
            this.activeIndex = index;
            
        }
    },
}
</script>

<style lang="less" scoped>
nav {
    height: 60px;

    ul {
        display: block;
        width: 70%;
        margin: 0 auto;
        height: 30px;
        padding: 15px 0;

        li {
            display: inline-block;
            height: 30px;
            line-height: 30px;
            font-size: 16px;
            padding: 0 15px;
            box-sizing: border-box;
            border-radius: 10px;
            margin-left: 20px;
            cursor: pointer;

            &:first-child {
                margin-left: 53px;
            }

            &:hover {
                background-color: #0D4C99;
                color: #fff;
            }
        }

        .active {
            background-color: #0D4C99;
            color: #fff;
        }
    }
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>
