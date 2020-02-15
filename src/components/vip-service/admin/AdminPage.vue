<!--  管理员页面  -->
<template>
<div>
    <div class="welcome">
        <div>
            <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" alt="">
        </div>
        <span>欢迎您，管理员</span>
    </div>
    <div>
        <tab :tabList="tabList" @activeTab="activeTab" />
    </div>
    <div class="tab">
        <keep-alive>
            <component :is="currentTab" @lookInformation="lookInformation" />
        </keep-alive>
    </div>
</div>
</template>

T

<script>
import Tab from '../Tab.vue';
import CampusManagement from './CampusManagement.vue';
import CourseManagement from './CourseManagement.vue';
import CheckInformation from './CheckInformation';
export default {
    data() {
        return {
            circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
            tabList: ['校区管理', '课程管理'],
            activeTabItem: 0,
            clickLookInformation: false, // 是否点击了查看信息 
        }
    },
    components: {
        Tab,
        CampusManagement,
        CourseManagement
    },
    methods: {
        activeTab(value) {
            this.activeTabItem = value;
        },
        lookInformation(value) {
            this.clickLookInformation = value;
        }
    },
    computed: {
        currentTab() {
            if (this.activeTabItem == 0) {
                if (this.clickLookInformation == false) {
                    return CampusManagement;
                } else {
                    return CheckInformation;
                }
            } else {
                return CourseManagement;
            }
        }
    },
}
</script>

<style lang="less" scoped>
.welcome {
    height: 300px;
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #7ebdfb;

    &>div {
        width: 120px;
        height: 120px;
        border-radius: 120px;
        background: skyblue;

        img {
            width: 100px;
            height: 100px;
            margin: 10px;
            border-radius: 100px;
        }
    }

    span {
        font-size: 50px;
        font-weight: bold;
    }
}
</style>
