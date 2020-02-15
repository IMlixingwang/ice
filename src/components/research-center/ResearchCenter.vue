<!--  research center  -->
<template>
<div>
    <div>
        <el-carousel :interval="5000" :autoplay=false :height="height" indicator-position="none" ref="carousel" @change='dosomething'>
            <el-carousel-item :key="item" v-for="item of srcList">
                <img :src="item" width="100%" height="auto" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
    <nav>
        <span>课程:</span>
        <ul>
            <li v-for="(item,index) in navList" :class="index == activeIndex ? 'active':''" :key="index" @click="setActiveItem(index)">{{item}}</li>
        </ul>
    </nav>
    <div class="lesson-list">
        <keep-alive>
            <component :is="activeItem.currentLesson" :list="activeItem.list" />
        </keep-alive>
    </div>
</div>
</template>

<script>
// 引入课程卡片组件
import lessondata from './lessondata';
import CreativeProgram from './CreativeProgram';
import ArtificialIntelligence from './ArtificialIntelligence';
import Airplane from './Airplane';
import Salon from './Salon'
import ChineseCurture from './ChineseCurture'
import ChildrenBuild from './ChildrenBuild'
export default {
    data() {
        return {
            navList: ['幼儿搭建', '中国传统特色文化', '机器人', '创意编程', '人工智能', '3D打印', '无人机', '创客沙龙'],
            activeIndex: 0,
            height: '25rem',
            srcList: ['http://139.224.164.231:9004/images/research-center/slide_0.webp'],
        }
    },
    components: {
        CreativeProgram,
        ArtificialIntelligence,
        Airplane,
        Salon,
        ChineseCurture,
        ChildrenBuild
    },
    computed: {
        activeItem() {
            let {
                childBuild,
                robots,
                chineseCurture,
                printe,
                salon,
                creativeProgram,
                artificialIntelligence,
                airplane
            } = lessondata;
            if (this.activeIndex == 0) {
                return {
                    currentLesson: ChildrenBuild,
                    list: childBuild
                }
            } else if (this.activeIndex == 1) {
                return {
                    currentLesson: ChineseCurture,
                    list: chineseCurture
                }
            } else if (this.activeIndex == 2) {
                return {
                    currentLesson: ChildrenBuild,
                    list: robots
                }
            } else if (this.activeIndex == 3) {
                return {
                    currentLesson: CreativeProgram,
                    list: creativeProgram
                }
            } else if (this.activeIndex == 4) {
                return {
                    currentLesson: ArtificialIntelligence,
                    list: artificialIntelligence
                }
            } else if (this.activeIndex == 5) {
                return {
                    currentLesson: ChildrenBuild,
                    list: printe
                }
            } else if (this.activeIndex == 6) {
                return {
                    currentLesson: Airplane,
                    list: airplane
                }
            } else {
                return {
                    currentLesson: Salon,
                    list: salon
                }
            }
        }
    },
    created() {
        window.addEventListener('resize', () => {
            let width = document.documentElement.clientWidth;
            if (width > 1280) {
                this.height = '25rem'
            } else if (width > 980 && width < 1280) {
                this.height = '23rem'
            } else if (width > 750 && width < 980) {
                this.height = '21rem'
            } else {
                this.height = '20rem'
            }
        })
    },
    mounted() {
        for (let i = 1; i <= 7; i++) {
            this.srcList.push(`http://139.224.164.231:9004/images/research-center/slide_${i}.webp`)
        }
    },
    methods: {
        setActiveItem(index) {
            this.activeIndex = index;
            this.$refs.carousel.setActiveItem(index);
        },
        dosomething(index) {
            this.activeIndex = index;
        }
    }
}
</script>

<style lang="less" scoped>
nav {
    height: 3.75rem;
    display: flex;
    align-items: center;

    span {
        font-size: 1.375rem;
        color: #3B9BFB;
    }

    ul {
        display: flex;
        width: 90%;
        margin: 0 auto;
        height: 1.875rem;
        padding: 0.9375rem 0;

        li {
            display: inline-block;
            height: 1.875rem;
            line-height: 1.875rem;
            font-size: 1rem;
            box-sizing: border-box;
            border-radius: 0.625rem;
            cursor: pointer;
            width: 12.5%;
            text-align: center;

            &:hover {
                background-color: #0D4C99;
                color: #fff;
            }

            .active {
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

.lesson-list {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;

    ul {
        display: flex;
        justify-content: space-around;

        li {
            display: flex;
            align-items: center;
            flex-direction: column;

            div {
                &:last-child {
                    margin-top: 1rem;

                    &::after {
                        display: none;
                    }
                }
            }
        }
    }
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 1.125rem;
    opacity: 0.75;
    line-height: 18.75rem;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

@media (max-width:750px) {
    nav {
        ul {
            width: 100%;

            li {
                font-size: 8px;
            }
        }
    }
}

@media (min-width:750px) and (max-width: 980px) {
    nav {
        ul {
            width: 90%;

            li {
                font-size: 11px;
            }
        }
    }
}

@media (min-width:980px) and (max-width: 1280px) {
    nav {
        ul {
            width: 90%;

            li {
                font-size: 12px;
            }

        }
    }
}
</style>
