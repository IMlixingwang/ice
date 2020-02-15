<!-- footer   -->
<template>
<footer class="backimg">
    <span class="title">江西袋鼠科技教育有限公司</span>
    <span class="title">南昌大学机械创新创业基地</span>
    <span class="title">地址: 南昌大学机电工程系学院四楼</span>
</footer>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.backimg {
    width: 100%;
    height: 3.125rem;
    position: absolute;
    bottom: 0px;
    // 待优化简写
    background-image: url('http://139.224.164.231:9004/images/index/footer_logo.png');
    background-position: left 1.875rem top -1.875rem;
    background-size: 12%;
    background-repeat: no-repeat;
    background-color: #3B9BFB;

    .title {
        font-size: 1.3125rem;
        color: #fff;
        margin-right: 1.5625rem;
        display: inline-block;
        height: 100%;
        line-height: 3.125rem;

        &:first-child {
            margin-left: 16.875rem;
        }

        margin-right: 3.125rem;

        &:last-child {
            margin-right: 0.625rem;
        }
    }
}

@media (min-width:980px) and (max-width:1280px) {
    .backimg {
        background-size: 14%;

        .title {
            font-size: 1.045rem;
            margin-right: 2.825rem;
            &:first-child {
                margin-left: 14.875rem;
            }
            &:last-child {
            margin-right: 0rem;
        }
        }
    }

}
@media (min-width:750px) and (max-width:980px) {

  .backimg {
        background-size: 12%;

        .title {
            font-size: 1.045rem;
            margin-right: 2.125rem;
            &:first-child {
                margin-left: 14.875rem;
            }
            &:last-child {
            margin-right: 0rem;
        }
        }
    }
}
@media (max-width:750px) {
     .backimg {
        background-size: 12%;
        .title{
                font-size: 9px;
             &:first-child {
                margin-left: 10.875rem;
            }
        }
     }
}
</style>
