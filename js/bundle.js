!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";r.r(t);r(2);var n=[];function o(){var e=window.innerWidth;document.querySelectorAll(".swiper").forEach((function(t,r){e<=767?n[r]||(n[r]=new Swiper(t,{pagination:{el:".swiper-pagination",clickable:!0},slidesPerView:1.3,spaceBetween:16,slidesPerGroup:1,loopedSlides:5,loop:!0})):n[r]&&(n[r].destroy(!0,!0),n[r]=null)}))}o(),window.addEventListener("resize",o),document.getElementById("toggleButton").style.setProperty("--rotate","45deg"),document.getElementById("toggleButtonSlider").style.setProperty("--rotate","45deg"),document.getElementById("buttonSwitch").style.setProperty("--rotate","45deg"),window.readMore=function(){var e=document.getElementById("toggleButton"),t=document.querySelectorAll(".hidden"),r=document.querySelectorAll(".large-screen-hidden");window.innerWidth>=1366?""===r[0].style.display||"none"===r[0].style.display?(r.forEach((function(e){e.style.display="grid"})),e.innerHTML="Скрыть",e.style.setProperty("--rotate","225deg")):(r.forEach((function(e){e.style.display="none"})),e.innerHTML="Показать все",e.style.setProperty("--rotate","45deg")):""===t[0].style.display||"none"===t[0].style.display?(t.forEach((function(e){e.style.display="grid"})),e.innerHTML="Скрыть",e.style.setProperty("--rotate","225deg")):(t.forEach((function(e){e.style.display="none"})),e.innerHTML="Показать все",e.style.setProperty("--rotate","45deg"))},window.showMore=function(){var e=document.getElementById("toggleButtonSlider"),t=document.querySelectorAll(".latent"),r=document.querySelectorAll(".large-screen-latent");window.innerWidth>=1366?""===r[0].style.display||"none"===r[0].style.display?(r.forEach((function(e){e.style.display="grid"})),e.innerHTML="Скрыть",e.style.setProperty("--rotate","225deg")):(r.forEach((function(e){e.style.display="none"})),e.innerHTML="Показать все",e.style.setProperty("--rotate","45deg")):""===t[0].style.display||"none"===t[0].style.display?(t.forEach((function(e){e.style.display="grid"})),e.innerHTML="Скрыть",e.style.setProperty("--rotate","225deg")):(t.forEach((function(e){e.style.display="none"})),e.innerHTML="Показать все",e.style.setProperty("--rotate","45deg"))},window.readFurther=function(){var e=document.getElementById("buttonSwitch"),t=document.querySelectorAll(".info__close"),r=document.querySelectorAll(".info__open");window.innerWidth>=1366?""===r[0].style.display||"none"===r[0].style.display?(r.forEach((function(e){e.style.display="grid"})),e.innerHTML="Скрыть",e.style.setProperty("--rotate","225deg")):(r.forEach((function(e){e.style.display="none"})),e.innerHTML="Читать далее",e.style.setProperty("--rotate","45deg")):""===t[0].style.display||"none"===t[0].style.display?(t.forEach((function(e){e.style.display="grid"})),e.innerHTML="Скрыть",e.style.setProperty("--rotate","225deg")):(t.forEach((function(e){e.style.display="none"})),e.innerHTML="Читать далее",e.style.setProperty("--rotate","45deg"))};var l=document.querySelector(".header__button--chat"),i=document.querySelector(".lateral-feedback__close"),d=document.querySelector(".lateral-feedback"),s=document.querySelector(".side-footer__button--chat");l.addEventListener("click",(function(){d.classList.add("lateral-feedback__overview")})),i.addEventListener("click",(function(){d.classList.remove("lateral-feedback__overview")})),s.addEventListener("click",(function(){d.classList.add("lateral-feedback__overview")}));var c=document.querySelector(".header__button--call"),a=document.querySelector(".order-call__close"),u=document.querySelector(".order-call"),y=document.querySelector(".side-footer__button--call");c.addEventListener("click",(function(){u.classList.add("order-call__overview")})),a.addEventListener("click",(function(){u.classList.remove("order-call__overview")})),y.addEventListener("click",(function(){u.classList.add("order-call__overview")}));var f=document.querySelector(".side-menu"),p=document.querySelector(".header__button--burger"),v=document.querySelector(".side-menu__button--exit"),m=document.querySelector(".wrapper"),g=document.querySelector(".header");p.addEventListener("click",(function(){f.classList.add("side-menu__overview"),m.classList.add("side-blur"),g.classList.add("side-blur")})),v.addEventListener("click",(function(){f.classList.remove("side-menu__overview"),m.classList.remove("side-blur"),g.classList.remove("side-blur")})),window.addEventListener("click",(function(e){f.contains(e.target)||p.contains(e.target)||(f.classList.remove("side-menu__overview"),m.classList.remove("side-blur"),g.classList.remove("side-blur"))}))},function(e,t,r){}]);
//# sourceMappingURL=bundle.js.map