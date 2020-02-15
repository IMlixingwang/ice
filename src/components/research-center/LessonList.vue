<!--  课程界面  -->
<template>
<div>
    <div>
        <img src="http://139.224.164.231:9004/images/research-center/main.webp" width="100%" height="auto" alt="教研中心">
    </div>
    <div class="container">
        <div class="lesson_list lesson_common">
            <span>课程：</span>
            <ul>
                <li v-for="(item,index) of lessonList" :key="index" @click="setActiveItem(index)" :class="activeIndex==index?'active':''">{{item.name}}</li>
            </ul>
        </div>
        <div class="child_lesson_list lesson_common">
            <span>主题：</span>
            <ul>
                <li v-for="(item,index) of childLesslist" :key="index" @click="setChildActiveItem(index)" :class="[childActiveIndex==index?'active':'','theme']">{{item.name}}</li>
            </ul>
        </div>
    </div>
    <div class="directory">
        <span>目录</span>
        <ul>
            <li>第一课时:</li>
            <li>第二课时:</li>
            <li>第三课时:</li>
            <li>第四课时:</li>
            <li>第五课时:</li>
            <li>第六课时:</li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        setActiveItem(index) {
            // this.childLesslist = this.lessonList[index].category;
            this.activeIndex = index;
            this.childActiveIndex = 0;
        },
        setChildActiveItem(index) {
            this.childActiveIndex = index;
        }
    },
    computed: {
        childLesslist(){
            return this.lessonList[this.activeIndex].category || []
        }
    },
    data() {
        return {
            activeIndex: this.$route.params.category.split('-')[0],
            childActiveIndex: this.$route.params.category.split('-')[1],
            lessonList: [{
                    name: "幼儿搭建",
                    category: [{
                            name: '思维空间'
                        },
                        {
                            name: '动物王国'
                        },
                        {
                            name: '百变达人'
                        },
                        {
                            name: '疯狂数学'
                        },
                        {
                            name: '超酷车辆'
                        },
                        {
                            name: '太空探险'
                        }
                    ]
                },
                {
                    name: "中国传统文化特色",
                    category: [{
                            name: "四巧板"
                        },
                        {
                            name: "榫卯"
                        },
                        {
                            name: "孔明锁"
                        }
                    ]
                },
                {
                    name: "机器人",
                    category: [{
                            name: '非凡建筑'
                        },
                        {
                            name: '世界奇迹'
                        },
                        {
                            name: '机械奥秘'
                        },
                        {
                            name: '能源动力'
                        },
                        {
                            name: 'WeDo2.0'
                        },
                        {
                            name: 'EV3'
                        }
                    ]
                },
                {
                    name: "创意编程",
                    category: [{
                            name: 'Scratch3.0少儿启蒙'
                        },
                        {
                            name: 'Python人工智能编程'
                        },
                        {
                            name: 'NOIP信息学奥赛编程'
                        }
                    ]
                },
                {
                    name: "人工智能",
                    category: [{
                            name: 'MIcor:bit智能编程'
                        },
                        {
                            name: 'Adruio智能万物'
                        },
                        {
                            name: 'RPi万物互联'
                        }
                    ]
                },
                {
                    name: "3D打印",
                    category: [{
                            name: '3D小画家'
                        },
                        {
                            name: '3D设计师'
                        },
                        {
                            name: '3D工程师'
                        }
                    ]
                },
                {
                    name: "无人机",
                    category: [{
                            name: '固定翼'
                        },
                        {
                            name: '多旋翼'
                        }
                    ]
                },
                {
                    name: "创客沙龙",
                    category: [{
                            name: '幻想沙龙'
                        },
                        {
                            name: '创客大比拼'
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.lesson_common {
    display: flex;
    height: 2.5rem;
    line-height: 2.5rem;

    span {
        font-size: 1.25rem;
        font-weight: bold;
        color: #3B9BFB;
    }

    ul {
        display: flex;

        li {
            padding: 0 0.9375rem;
            border-radius: 1.25rem;

            &:hover {
                color: #fff;
                cursor: pointer;
                background-color: #3B9BFB;
            }
        }
    }
}

.active {
    color: #fff;
    background-color: #3B9BFB
}

.container {
    padding-top: 1.875rem;
    padding-bottom: 2.5rem;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.directory{
    display: flex;
    flex-direction: column;
    margin-bottom: 4.375rem;
    ul{
        margin-left: 35px;
        width: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 450px;
        justify-content: space-between;
        li{
            width: 80%;
            background: #B7D6F3;
            height: 50px;
            border-radius: 5px;
            cursor: pointer;
        }
    }
}
.theme {
    font-size: 0.875rem;
}
</style>
