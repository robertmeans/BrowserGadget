function clearForms(){var a;for(a=0;a<document.forms.length;a++)document.forms[a].reset()}function OnSubmitForm(){return 1==document.reference.dictionary.checked?document.reference.action="https://dictionary.com/browse/"+document.getElementById("sr_04").value:document.reference.action="https://www.thesaurus.com/browse/"+document.getElementById("sr_04").value,!0}function OnSubmitFormSwap(){return 1==document.reference.thesaurus.checked?document.reference.action="https://www.thesaurus.com/browse/"+document.getElementById("sr_04").value:document.reference.action="https://dictionary.com/browse/"+document.getElementById("sr_04").value,!0}function submitBing(){return 1==document.getElementById("bingImages").checked?document.bing.action="https://www.bing.com/images/search":1==document.getElementById("bingMaps").checked?document.bing.action="https://www.bing.com/maps/default.aspx":document.bing.action="https://www.bing.com/search",!0}function submitGoogle(){return 1==document.getElementById("googleImages").checked?document.google.action="https://images.google.com/images":1==document.getElementById("googleMaps").checked?document.google.action="https://maps.google.com/maps":document.google.action="https://www.google.com/search",!0}function submitYouTube(){var a=document.getElementById("sr_05").value,b=a.trim();return""!==b?($("#sr_05").val(b),document.youtube.action="https://www.youtube.com/results"):window.open("https://www.youtube.com","_blank"),!0}function submitURLFieldForm(){var a=document.getElementById("sr_02").value;return a.match(/^[a-zA-Z]+:\/\//)||(a="http://"+a),window.open(a),document.getElementsByName("urlField")[0].reset(),resetForm(),!1}function resetForm(){var a=document.getElementsByName("address")[0];a.focus(),a.value="http://"}if($(document).ready(function(){$(".bchk").change(function(){$(".bchk").not(this).prop("checked",!1)})}),$(document).ready(function(){$(".gchk").change(function(){$(".gchk").not(this).prop("checked",!1)})}),document.getElementsByName("address").length){window.onload=function(){resetForm()};var closefp=document.getElementsByClassName("closefp")[0]}$("a.back-to-top").click(function(){return $("html, body").animate({scrollTop:0},250),!1}),function(a,b){"object"==typeof exports&&"object"==typeof module?module.exports=b():"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?exports.AOS=b():a.AOS=b()}(this,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p="dist/",b(0)}([function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}var e=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a},f=c(1),g=(d(f),c(6)),h=d(g),i=c(7),j=d(i),k=c(8),l=d(k),m=c(9),n=d(m),o=c(10),p=d(o),q=c(11),r=d(q),s=c(14),t=d(s),u=[],v=!1,w={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},x=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(v=!0),v)return u=(0,r.default)(u,w),(0,p.default)(u,w.once),u},y=function(){u=(0,t.default)(),x()},z=function(){u.forEach(function(a,b){a.node.removeAttribute("data-aos"),a.node.removeAttribute("data-aos-easing"),a.node.removeAttribute("data-aos-duration"),a.node.removeAttribute("data-aos-delay")})},A=function(a){return!0===a||"mobile"===a&&n.default.mobile()||"phone"===a&&n.default.phone()||"tablet"===a&&n.default.tablet()||"function"==typeof a&&!0===a()},B=function(a){w=e(w,a),u=(0,t.default)();var b=document.all&&!window.atob;return A(w.disable)||b?z():(document.querySelector("body").setAttribute("data-aos-easing",w.easing),document.querySelector("body").setAttribute("data-aos-duration",w.duration),document.querySelector("body").setAttribute("data-aos-delay",w.delay),"DOMContentLoaded"===w.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?x(!0):"load"===w.startEvent?window.addEventListener(w.startEvent,function(){x(!0)}):document.addEventListener(w.startEvent,function(){x(!0)}),window.addEventListener("resize",(0,j.default)(x,w.debounceDelay,!0)),window.addEventListener("orientationchange",(0,j.default)(x,w.debounceDelay,!0)),window.addEventListener("scroll",(0,h.default)(function(){(0,p.default)(u,w.once)},w.throttleDelay)),w.disableMutationObserver||(0,l.default)("[data-aos]",y),u)};a.exports={init:B,refresh:x,refreshHard:y}},function(a,b){},,,,,function(a,b){(function(b){"use strict";function c(a,b,c){function d(b){var c=p,d=q;return p=q=void 0,v=b,s=a.apply(d,c)}function f(a){return v=a,t=setTimeout(k,b),z?d(a):s}function g(a){var c=a-u,d=a-v,e=b-c;return A?x(e,r-d):e}function i(a){var c=a-u,d=a-v;return void 0===u||c>=b||c<0||A&&d>=r}function k(){var a=y();return i(a)?l(a):void(t=setTimeout(k,g(a)))}function l(a){return t=void 0,B&&p?d(a):(p=q=void 0,s)}function m(){void 0!==t&&clearTimeout(t),v=0,p=u=q=t=void 0}function n(){return void 0===t?s:l(y())}function o(){var a=y(),c=i(a);if(p=arguments,q=this,u=a,c){if(void 0===t)return f(u);if(A)return t=setTimeout(k,b),d(u)}return void 0===t&&(t=setTimeout(k,b)),s}var p,q,r,s,t,u,v=0,z=!1,A=!1,B=!0;if("function"!=typeof a)throw new TypeError(j);return b=h(b)||0,e(c)&&(z=!!c.leading,A="maxWait"in c,r=A?w(h(c.maxWait)||0,b):r,B="trailing"in c?!!c.trailing:B),o.cancel=m,o.flush=n,o}function d(a,b,d){var f=!0,g=!0;if("function"!=typeof a)throw new TypeError(j);return e(d)&&(f="leading"in d?!!d.leading:f,g="trailing"in d?!!d.trailing:g),c(a,b,{leading:f,maxWait:b,trailing:g})}function e(a){var b=void 0===a?"undefined":i(a);return!!a&&("object"==b||"function"==b)}function f(a){return!!a&&"object"==(void 0===a?"undefined":i(a))}function g(a){return"symbol"==(void 0===a?"undefined":i(a))||f(a)&&v.call(a)==l}function h(a){if("number"==typeof a)return a;if(g(a))return k;if(e(a)){var b="function"==typeof a.valueOf?a.valueOf():a;a=e(b)?b+"":b}if("string"!=typeof a)return 0===a?a:+a;a=a.replace(m,"");var c=o.test(a);return c||p.test(a)?q(a.slice(2),c?2:8):n.test(a)?k:+a}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},j="Expected a function",k=NaN,l="[object Symbol]",m=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,p=/^0o[0-7]+$/i,q=parseInt,r="object"==(void 0===b?"undefined":i(b))&&b&&b.Object===Object&&b,s="object"==("undefined"==typeof self?"undefined":i(self))&&self&&self.Object===Object&&self,t=r||s||Function("return this")(),u=Object.prototype,v=u.toString,w=Math.max,x=Math.min,y=function(){return t.Date.now()};a.exports=d}).call(b,function(){return this}())},function(a,b){(function(b){"use strict";function c(a,b,c){function e(b){var c=p,d=q;return p=q=void 0,y=b,s=a.apply(d,c)}function f(a){return y=a,t=setTimeout(k,b),z?e(a):s}function h(a){var c=a-u,d=a-y,e=b-c;return A?w(e,r-d):e}function j(a){var c=a-u,d=a-y;return void 0===u||c>=b||c<0||A&&d>=r}function k(){var a=x();return j(a)?l(a):void(t=setTimeout(k,h(a)))}function l(a){return t=void 0,B&&p?e(a):(p=q=void 0,s)}function m(){void 0!==t&&clearTimeout(t),y=0,p=u=q=t=void 0}function n(){return void 0===t?s:l(x())}function o(){var a=x(),c=j(a);if(p=arguments,q=this,u=a,c){if(void 0===t)return f(u);if(A)return t=setTimeout(k,b),e(u)}return void 0===t&&(t=setTimeout(k,b)),s}var p,q,r,s,t,u,y=0,z=!1,A=!1,B=!0;if("function"!=typeof a)throw new TypeError(i);return b=g(b)||0,d(c)&&(z=!!c.leading,A="maxWait"in c,r=A?v(g(c.maxWait)||0,b):r,B="trailing"in c?!!c.trailing:B),o.cancel=m,o.flush=n,o}function d(a){var b=void 0===a?"undefined":h(a);return!!a&&("object"==b||"function"==b)}function e(a){return!!a&&"object"==(void 0===a?"undefined":h(a))}function f(a){return"symbol"==(void 0===a?"undefined":h(a))||e(a)&&u.call(a)==k}function g(a){if("number"==typeof a)return a;if(f(a))return j;if(d(a)){var b="function"==typeof a.valueOf?a.valueOf():a;a=d(b)?b+"":b}if("string"!=typeof a)return 0===a?a:+a;a=a.replace(l,"");var c=n.test(a);return c||o.test(a)?p(a.slice(2),c?2:8):m.test(a)?j:+a}var h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},i="Expected a function",j=NaN,k="[object Symbol]",l=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,n=/^0b[01]+$/i,o=/^0o[0-7]+$/i,p=parseInt,q="object"==(void 0===b?"undefined":h(b))&&b&&b.Object===Object&&b,r="object"==("undefined"==typeof self?"undefined":h(self))&&self&&self.Object===Object&&self,s=q||r||Function("return this")(),t=Object.prototype,u=t.toString,v=Math.max,w=Math.min,x=function(){return s.Date.now()};a.exports=c}).call(b,function(){return this}())},function(a,b){"use strict";function c(a,b){var c=window.document,f=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,g=new f(d);e=b,g.observe(c.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function d(a){a&&a.forEach(function(a){var b=Array.prototype.slice.call(a.addedNodes),c=Array.prototype.slice.call(a.removedNodes);b.concat(c).filter(function(a){return a.hasAttribute&&a.hasAttribute("data-aos")}).length&&e()})}Object.defineProperty(b,"__esModule",{value:!0});var e=function(){};b.default=c},function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function d(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(b,"__esModule",{value:!0});var e=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,g=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,h=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,i=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,j=function(){function a(){c(this,a)}return e(a,[{key:"phone",value:function(){var a=d();return!(!f.test(a)&&!g.test(a.substr(0,4)))}},{key:"mobile",value:function(){var a=d();return!(!h.test(a)&&!i.test(a.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),a}();b.default=new j},function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var c=function(a,b,c){var d=a.node.getAttribute("data-aos-once");b>a.position?a.node.classList.add("aos-animate"):void 0!==d&&("false"===d||!c&&"true"!==d)&&a.node.classList.remove("aos-animate")},d=function(a,b){var d=window.pageYOffset,e=window.innerHeight;a.forEach(function(a,f){c(a,e+d,b)})};b.default=d},function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(b,"__esModule",{value:!0});var e=c(12),f=d(e),g=function(a,b){return a.forEach(function(a,c){a.node.classList.add("aos-init"),a.position=(0,f.default)(a.node,b.offset)}),a};b.default=g},function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(b,"__esModule",{value:!0});var e=c(13),f=d(e),g=function(a,b){var c=0,d=0,e=window.innerHeight,g={offset:a.getAttribute("data-aos-offset"),anchor:a.getAttribute("data-aos-anchor"),anchorPlacement:a.getAttribute("data-aos-anchor-placement")};switch(g.offset&&!isNaN(g.offset)&&(d=parseInt(g.offset)),g.anchor&&document.querySelectorAll(g.anchor)&&(a=document.querySelectorAll(g.anchor)[0]),c=(0,f.default)(a).top,g.anchorPlacement){case"top-bottom":break;case"center-bottom":c+=a.offsetHeight/2;break;case"bottom-bottom":c+=a.offsetHeight;break;case"top-center":c+=e/2;break;case"bottom-center":c+=e/2+a.offsetHeight;break;case"center-center":c+=e/2+a.offsetHeight/2;break;case"top-top":c+=e;break;case"bottom-top":c+=a.offsetHeight+e;break;case"center-top":c+=a.offsetHeight/2+e}return g.anchorPlacement||g.offset||isNaN(b)||(d=b),c+d};b.default=g},function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var c=function(a){for(var b=0,c=0;a&&!isNaN(a.offsetLeft)&&!isNaN(a.offsetTop);)b+=a.offsetLeft-("BODY"!=a.tagName?a.scrollLeft:0),c+=a.offsetTop-("BODY"!=a.tagName?a.scrollTop:0),a=a.offsetParent;return{top:c,left:b}};b.default=c},function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var c=function(a){return a=a||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(a,function(a){return{node:a}})};b.default=c}])}),AOS.init({duration:500,easing:"ease-in-out-back"});