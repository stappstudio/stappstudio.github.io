(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{254:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"we":"We","verbs":["craft","design","develop","publish","mantain"],"high-quality":"high-quality apps","helping you":"Helping you to","grow":"grow on mobile","improve satisfaction":"improve the customer satisfaction","reach goals":"reach your goals","contact":"Talk to us","email":"us@stapp.studio"},"br":{"we":"Nós","verbs":["criamos","projetamos","desenvolvemos","publicamos","mantemos"],"high-quality":"aplicativos de alta qualidade","helping you":"Te ajudamos a","grow":"crescer no mobile","improve satisfaction":"melhorar a satisfação do usuário","reach goals":"alcançar seus objetivos","contact":"Entre em contato","email":"contato@stapp.studio"}}'),delete t.options._Ctor}},263:function(t,e,n){var content=n(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("74a649cb",content,!0,{sourceMap:!1})},287:function(t,e,n){"use strict";n(263)},288:function(t,e,n){var o=n(61)((function(i){return i[1]}));o.push([t.i,"@media (max-width:1023px){\n.content-container[data-v-79e71a20],.main-section[data-v-79e71a20]{\n    min-height:calc(100vh - 5rem)\n}\n}\n.main-section[data-v-79e71a20]{\n  background-image:url(/img/bg/hero-bg.jpg);\n  background-color:rgba(2,0,66,.8);\n  background-blend-mode:darken;\n  background-size:cover;\n  background-repeat:no-repeat;\n  background-position:50%\n}\n.large-text[data-v-79e71a20]{\n  line-height:3rem!important\n}\n.verbs-slider.animated[data-v-79e71a20]{\n  -webkit-animation:slider-scroll-data-v-79e71a20 .5s ease-out 2s;\n          animation:slider-scroll-data-v-79e71a20 .5s ease-out 2s\n}\n.verbs-slider span[data-v-79e71a20]{\n    margin-top:0.5rem;\n    margin-bottom:0.5rem;\n    line-height:3rem!important\n}\n@-webkit-keyframes slider-scroll-data-v-79e71a20{\n0%{\n    transform:translateY(0)\n}\nto{\n    transform:translateY(-4rem)\n}\n}\n@keyframes slider-scroll-data-v-79e71a20{\n0%{\n    transform:translateY(0)\n}\nto{\n    transform:translateY(-4rem)\n}\n}\nbutton[data-v-79e71a20]:focus{\n  outline:0\n}",""]),t.exports=o},289:function(t,e,n){"use strict";var o=n(254),r=n.n(o);e.default=r.a},327:function(t,e,n){"use strict";n.r(e);n(29);var o={data:function(){return{sliderHeight:64,timeoutId:void 0}},destroyed:function(){document.querySelector(".verbs-slider").removeEventListener("animationend",this.onSliderAnimationEnd)},mounted:function(){document.querySelector(".verbs-slider").addEventListener("animationend",this.onSliderAnimationEnd)},methods:{onSliderAnimationEnd:function(t){t.target.classList.remove("animated");var e=t.target.children.length;t.target.children.forEach((function(t,n){var o=t.style.order;o||(o=n+1);var r=o-1;t.style.order=r<1?e:r})),t.target.offsetWidth,t.target.classList.add("animated")}}},r=(n(287),n(54)),l=n(289),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"main-section w-full overflow-x-hidden"},[n("div",{staticClass:"relative py-12 content-container flex flex-col justify-center"},[n("div",{staticClass:"w-full h-full lg:h-auto lg:pt-36 lg:pb-12 pl-8 pr-4 flex flex-col justify-center items-start"},[n("div",{staticClass:"large-text w-full flex flex-wrap justify-start items-center text-4xl lg:text-5xl text-white stapp-heading-text"},[n("span",[t._v(t._s(t.$t("we"))+"  ")]),t._v(" "),n("div",{staticClass:"verbs-slider-wrapper text-stapp-pink font-bold text-left h-16 overflow-hidden"},[n("div",{staticClass:"verbs-slider animated flex flex-col"},t._l(t.$t("verbs"),(function(e){return n("span",{key:e},[t._v(t._s(e)+"  ")])})),0)]),t._v(" "),n("span",{staticClass:"w-8/12"},[t._v(t._s(t.$t("high-quality")))])]),t._v(" "),n("div",{staticClass:"my-8 flex flex-wrap justify-start items-start text-xl text-white stapp-body-text"},[n("p",{staticClass:"w-full md:w-auto"},[t._v("\n          "+t._s(t.$t("helping you"))+" \n        ")]),t._v(" "),n("div",{staticClass:"ml-8 md:ml-0 flex flex-col items-start"},[n("p",[t._v(t._s(t.$t("grow")))]),t._v(" "),n("p",[t._v(t._s(t.$t("improve satisfaction")))]),t._v(" "),n("p",[t._v(t._s(t.$t("reach goals")))]),t._v(" "),n("a",{staticClass:"-ml-8 mt-8 px-8 py-3 rounded-full text-xl font-bold bg-stapp-pink text-white hover:bg-white hover:text-stapp-blue",attrs:{href:"mailto:"+t.$t("email")}},[t._v("\n            "+t._s(t.$t("contact"))+"\n          ")])])])])])])}),[],!1,null,"79e71a20",null);"function"==typeof l.default&&Object(l.default)(component);e.default=component.exports}}]);