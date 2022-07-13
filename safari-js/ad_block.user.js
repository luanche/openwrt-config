// ==UserScript==
// @name        Ad Block
// @description This is your new file, start writing code
// @author       luanche
// @license MIT
// @match       https://91porn.com/*
// @run-at document-start
// @grant        none
// ==/UserScript==

function addNewStyle(newStyle) {
    var styleElement = document.getElementById('styles_js');

    if(!styleElement){
        styleElement = document.createElement('style');
        styleElement.type = 'text/css';
        styleElement.id = 'styles_js';
        document.getElementsByTagName('head')[0].appendChild(styleElement);
    }
    styleElement.appendChild(document.createTextNode(newStyle))
}

addNewStyle('display: none !important;')