export const lazyLoad = () => {
    // 这个active是节流throttle所用的标志位(其实在这里没必要用节流,用了也无碍)
    let active  = false;
    const lazyLoad = () => {
        // throttle相关：200ms内只会执行一次lazyLoad方法 
        if (active) return;
        active = true;

        setTimeout(() => {
            // 获取所有class为lazy的img标签，这里由于之前已经把处理过的img标签的class删掉了  所以不会重复查找
            let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

            lazyImages.forEach(lazyImage => {
                // 判断元素是否进入viewport
                if (isInViewport(lazyImage)) {
                    // <img class="lazy" src="[占位图]" data-src="[真实url地址]" data-srcset="[不同屏幕密度下，不同的url地址]" alt="I'm an image!">
                    // ele.dataset.* 可以读取自定义属性集合，比如data-*
                    lazyImage.src = lazyImage.dataset.src;
                    // 删除class  防止下次重复查找到改img标签
                    lazyImage.classList.remove("lazy");
                }

                // 当全部处理完了，移除监听
                if (lazyImages.length === 0) {
                    document.removeEventListener("scroll", lazyLoad);
                    window.removeEventListener("resize", lazyLoad);
                    window.removeEventListener("orientationchange", lazyLoad);
                }
            })
            active = false;
        }, 200);
    }
    document.addEventListener("scroll", lazyLoad);
    document.addEventListener("resize", lazyLoad);
    document.addEventListener("orientationchange", lazyLoad);
}

function isInViewport(ele) {
    // 元素顶部 距离 视口左上角 的距离top <= 窗口高度 （反例：元素在屏幕下方的情况）
    // 元素底部 距离 视口左上角 的距离bottom > 0 (反例：元素在屏幕上方的情况)
    // 元素display样式不为none
    const notBelow = ele.getBoundingClientRect().top <= window.innerHeight + 250 ? true : false;
    const notAbove = ele.getBoundingClientRect().bottom >= 0 ? true : false;
    const visable = getComputedStyle(ele).display !== "none" ? true : false;
    return notBelow && notAbove && visable ? true : false;
}