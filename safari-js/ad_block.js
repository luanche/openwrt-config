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

addNewStyle('.ad_img {display: none;}')