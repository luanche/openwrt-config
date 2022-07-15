// ==UserScript==
// @name          Ad Block
// @description   This is your new file, start writing code
// @author        luanche
// @license       MIT
// @match         https://91porn.com/*
// @run-at        document-end
// @updateURL     https://raw.githubusercontent.com/luanche/openwrt-config/main/safari-js/ad_block.user.js
// @version       1.0
// @grant         none
// ==/UserScript==

function adsRemove_Auto() {
    var i;
    setTimeout(() => {
        var ads_host_css = ".ad_img";
        var huge = document.querySelectorAll(ads_host_css);
        for (i = 0; i < huge.length; i++) {
            huge[i].remove();
        }
    }, 500);

    timecount += 1;
    console.log("循环第" + timecount + "次")
    if (timecount === 1) {
        clearInterval(id);
        console.log("循环结束！")
    }
}

adsRemove_Auto();
var timecount = 0;
var id = setInterval(adsRemove_Auto, 1000);