!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o,c,r,i,u,l,d,a,f,s,m,v={blue:n.p+"60f3cc7d5750955854a536d996f5b08b.mp3",green:n.p+"be139b4b99ec2b2fae15c4c7be96b46f.mp3",red:n.p+"1eb5aa4cd41771f654062b51a6775db4.mp3",yellow:n.p+"3d5f915659a6055e6377a06055f0e1f7.mp3"},g=function e(t){if("all"===t){["blue","green","red","yellow"].forEach(e)}var n=new Audio(v[t]);n.currentTime=0,n.play()},y=!1,h=[],b=600,p=!1,E=[],_=null,L=[],B=!1,I=function(e,t){return E.push(setTimeout(e,t))},x=function(){return y},D=function(){return p},O=function(){h=[],b=600,a(),i(),o(),I(d,1e3);var e=2*h.length*b;I(m,1e3+e)};o=function(){var e=["blue","green","red","yellow"],t=e[Math.floor(Math.random()*e.length)];h.push(t),5!==h.length&&9!==h.length&&13!==h.length||(b-=100)},c=function(){Array.from(document.getElementById("device").children).slice(0,4).forEach((function(e){return e.classList.remove("device__button--on")})),y=!1},r=function(){Array.from(document.getElementById("device").children).slice(0,4).forEach((function(e){return e.classList.add("device__button--on")})),y=!0},i=function(){for(var e=document.getElementById("countDiv"),t=0;t<4;t++)I((function(){return e.classList.toggle("device-center__count-display--on")}),250*t)},u=function(){if(document.getElementById("countDiv").textContent="!!",c(),g("all"),B)O();else{var e=2*h.length*b;i(),I(d,1e3),I(m,1e3+e)}},l=function(e){var t=document.getElementById("countDiv");t.textContent="**";for(var n=0;n<6;n++)I((function(){g(e),t.classList.toggle("device-center__count-display--on")}),250*n);I((function(){t.textContent="--"}),6e3)},d=function(){document.getElementById("countDiv").textContent=h.length,L=[],h.forEach((function(e,t){var n=document.getElementById(e),o="device__button--".concat(e,"-on");I((function(){n.classList.add(o),g(e)}),(2*t+1)*b),I((function(){return n.classList.remove(o)}),(2*t+2)*b)}))},a=function(){["blue","green","red","yellow"].forEach((function(e){document.getElementById(e).classList.remove("device__button--".concat(e,"-on"))})),c(),document.getElementById("countDiv").textContent="--",E.forEach((function(e){return clearTimeout(e)})),E=[]},f=function(){return h.length===L.length&&h.every((function(e,t){return e===L[t]}))},s=function(){_=setTimeout(u,5*b),E.push(_)},m=function(){r(),s()};n(0);var T=function(e){var t,n;e.preventDefault(),x()&&(t=e.target.id,(n=document.getElementById(t)).classList.add("device__button--".concat(t,"-on")),clearTimeout(_),g(t),L.push(t),t!==h[L.length-1]&&(n.classList.remove("device__button--".concat(t,"-on")),u()))},j=function(e){e.preventDefault(),x()&&function(e){if(document.getElementById(e).classList.remove("device__button--".concat(e,"-on")),f())if(c(),20===h.length)l(e);else{o(),I(d,750);var t=2*h.length*b;I(m,750+t)}else s()}(e.target.id)};Array.from(document.getElementById("device").children).slice(0,4).forEach((function(e){e.addEventListener("touchstart",T),e.addEventListener("touchend",j),e.addEventListener("mousedown",T),e.addEventListener("mouseup",j)})),document.getElementById("onOffBtn").addEventListener("click",(function(e){var t=document.getElementById("countDiv"),n=Array.from(e.currentTarget.children);this.blur(),t.classList.toggle("device-center__count-display--on"),n.forEach((function(e){return e.classList.toggle("hidden")})),D()?function(){(p=!1,B)&&document.getElementById("strictLight").classList.remove("device-center__strict-light--on");a()}():p=!0})),document.getElementById("startBtn").addEventListener("click",(function(){this.blur(),D()&&O()})),document.getElementById("strictBtn").addEventListener("click",(function(){this.blur(),D()&&(document.getElementById("strictLight").classList.toggle("device-center__strict-light--on"),B=!B)}))}]);