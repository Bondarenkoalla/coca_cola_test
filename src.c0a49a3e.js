parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./..\\images\\stars.png":[["stars.1abb47d2.png","Yu9C"],"Yu9C"],"./..\\images\\dedcoca.png":[["dedcoca.ebf9150b.png","UNBI"],"UNBI"],"./..\\images\\back2.png":[["back2.a5ca97d8.png","Z85u"],"Z85u"],"./..\\images\\back3.png":[["back3.b50836d7.png","lZsA"],"lZsA"],"./..\\images\\checkbox.png":[["checkbox.0eb96d2b.png","M68x"],"M68x"],"./..\\images\\snow.png":[["snow.f7c8167f.png","cBXE"],"cBXE"],"./..\\images\\cloud.png":[["cloud.2ac84d37.png","ScWZ"],"ScWZ"]}],"Focm":[function(require,module,exports) {
"use strict";function e(){var t=document.getElementById("blnk");"visible"==t.style.visibility?(t.style.visibility="hidden",setTimeout(e,400)):(t.style.visibility="visible",setTimeout(e,2e3))}require("./sass/main.scss"),setTimeout(e,0);var t=screen.width,s=document.querySelector(".presents-list"),i=document.querySelector(".selected-product");function r(e){if("LI"==e.target.nodeName){i.style.border=t>=1200?"3px solid #ffffff":"none";var s=document.querySelector(".checked");null==s||s.classList.remove("checked"),e.target.classList.add("checked"),"1"===e.target.id?i.innerHTML='<img src="/pres1.ed728cab.png" class="selected-product-photo" height="239px"/><h4 class="product-header">Best sock ever</h4><p class="prouct-info">Reuglar sock have no present inside Lorem Ipsum is simply dumm y text of the printing and types etting industry. Lorem</p>':"2"===e.target.id?i.innerHTML='<img src="/pres2.83893b2f.png" class="selected-product-photo" height="148px"/><h4 class="product-header">Best hat ever</h4><p class="prouct-info">Reuglar hat have no present inside Lorem Ipsum is simply dumm y text of the printing and types etting industry. Lorem</p>':i.innerHTML='<img src="/pres3.e43f42fa.png" class="selected-product-photo" height="171px"/><h4 class="product-header">Best bag ever</h4><p class="prouct-info">Reuglar bag have no present inside Lorem Ipsum is simply dumm y text of the printing and types etting industry. Lorem</p>',console.log(e.target.id,e.target.img)}}s.addEventListener("click",r);var n=document.querySelector(".burger-menu-icons"),c=document.querySelector(".burger-menu-icon"),o=document.querySelector(".burger-menu-close-icon"),l=document.querySelector(".mobile-menu");function d(e){o.classList.toggle("hidden"),c.classList.toggle("hidden"),l.classList.toggle("hidden")}n.addEventListener("click",d);var u=function(){var e=document.querySelectorAll(".select__header"),t=document.querySelectorAll(".select__item");function s(){this.parentElement.classList.toggle("is-active")}function i(){var e=this.innerText,t=this.closest(".select");t.querySelector(".select__current").innerText=e,t.classList.remove("is-active")}e.forEach(function(e){e.addEventListener("click",s)}),t.forEach(function(e){e.addEventListener("click",i)})};u();
},{"./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=/coca_cola_test/src.c0a49a3e.js.map