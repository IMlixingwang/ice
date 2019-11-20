<!--  home  -->
<template>
<div>
    <!-- 优化 用v-for解决 -->
    <el-carousel :interval="2500" height="500px">
        <el-carousel-item :key="1">
            <img src='../../assets/images/index/main_slide_1.png' alt="" width="100%" height="100%">
        </el-carousel-item>
        <el-carousel-item :key="2">
            <img src='../../assets/images/index/main_slide_2.png' alt="" width="100%" height="100%">
        </el-carousel-item>
        <el-carousel-item :key="3">
            <img src='../../assets/images/index/main_slide_3.png' alt="" width="100%" height="100%">
        </el-carousel-item>
    </el-carousel>
    <div>
        <img src="../../assets/images/index/learn_tec.png" alt="学习创客技能" width="60%" height="140px" class="learn-tec">
        <img src="../../assets/images/index/lesson_pic.png" alt="课程图例" width="90%" height="550px" class="lesson-pic learn-tec">
    </div>
    <div>
        <img src="../../assets/images/index/8_lessons.png" alt="8大课程" width="60%" height="140px" class="learn-tec eight-lesson">
        <!-- 优化 用v-for解决 -->
        <el-carousel :interval="2500" height="280px">
            <el-carousel-item :key="1">
                <img src='../../assets/images/index/3d_1print.png' alt="" width="100%" height="100%" class="eight-lessons">
            </el-carousel-item>
            <el-carousel-item :key="2">
                <img src='../../assets/images/index/chuangeke_shalong_2.png' alt="" width="100%" height="100%" class="eight-lessons">
            </el-carousel-item>
            <el-carousel-item :key="3">
                <img src='../../assets/images/index/chuangyi_code_3.png' alt="" width="100%" height="100%" class="eight-lessons">
            </el-carousel-item>
            <el-carousel-item :key="4">
                <img src='../../assets/images/index/robot_4.png' alt="" width="100%" height="100%" class="eight-lessons">
            </el-carousel-item>
            <el-carousel-item :key="5">
                <img src='../../assets/images/index/artificial_intelligece_5.png' alt="" width="100%" height="100%" class="eight-lessons">
            </el-carousel-item>
            <el-carousel-item :key="6">
                <img src='../../assets/images/index/airplan_6.png' alt="" width="100%" height="100%" class="eight-lessons">
            </el-carousel-item>
            <el-carousel-item :key="7">
                <img src='../../assets/images/index/child_lesson_7.png' alt="" width="100%" height="100%" class="eight-lessons">
            </el-carousel-item>
            <el-carousel-item :key="8">
                <img src='../../assets/images/index/chinese_culture_8.png' alt="" width="100%" height="100%" class="eight-lessons">
            </el-carousel-item>
        </el-carousel>
    </div>
    <div>
        <img src="../../assets/images/index/base_introduce.png" alt="基础介绍" width="60%" height="140px" class="learn-tec ase-introduce">
        <img src="../../assets/images/index/vides.png" alt="" width="100%" height="100%" class="vedio">
    </div>
    <div>
        <img src="../../assets/images/index/cooperation.png" alt="基础介绍" width="60%" height="140px" class="learn-tec cooperation">
        <img src="../../assets/images/index/cooperation_module.png" alt="" width="100%" height="450px">
    </div>

</div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.el-carousel__item h3 {
    color: #fff;
    font-size: 18px;
    opacity: 0.75;
    line-height: 500px;
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
    margin-top: -150px;
}

.eight-lesson {
    margin-top: -131px;
}

.eight-lessons {
    margin-left: -10px;
}

.base-introduce {
    margin-top: -30px;
}

.vedio {
    margin-top: -230px;
}
.cooperation{
    margin-top: -123px;
}
</style>
