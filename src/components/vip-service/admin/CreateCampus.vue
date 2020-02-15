<!--  新建校区  -->
<template>
<el-dialog :visible.sync="visible" title="创建新建校区账号" width="30%" :show-close=false :close-on-click-modal=false>
    <el-input placeholder="请输入内容"></el-input>
    <el-input placeholder="请输入内容"></el-input>
    <el-input placeholder="请输入内容"></el-input>
    <el-input placeholder="请输入内容"></el-input>
    <el-input placeholder="请输入内容"></el-input>
    <el-input placeholder="请输入内容"></el-input>
    <button @click="closeModal">取消</button>
</el-dialog>
</template>

<script>
export default {
    data() {
        return {
            centerDialogVisible: true
        };
    },
    props:['visible'],
    methods: {
        closeModal(){
            this.$emit('closeModal',false)
        }
    },
};
</script>
