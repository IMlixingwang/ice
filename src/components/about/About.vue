<!--  about  -->
<template>
<div>
    <img src="http://139.224.164.231:9004/images/about/about.webp" alt="关于我们" width="100%" height="auto">
    <section>
        <p class="ac">ICE简介</p>
        <img src="http://139.224.164.231:9004/images/about/ice_jianjie.png" alt="ice简介" width="80%" height="auto" class="ice_png">
    </section>
    <section>
        <p class="ac">课程特色</p>
        <img src="http://139.224.164.231:9004/images/about/course_characteristic.png" alt="" width="100%" height="auto">
    </section>
    <section>
        <p class="ac">产品研发</p>
        <ul class="product_research">
            <li>
                <img src="http://139.224.164.231:9004/images/about/1.webp" alt="ice图形化编程软件" width="100%" height="auto">
                <span class="ac">ice图形化编程软件</span>
            </li>
            <li>
                <img src="http://139.224.164.231:9004/images/about/2.webp" alt="三代主控板" width="100%" height="auto">
                <span class="ac">三代主控板</span>
            </li>
            <li>
                <img src="http://139.224.164.231:9004/images/about/3.webp" alt="自主定义界面" width="100%" height="auto">
                <span class="ac">自主定义界面</span>
            </li>
        </ul>
    </section>
    <section>
        <p class="ac">应用场景</p>
        <ul class="application_scenarios">
            <li>
                <div>
                    <img src="http://139.224.164.231:9004/images/about/4.webp" alt="">
                </div>
                <span>幼儿园</span>
                <span>环境创设及智能一体化教学平台</span>
            </li>
            <li>
                <div>
                    <img src="http://139.224.164.231:9004/images/about/5.webp" alt="">
                </div>
                <span>中小学</span>
                <span>融合创客教育整体解决方案</span>
            </li>
            <li>
                <div>
                    <img src="http://139.224.164.231:9004/images/about/6.webp" alt="">
                </div>
                <span>校外机构</span>
                <span>多个教育创新项目矩阵布局校外终端</span>
            </li>
        </ul>
    </section>
    <section class="event_scenarios">
        <p class="ac">赛事场景</p>
        <ul>
            <li>
                <img src='' class='lazy' data-src="http://139.224.164.231:9004/images/about/dengyuxin_1.webp" alt="">
            </li>
            <li>
                <img src='' class='lazy' data-src="http://139.224.164.231:9004/images/about/huangyudan_2.webp" alt="">
            </li>
            <li>
                <img src='' class='lazy' data-src="http://139.224.164.231:9004/images/about/xiepengji_3.webp" alt="">
            </li>
            <li>
                <img src='' class='lazy' data-src="http://139.224.164.231:9004/images/about/ferris_wheel_4.webp" alt="">
            </li>
            <li>
                <img src='' class='lazy' data-src="http://139.224.164.231:9004/images/about/artificial_intelligence_5.webp" alt="">
            </li>
            <li>
                <img src='' class='lazy' data-src="http://139.224.164.231:9004/images/about/airport_6.webp" alt="">
            </li>
            <li>
                <img src='' class='lazy' data-src="http://139.224.164.231:9004/images/about/target_7.webp" alt="">
            </li>
            <li>
                <img src='' class='lazy' data-src="http://139.224.164.231:9004/images/about/traffic_8.webp" alt="">
            </li>
            <li>
                <img src='' class='lazy' data-src="http://139.224.164.231:9004/images/about/age_9.webp" alt="">
            </li>
        </ul>
    </section>
    <section class="report">
        <p class="ac">媒体报道</p>
        <ul>
            <li>
                <img src='' data-src="http://139.224.164.231:9004/images/about/report_1.webp" alt="" class="lazy">
            </li>
            <li>
                <img src = '' data-src="http://139.224.164.231:9004/images/about/report_2.webp" alt="" class="lazy">
            </li>
        </ul>
    </section>
</div>
</template>

<script>
import {
    lazyLoad
} from 'plugin/lazyload';
export default {
    mounted() {
        lazyLoad();
    },
}
</script>

<style lang="less" scoped>
section {
    padding-top: 10px;

    p {
        font-size: 24px;
        color: #3B9BFB;
        letter-spacing: 6px;
        font-weight: bold;
        padding-bottom: 10px;
    }
}

.ice_png {
    width: 80%;
    display: block;
    margin: 0 auto;
}

.product_research {
    li {
        display: inline-block;

        &:first-child,
        &:last-child {
            width: 38%
        }

        &:nth-child(2) {
            width: 24%;
        }

        span {
            display: block;
        }
    }
}

.application_scenarios {
    li {
        width: 29.333%;
        padding: 8px 2%;
        display: inline-block;

        div {
            width: 100%;
            height: auto;

            img {
                width: 80%;
                height: auto;
                display: block;
                margin: 0 auto;
            }
        }

        span {
            display: block;
            text-align: center;
        }
    }
}

.event_scenarios {
    ul {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        li {
            width: 29.33%;
            padding: 5px 2%;

            img {
                width: 100%;
                height: auto;
            }
        }
    }
}

.report {
    ul {
        display: flex;

        li {
            width: 40%;
            padding: 5px 5%;

            img {
                width: 100%;
                height: auto;
            }
        }
    }
}
</style>
