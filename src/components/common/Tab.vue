<!--  tab切换组件  -->
<template>
<div>
    <nav>
        <ul>
            <li v-for="(item,index) of itemList" :key="index">
                {{item}}
            </li>
        </ul>
    </nav>
    <div>
        
    </div>
</div>
</template>
<script>
export default {

}
</script>
<style lang='less' scoped>
</style>