// 适配文件
// console.log(123);
(function (win) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var metaEl = doc.querySelector('meta[name="viewport"]');
    var devicePixelRatio = win.devicePixelRatio;
    var tid;

    metaEl.setAttribute("content", "initial-scale=.5, maximum-scale=.5, minimum-scale=.5, user-scalable=no viewport-fit=cover")

    // console.log(doc, docEl, metaEl, devicePixelRatio)

    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        // 获取浏览器信息
        var ua = navigator.userAgent.toLowerCase();
        // 如果在ua里面找不到ipad，非ipad，普通手机适用
        if (!/ipad/.test(ua)) {
            if (width / 2 > 750) {
                width = 750 * devicePixelRatio
            }
            var rem = width / 10;
            docEl.style.fontSize = rem + "px";
        }
    }
    refreshRem();

    win.addEventListener("resize",
        function () {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300)
        },
        false);
    win.addEventListener("pageshow",
        function (e) {
            if (e.persisted) {
                clearTimeout(tid);
                tid = setTimeout(refreshRem, 300)
            }
        },
        false);

})(window)