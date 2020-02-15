<!--  home  -->
<template>
<div>
    <el-carousel :interval="interval" :height="height">
        <el-carousel-item :key="index" v-for="(item,index) in carouselListOne">
            <img :src="item.src" :data-src="item.src" alt="" width="100%" height="auto" class="lazy">
        </el-carousel-item>
    </el-carousel>
    <div>
        <img src="http://139.224.164.231:9004/images/index/learn_tec.png" alt="学习创客技能" width="60%" height="auto" class="learn-tec">
        <img src="http://139.224.164.231:9004/images/index/lesson_pic.png" alt="课程图例" width="90%" height="auto" class="lesson-pic learn-tec">
    </div>
    <div>
        <img src="" data-src='http://139.224.164.231:9004/images/index/8_lessons.png' alt="8大课程" width="60%" height="auto" class="learn-tec eight-lesson lazy">
        <el-carousel :interval="interval" height="18.67rem">
            <el-carousel-item :key="index" v-for="(item,index) in carouselListTwo">
                <img :src="item.src" alt="" width="100%" height="auto" class="eight-lessons">
            </el-carousel-item>
        </el-carousel>
    </div>
    <div>
        <img src="" data-src="http://139.224.164.231:9004/images/index/base_introduce.png" alt="基地介绍" width="60%" height="auto" class="learn-tec base-introduce lazy">
        <div class="video">
            <video loop="loop" controls style="object-fit: cover;vertical-align:top" class="playvideo" autoplay="autoplay">
                <source src="http://139.224.164.231:9004/media/ice_introduce.mp4" type="video/mp4">
            </video>
            <img src="" data-src="http://139.224.164.231:9004/images/index/video_introduce.png" alt="" width="50%" height="auto" class="lazy">
        </div>
    </div>
    <div>
        <img src="" data-src="http://139.224.164.231:9004/images/index/cooperation.png" alt="基础介绍" width="60%" height="auto" class="learn-tec lazy">
        <img src="" data-src="http://139.224.164.231:9004/images/index/cooperation_module.png" alt="" width="100%" height="auto" class="lazy">
    </div>

</div>
</template>

<script>
import { lazyLoad } from 'plugin/lazyload';
export default {
    data() {
        return {
            height: '33.33rem',
            carouselListOne: [{
                    src: 'http://139.224.164.231:9004/images/index/main_slide_1.jpeg'
                },
                {
                    src: 'http://139.224.164.231:9004/images/index/main_slide_1.jpeg'
                },
                {
                    src: 'http://139.224.164.231:9004/images/index/main_slide_1.jpeg'
                }
            ],
            carouselListTwo: [{
                    src: 'http://139.224.164.231:9004/images/index/3d_1print.png'
                },
                {
                    src: 'http://139.224.164.231:9004/images/index/3d_1print.png'
                }
            ],
            interval: 3000

        }
    },
    created() {
        window.addEventListener('resize', () => {
            let width = document.documentElement.clientWidth;
            if (width > 1280) {
                this.height = '33.33rem'
            } else if (width > 980 && width < 1280) {
                this.height = '31.33rem'
            } else if (width > 750 && width < 980) {
                this.height = '30.33rem'
            } else {
                this.height = '29.33rem'
            }
        })
    },
    mounted() {
        setTimeout(() => {
            this.carouselListOne = this.carouselListOne.slice(0, 1)
            this.carouselListOne.push({
                src: 'http://139.224.164.231:9004/images/index/main_slide_2.jpeg'
            }, {
                src: 'http://139.224.164.231:9004/images/index/main_slide_3.jpeg'
            });
            this.carouselListTwo = this.carouselListTwo.slice(0, 1);
            this.carouselListTwo.push({
                src: 'http://139.224.164.231:9004/images/index/chuangeke_shalong_2.png'
            }, {
                src: 'http://139.224.164.231:9004/images/index/chuangyi_code_3.png'
            }, {
                src: 'http://139.224.164.231:9004/images/index/robot_4.png'
            }, {
                src: 'http://139.224.164.231:9004/images/index/artificial_intelligece_5.png'
            }, {
                src: 'http://139.224.164.231:9004/images/index/airplan_6.png'
            }, {
                src: 'http://139.224.164.231:9004/images/index/child_lesson_7.png'
            }, {
                src: 'http://139.224.164.231:9004/images/index/chinese_culture_8.png'
            }, )
            this.interval = 2500;
        }, 2000);
        // 启动懒加载
        lazyLoad();
    }

}
</script>

<style lang="less" scoped>
.el-carousel__item h3 {
    color: #fff;
    font-size: 1.2rem;
    opacity: 0.75;
    line-height: 33.33rem;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #fff;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #fff;
}

.learn-tec {
    margin: 0 auto;
    display: block;
}

.lesson-pic {
    margin-top: -14rem;
}

.eight-lesson {
    margin-top: -13.125rem;
}

.eight-lessons {
    margin-left: -0.67rem;
}

.base-introduce {
    margin-top: -1rem;
}

.video {
    height: 23.33rem;
}

.playvideo {
    width: 50%;
    height: 23.33rem;
    display: inline-block;
}

@media (max-width:750px) {
    .learn-tec {
        margin-top: -1rem;
    }
}

@media (min-width:750px) and (max-width:980px) {

    .lesson-pic {
        margin-top: -10rem;
    }

    .eight-lesson {
        margin-top: -11.125rem;
    }

}

@media (min-width:980px) and (max-width: 1280px) {
    .base-introduce {
        margin-top: -1.43rem;
    }

    .lesson-pic {
        margin-top: -11rem;
    }

    .eight-lesson {
        margin-top: -11.125rem;
    }
}
</style>
