!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){e.exports=n.p+"f3c18b98bab33c0fbedde9cb67bdfcf2.mp3"},function(e,t,n){e.exports=n.p+"c3c86e71f309dde162a2e9b52cbc702f.mp3"},function(e,t,n){e.exports=n.p+"319c77102049da3622a954acd189f1eb.mp3"},function(e,t,n){e.exports=n.p+"f4a912ee52e2c884a80499208c5568cc.mp3"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=u(n(3)),r=u(n(2)),c=u(n(1)),i=u(n(0));function u(e){return e&&e.__esModule?e:{default:e}}var l={blue:o.default,green:r.default,red:c.default,yellow:i.default};t.default=function e(t){"all"===t&&["blue","green","red","yellow"].forEach(e);var n=new Audio(l[t]);n.currentTime=0,n.play()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.turnOn=t.turnOff=t.toggleStrictMode=t.start=t.receivePlayerColor=t.playerColorReceived=t.isOn=t.hasColorBtnsEnabled=void 0;var o,r=n(4),c=(o=r)&&o.__esModule?o:{default:o};var i,u=!1,l=[],d=600,a=!1,s=[],f=null,v=[],m=!1,g=void 0,y=void 0,h=void 0,p=void 0,_=void 0,b=void 0,E=void 0,B=void 0,L=void 0,O=void 0,I=function(e,t){return s.push(setTimeout(e,t))},C=(t.hasColorBtnsEnabled=function(){return u},t.isOn=function(){return a},t.playerColorReceived=function(e){if(document.getElementById(e).classList.remove("device__button--"+e+"-on"),B())if(y(),20===l.length)_(e);else{g(),I(b,750);var t=2*l.length*d;I(O,750+t)}else L()},t.receivePlayerColor=function(e){var t=document.getElementById(e);t.classList.add("device__button--"+e+"-on"),clearTimeout(f),(0,c.default)(e),v.push(e),e!==l[v.length-1]&&(t.classList.remove("device__button--"+e+"-on"),p())},t.start=function(){l=[],d=600,E(),h(),g(),I(b,1e3);var e=2*l.length*d;I(O,1e3+e)});t.toggleStrictMode=function(){document.getElementById("strictLight").classList.toggle("device-center__strict-light--on"),m=!m},t.turnOff=function(){(a=!1,m)&&document.getElementById("strictLight").classList.remove("device-center__strict-light--on");E()},t.turnOn=function(){a=!0};g=function(){var e=["blue","green","red","yellow"],t=e[Math.floor(Math.random()*e.length)];l.push(t),5!==l.length&&9!==l.length&&13!==l.length||(d-=100)},y=function(){Array.from(document.getElementById("device").children).slice(0,4).forEach(function(e){return e.classList.remove("device__button--on")}),u=!1},i=function(){Array.from(document.getElementById("device").children).slice(0,4).forEach(function(e){return e.classList.add("device__button--on")}),u=!0},h=function(){for(var e=document.getElementById("countDiv"),t=0;t<4;t++)I(function(){return e.classList.toggle("device-center__count-display--on")},250*t)},p=function(){if(document.getElementById("countDiv").textContent="!!",y(),(0,c.default)("all"),m)C();else{var e=2*l.length*d;h(),I(b,1e3),I(O,1e3+e)}},_=function(e){var t=document.getElementById("countDiv");t.textContent="**";for(var n=0;n<6;n++)I(function(){(0,c.default)(e),t.classList.toggle("device-center__count-display--on")},250*n);I(function(){t.textContent="--"},6e3)},b=function(){document.getElementById("countDiv").textContent=l.length,v=[],l.forEach(function(e,t){var n=document.getElementById(e),o="device__button--"+e+"-on";I(function(){n.classList.add(o),(0,c.default)(e)},(2*t+1)*d),I(function(){return n.classList.remove(o)},(2*t+2)*d)})},E=function(){["blue","green","red","yellow"].forEach(function(e){document.getElementById(e).classList.remove("device__button--"+e+"-on")}),y(),document.getElementById("countDiv").textContent="--",s.forEach(function(e){return clearTimeout(e)}),s=[]},B=function(){return l.length===v.length&&l.every(function(e,t){return e===v[t]})},L=function(){f=setTimeout(p,5*d),s.push(f)},O=function(){i(),L()}},function(e,t,n){"use strict";var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(5));n(17);var r=function(e){o.hasColorBtnsEnabled()&&o.receivePlayerColor(e.target.id)},c=function(e){o.hasColorBtnsEnabled()&&o.playerColorReceived(e.target.id)};Array.from(document.getElementById("device").children).slice(0,4).forEach(function(e){e.addEventListener("mousedown",r),e.addEventListener("mouseup",c)}),document.getElementById("onOffBtn").addEventListener("click",function(e){var t=document.getElementById("countDiv"),n=Array.from(e.currentTarget.children);this.blur(),t.classList.toggle("device-center__count-display--on"),n.forEach(function(e){return e.classList.toggle("hidden")}),o.isOn()?o.turnOff():o.turnOn()}),document.getElementById("startBtn").addEventListener("click",function(){this.blur(),o.isOn()&&o.start()}),document.getElementById("strictBtn").addEventListener("click",function(){this.blur(),o.isOn()&&o.toggleStrictMode()})},,,,,,,,,,,function(e,t){}]);