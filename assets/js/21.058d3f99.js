(window.webpackJsonp=window.webpackJsonp||[]).push([[21,32],{310:function(t,e,n){"use strict";var l=n(7),i=n(4),a=n(93),o=n(19),u=n(9),r=n(26),s=n(314),c=n(46),p=n(3),g=n(29),f=n(67).f,d=n(25).f,h=n(8).f,v=n(312).trim,m=i.Number,y=m.prototype,b="Number"==r(g(y)),N=function(t){var e,n,l,i,a,o,u,r,s=c(t,!1);if("string"==typeof s&&s.length>2)if(43===(e=(s=v(s)).charCodeAt(0))||45===e){if(88===(n=s.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(s.charCodeAt(1)){case 66:case 98:l=2,i=49;break;case 79:case 111:l=8,i=55;break;default:return+s}for(o=(a=s.slice(2)).length,u=0;u<o;u++)if((r=a.charCodeAt(u))<48||r>i)return NaN;return parseInt(a,l)}return+s};if(a("Number",!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var x,S=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof S&&(b?p((function(){y.valueOf.call(n)})):"Number"!=r(n))?s(new m(N(e)),n,S):N(e)},_=l?f(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),C=0;_.length>C;C++)u(m,x=_[C])&&!u(S,x)&&h(S,x,d(m,x));S.prototype=y,y.constructor=S,o(i,"Number",S)}},311:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},312:function(t,e,n){var l=n(24),i="["+n(311)+"]",a=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),u=function(t){return function(e){var n=String(l(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:u(1),end:u(2),trim:u(3)}},313:function(t,e,n){"use strict";n(310),n(28),n(47),n(316),n(165),n(172);var l=null;e.a={props:{padding:{type:[Number,String],default:null},paddingX:{type:[Number,String],default:null},paddingY:{type:[Number,String],default:null},paddingTop:{type:[Number,String],default:null},paddingBottom:{type:[Number,String],default:null},paddingLeft:{type:[Number,String],default:null},paddingRight:{type:[Number,String],default:null},gap:{type:[Number,String],default:0},gapX:{type:[Number,String],default:0},gapY:{type:[Number,String],default:0},horizontalAlign:{type:String,default:"default"},verticalAlign:{type:String,default:"default"}},computed:{paddingClass:function(){var t=this.padding,e=this.paddingX,n=this.paddingY,l=this.paddingTop,i=this.paddingBottom,a=this.paddingLeft,o=this.paddingRight;if("string"==typeof this.padding){var u=this.padding.split(" ").filter((function(t){return t.length}));switch(u.length>=2&&u.length<=4&&(t=e=n=l=i=a=o=null),u.length){case 2:n=u[0],e=u[1];break;case 3:l=u[0],e=u[1],i=u[2];break;case 4:l=u[0],o=u[1],i=u[2],a=u[3]}}var r=[];return null!==t&&r.push("layout-u-p-".concat(t)),null!==e&&r.push("layout-u-px-".concat(e)),null!==n&&r.push("layout-u-py-".concat(n)),null!==l&&r.push("layout-u-pt-".concat(l)),null!==i&&r.push("layout-u-pb-".concat(i)),null!==a&&r.push("layout-u-pl-".concat(a)),null!==o&&r.push("layout-u-pr-".concat(o)),r}},mounted:function(){this.$el.addEventListener("mouseleave",this.onMouseLeave),this.$el.addEventListener("mousemove",this.onMouseMove)},beforeDestroy:function(){this.$el.removeEventListener("mouseleave",this.onMouseLeave),this.$el.removeEventListener("mousemove",this.onMouseMove)},methods:{getGapClass:function(t){var e=this.gap,n=this.gapX,l=this.gapY;if("string"==typeof this.gap){var i=this.gap.split(" ").filter((function(t){return t.length}));2===i.length&&(e=null,l=i[0],n=i[1])}var a=[];return 0!==e&&a.push("".concat(t,"--gap-").concat(e)),0!==n&&a.push("".concat(t,"--gap-x-").concat(n)),0!==l&&a.push("".concat(t,"--gap-y-").concat(l)),a},getHorizontalAlignClass:function(t){return-1!==["default","stretch","left","center","right"].indexOf(this.horizontalAlign)?"".concat(t,"--horizontal-align-").concat(this.horizontalAlign):null},getVerticalAlignClass:function(t){return-1!==["default","stretch","top","center","bottom"].indexOf(this.verticalAlign)?"".concat(t,"--vertical-align-").concat(this.verticalAlign):null},onMouseMove:function(t){var e,n;this.$el.matches(".layout-u-debug div")&&(t.stopPropagation(),e=this.$el,null!==(n=l)&&void 0!==n&&n.isSameNode(e)||(l&&l.classList.remove("layout--debug"),e.classList.add("layout--debug"),l=e))},onMouseLeave:function(){var t,e;t=this.$el,null!==(e=l)&&void 0!==e&&e.isSameNode(t)&&(l.classList.remove("layout--debug"),l=null)}}}},314:function(t,e,n){var l=n(5),i=n(68);t.exports=function(t,e,n){var a,o;return i&&"function"==typeof(a=e.constructor)&&a!==n&&l(o=a.prototype)&&o!==n.prototype&&i(t,o),t}},316:function(t,e,n){"use strict";var l=n(168),i=n(166),a=n(6),o=n(24),u=n(94),r=n(169),s=n(15),c=n(170),p=n(95),g=n(167).UNSUPPORTED_Y,f=[].push,d=Math.min;l("split",2,(function(t,e,n){var l;return l="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var l=String(o(this)),a=void 0===n?4294967295:n>>>0;if(0===a)return[];if(void 0===t)return[l];if(!i(t))return e.call(l,t,a);for(var u,r,s,c=[],g=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,h=new RegExp(t.source,g+"g");(u=p.call(h,l))&&!((r=h.lastIndex)>d&&(c.push(l.slice(d,u.index)),u.length>1&&u.index<l.length&&f.apply(c,u.slice(1)),s=u[0].length,d=r,c.length>=a));)h.lastIndex===u.index&&h.lastIndex++;return d===l.length?!s&&h.test("")||c.push(""):c.push(l.slice(d)),c.length>a?c.slice(0,a):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=o(this),a=null==e?void 0:e[t];return void 0!==a?a.call(e,i,n):l.call(String(i),e,n)},function(t,i){var o=n(l,t,this,i,l!==e);if(o.done)return o.value;var p=a(t),f=String(this),h=u(p,RegExp),v=p.unicode,m=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(g?"g":"y"),y=new h(g?"^(?:"+p.source+")":p,m),b=void 0===i?4294967295:i>>>0;if(0===b)return[];if(0===f.length)return null===c(y,f)?[f]:[];for(var N=0,x=0,S=[];x<f.length;){y.lastIndex=g?0:x;var _,C=c(y,g?f.slice(x):f);if(null===C||(_=d(s(y.lastIndex+(g?x:0)),f.length))===N)x=r(f,x,v);else{if(S.push(f.slice(N,x)),S.length===b)return S;for(var I=1;I<=C.length-1;I++)if(S.push(C[I]),S.length===b)return S;x=N=_}}return S.push(f.slice(N)),S}]}),g)},362:function(t,e,n){"use strict";n.r(e);var l={name:"LayoutFlexColumn",mixins:[n(313).a],computed:{noRemainClass:function(){return this.$slots.remain?null:"layout-flex-column--no-remain"},noTopClass:function(){return this.$slots.top?null:"layout-flex-column--no-top"},noBottomClass:function(){return this.$slots.bottom?null:"layout-flex-column--no-bottom"}}},i=n(45),a=Object(i.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-flex-column",class:[t.getHorizontalAlignClass("layout-flex-column"),t.getGapClass("layout-flex-column"),t.paddingClass,t.noRemainClass,t.noTopClass,t.noBottomClass]},[t.$slots.top?n("div",{staticClass:"layout-flex-column__top"},[t._t("top")],2):t._e(),t._v(" "),n("div",{staticClass:"layout-flex-column__remain"},[t._t("remain",[t._t("default")])],2),t._v(" "),t.$slots.bottom?n("div",{staticClass:"layout-flex-column__bottom"},[t._t("bottom")],2):t._e()])}),[],!1,null,null,null);e.default=a.exports}}]);