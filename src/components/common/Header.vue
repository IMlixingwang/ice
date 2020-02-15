<!-- header  -->
<template>
<header>
    <div class="login">
        <!-- <div class="fr">
            <span>登录|</span>
            <span>注册|</span>
            <span>加入我们</span>
        </div> -->
    </div>
    <div class="backimg">
        <span class="title">南昌大学机械创新创业基地</span>
    </div>
    <nav>
        <ul class="clear">
            <li v-for="(data,index) in list" :key="index" :class="activePath == data.path ?'active':''">
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
                    path: '/researchrouter/researchcenter'
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
            ],
            activePath: ''
        }
    },
    watch: {
        $route: function (route) {
            this.activePath = route.path;
        }
    },
}
</script>

<style lang="less" scoped>
header {
    height: 8.3125rem;
    width: 100%;

    nav {
        height: 3.125rem;
        background-color: #3B9BFB;

        ul {
            display: block;
            height: 100%;
            font-size: 1rem;
            line-height: 3.125rem;
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
                    right: -0.53rem;
                    top: 1rem;
                    height: 1.33rem;
                    width: 0.13rem;
                    background: #fff;
                }

                &:hover {
                    background: #0D4C99;
                }

                //去掉最后一个li的伪类
                &:last-child:after {
                    display: none;
                }
            }
        }

    }
}

.active {
    background: #0D4C99;
}

.backimg {
    // 待优化简写
    background-image: url('http://139.224.164.231:9004/images/index/logo.png');
    background-position: left 2rem top 0px;
    background-size: 58%;
    background-repeat: no-repeat;
    height: 3rem;
    padding-left: 11.875rem;
    padding-top: 0.8125rem;

    .title {
        font-size: 1.375rem;
        color: #3E9AD1;
        font-weight: bold;
    }
}

.login {
    height: 1.375rem;
    padding-right: 2rem;
    font-size: 1rem;

    .fr {
        cursor: pointer;

        span:hover {
            color: #3E9AD1;
        }
    }
}

@media (max-width:750px) {
    .backimg {
        background-size: 100%;
        padding-left: 9.87rem;
        padding-top: 1rem;
    }
}

@media (max-width:750px) {
    .backimg {
        padding-left: 12.88rem;
        padding-top: 1rem;
        background-size: 65%;

        .title {
            font-size: 1.275rem;
        }
    }

}

@media (min-width:750px) and (max-width: 980px) {
    height: 6.8125rem;

    .backimg {
        padding-left: 9.88rem;
        background-size: 65%;

        .title {
            font-size: 1.275rem;
        }
    }
}

@media (min-width:980px) and (max-width:1280px) {
    height: 7.8125rem;

    .backimg {
        padding-left: 11.87rem;
        padding-top: 0.5rem;
        background-size: 60%;
    }
}
</style>
