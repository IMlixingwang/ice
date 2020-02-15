<!--  校区管理  -->
<template>
<div>
    <div class="tabTop">
        <el-button type="primary" round @click="visible = true">新建校区</el-button>
        <!-- <input type="text" placeholder="搜索校区" class="fr"> -->
        <div class="search fr">
            <el-input placeholder="搜索校区" prefix-icon="el-icon-search" class="fr">
            </el-input>
        </div>
    </div>
    <el-table :data="headerTeacherList" style="width: 100%;">
        <el-table-column prop="id" label="编号" style="width: 10%;" align="center">
        </el-table-column>
        <el-table-column prop="name" label="名称" style="width: 30%;" align="center">
        </el-table-column>
        <el-table-column prop="headerTeacher" label="校长" style="width: 10%;" align="center">
        </el-table-column>
        <el-table-column prop="telNumber" label="联系方式" style="width: 20%;" align="center">
        </el-table-column>
        <el-table-column label="操作" style="width: 30%;" align="center">
            <template>
                <el-button type="text" size="small" @click="lookInformation">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
                <el-button type="text" size="small">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <create-campus :visible="visible" @closeModal="closeModal"/>
</div>
</template>

<script>
// 引入新建校区组件
import CreateCampus from './CreateCampus.vue';
export default {
    data() {
        return {
            headerTeacherList: [{
                id: 'ICE001',
                name: "南昌市红谷滩分校",
                headerTeacher: '李仁浩',
                telNumber: '15270019190'
            }],
            visible:false,  // 创建校区弹框默认不可见
        }
    },
    components: {
        CreateCampus
    },
    methods: {
        closeModal(value){
            this.visible = value;
        },
        lookInformation(){
            this.$emit('lookInformation',true)
        }
    },
}
</script>

<style lang="less" scoped>
.tabTop {
    height: 40px;
    padding: 20px 0 20px 0;
    margin: 0 40px;

    .search {
        width: 200px;
    }
}
</style>
