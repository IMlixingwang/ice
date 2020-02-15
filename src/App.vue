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
    },
    created() {
        (function () {
            const ua = navigator.userAgent;
            const matches = ua.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i);
            const isIos = navigator.appVersion.match(/(iphone|ipad|ipod)/gi);
            let dpr = window.devicePixelRatio || 1;
            if (!isIos && !(matches && matches[1] > 534)) {
                // 如果非iOS, 非Android4.3以上, dpr设为1;
                dpr = 1;
            }
            let scale = 1 / dpr;
            let metaEl = document.querySelector('meta[name="viewport"]');
            if (!metaEl) {
                metaEl = document.createElement('meta');
                metaEl.setAttribute('name', 'viewport');
                window.document.head.appendChild(metaEl);
            }
            metaEl.setAttribute('content', 'width=device-width,user-scalable=no,initial-scale=' + scale + ',maximum-scale=' + scale + ',minimum-scale=' + scale);

        })();
    }
    }
</script>

<style lang="less">
main {
    padding-bottom: 3.125rem;
}

#app {
    position: relative;
    min-height: 100%;
}

@media (max-width: 750px) {
    #app {
        width: 100%;
    }

    html,
    body {
        font-size: 10px
    }
}

@media (min-width: 750px) and (max-width: 980px) {
    #app {
        width: 100%;
    }

    html,
    body {
        font-size: 12px
    }
}

@media (min-width: 980px) and (max-width:1280px) {
    #app {
        width: 90%;
        margin: 0 auto;
    }

    html,
    body {
        font-size: 14px
    }

}

@media (min-width: 1280px) {
    #app {
        width: 1280px;
        margin: 0 auto;
    }

    html,
    body {
        font-size: 16px
    }
}
</style>
