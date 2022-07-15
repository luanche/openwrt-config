// ==UserScript==
// @name          Ad block css
// @description	  Block ad by css
// @author        luanche
// @match         https://91porn.com/*
// @run-at        document-start
// @updateURL     https://raw.githubusercontent.com/luanche/openwrt-config/main/safari-js/ad_block.css.user.js
// ==/UserScript==

(function() {var css = [
	".ad_img {",
	"  display: none!important;   ",
	"}",
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
