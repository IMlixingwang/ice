<template>
<div id="app">
    <Header />
    <main>
        <router-view />
    </main>
    <Footer />
</div>
</template>

<script>
import Footer from './components/common/Footer';
import Header from './components/common/Header';
export default {
    components: {
        Footer,
        Header
    }
}
</script>

<style lang="less">
main{
  padding-bottom: 50px;
}
</style>
