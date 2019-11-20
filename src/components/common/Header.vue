<!-- header  -->
<template>
<header>
    <div class="login">
        <div class="fr">
            <span>登录|</span>
            <span>注册|</span>
            <span>加入我们</span>
        </div>
    </div>
    <div class="backimg">
        <span class="title">南昌大学机械创新创业基地</span>
    </div>
    <nav>
        <ul class="clear">
            <li v-for="(data,index) in list" :key="index">
                <router-link :to="data.path">{{data.name}}</router-link>
            </li>
        </ul>
    </nav>
</header>
</template>

<script>
export default {
    data() {
        return {
            list: [{
                    name: '网站首页',
                    path: '/home'
                },
                {
                    name: '教研中心',
                    path: '/teachcenter'
                }, {
                    name: '会员服务',
                    path: '/vipserve'
                },
                {
                    name: '品牌加盟',
                    path: '/brandjoin'
                },
                {
                    name: '关于我们',
                    path: '/about'
                }
            ]
        }
    },
}
</script>

<style lang="less" scoped>
header {
    height: 125px;
    width: 100%;

    .login {
        height: 15px;
        padding-right: 30px;

        .fr {
            cursor: pointer;

            span:hover {
                color: #3E9AD1;
            }
        }
    }

    .backimg {
        // 待优化简写
        background-image: url('../../assets/images/index/logo.png');
        background-position: left 30px top 0px;
        background-size: 58%;
        background-repeat: no-repeat;
        height: 45px;
        padding-left: 223px;
        padding-top: 30px;

        .title {
            font-size: 20px;
            color: #3E9AD1;
            font-weight: bold;
        }
    }

    nav {
        height: 35px;
        background-color: #3B9BFB;

        ul {
            display: block;
            height: 100%;
            font-size: 15px;
            line-height: 35px;
            width: 80%;
            margin: 0 auto;

            li {
                display: inline-block;
                width: 19%;
                text-align: center;
                position: relative;
                margin-right: 1%;
                a {
                    color: #fff;
                    cursor: pointer;
                }
                &::after {
                    content: "";
                    position: absolute;
                    right: -8px;
                    top: 7px;
                    height: 20px;
                    width: 2px;
                    background: #fff;
                }
                &:hover{
                    background: #0D4C99;
                }
                //去掉最后一个li的伪类
                &:last-child:after{
                    display:none;
                }
            }
        }

    }
}
</style>
