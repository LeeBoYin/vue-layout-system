(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{315:function(t,e,n){},317:function(t,e,n){"use strict";n(315)},318:function(t,e,n){"use strict";n.r(e);n(310),n(320),n(171),n(69);var i={props:{name:{type:[Number,String],default:null},width:{type:[Number,String],default:null},height:{type:[Number,String],default:null},size:{type:String,default:null},solid:{type:Boolean,default:!1},inline:{type:Boolean,default:!1},showSize:{type:Boolean,default:!1},resizable:{type:Boolean,default:!1},resizableX:{type:Boolean,default:!1},resizableY:{type:Boolean,default:!1}},computed:{sizeStyle:function(){var t,e,n={s:{width:60,height:40},m:{width:120,height:80},l:{width:240,height:160}},i=this.width||(null===(t=n[this.size])||void 0===t?void 0:t.width)||null,o=this.height||(null===(e=n[this.size])||void 0===e?void 0:e.height)||null;return{width:null!==i&&Number.isInteger(+i)?"".concat(i,"px"):i,height:null!==o&&Number.isInteger(+o)?"".concat(o,"px"):o}},sizeHint:function(){return[null===this.sizeStyle.width||"initial"===this.sizeStyle.width?"auto":this.sizeStyle.width,null===this.sizeStyle.height||"initial"===this.sizeStyle.height?"auto":this.sizeStyle.height].join(" x ")},sizeHintStyle:function(){return this.showSize?{"--grey-box-size-hint":"'".concat(this.sizeHint,"'")}:null},textCenterClass:function(){if(null!==this.name&&!this.$slots.default)return"grey-box--text-content"},solidClass:function(){return this.solid?"grey-box--solid":null},inlineClass:function(){return this.inline?"grey-box--inline":null},resizableClass:function(){return this.resizable?"grey-box--resizable":this.resizableX?"grey-box--resizable-x":this.resizableY?"grey-box--resizable-y":null}}},o=(n(317),n(45)),r=Object(o.a)(i,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"grey-box",class:[t.textCenterClass,t.solidClass,t.inlineClass,t.resizableClass],style:[t.sizeStyle,t.sizeHintStyle]},[t._t("default",[t._v(t._s(t.name))])],2)}),[],!1,null,"355fc4b6",null);e.default=r.exports},319:function(t,e,n){"use strict";n.d(e,"b",(function(){return p})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return u})),n.d(e,"a",(function(){return a}));var i=n(30),o=(n(165),n(999)),r=n(977),l=n(978),s={type:"range",max:10,min:0,step:1},u={type:"select",options:["top","center","bottom","stretch"]},a={type:"select",options:["topLeft","top","topRight","right","bottomRight","bottom","bottomLeft","left","center"]},c={padding:{propsValue:{paddingTop:5,paddingBottom:5,paddingLeft:5,paddingRight:5},propsConfig:{paddingTop:s,paddingBottom:s,paddingLeft:s,paddingRight:s}},gap:{propsValue:{gap:5},propsConfig:{gap:s}},gapXY:{propsValue:{gapX:5,gapY:5},propsConfig:{gapX:s,gapY:s}},horizontalAlign:{propsValue:{horizontalAlign:"stretch"},propsConfig:{horizontalAlign:{type:"select",options:["left","center","right","stretch"]}}},verticalAlign:{propsValue:{verticalAlign:"stretch"},propsConfig:{verticalAlign:u}},absoluteSlotName:{propsValue:{absoluteSlotName:"topLeft"},propsConfig:{absoluteSlotName:a}}};function p(t){return o.a.apply(void 0,[{}].concat(Object(i.a)(Object(r.a)(Object(l.a)(c,t),"propsValue"))))}function d(t){return o.a.apply(void 0,[{}].concat(Object(i.a)(Object(r.a)(Object(l.a)(c,t),"propsConfig"))))}},327:function(t,e,n){var i=n(1),o=n(3),r=n(16),l=n(25).f,s=n(7),u=o((function(){l(1)}));i({target:"Object",stat:!0,forced:!s||u,sham:!s},{getOwnPropertyDescriptor:function(t,e){return l(r(t),e)}})},328:function(t,e,n){var i=n(1),o=n(7);i({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperties:n(174)})},331:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(98),n(31),n(28),n(327),n(96),n(97),n(175),n(328),n(173);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},373:function(t,e,n){"use strict";n.r(e);var i=n(30),o=(n(310),n(320),n(70),n(28),n(313)),r={name:"LayoutColumns",props:{contentMinWidth:{type:[Number,String],default:null},columnCount:{type:[Number,String],default:null},flowDirection:{type:String,default:"row"}},mixins:[o.a],computed:{flowDirectionClass:function(){return"column"===this.flowDirection?"layout-columns--flow-direction-column":"layout-columns--flow-direction-row"},cssVar:function(){return{"--layout-columns-content-min-width":this.columnCount?0:this.contentMinWidth&&Number.isInteger(+this.contentMinWidth)?this.contentMinWidth+"px":this.contentMinWidth,"--layout-columns-column-count":this.columnCount}}},render:function(t){return t("div",{class:["layout-columns",this.getGapClass("layout-columns"),this.getHorizontalAlignClass("layout-columns"),this.getVerticalAlignClass("layout-columns"),this.flowDirectionClass,this.paddingClass],style:[this.cssVar]},"row"===this.flowDirection?this.$slots.default:[t("div",{class:"".concat("layout-columns","__wrapper")},Object(i.a)(this.$slots.default.filter((function(t){return t.tag})).map((function(e){return t("div",{class:"".concat("layout-columns","__item")},[e])}))))])}},l=n(45),s=Object(l.a)(r,void 0,void 0,!1,null,null,null);e.default=s.exports},976:function(t,e,n){"use strict";n.r(e);var i=n(331),o=n(318),r=n(329),l=n(373),s=n(319),u=n(353),a=n(443),c=n(457),p=n(418),d=n(387),f=n(417),h=Object(f.a)(Object.getPrototypeOf,Object),b=n(459),g=n(419),y=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)Object(d.a)(e,Object(b.a)(t)),t=h(t);return e}:g.a,m=n(456),O=n(325),v=n(382);var j=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e},w=Object.prototype.hasOwnProperty;var C=function(t){if(!Object(O.a)(t))return j(t);var e=Object(v.a)(t),n=[];for(var i in t)("constructor"!=i||!e&&w.call(t,i))&&n.push(i);return n},z=n(336);var x=function(t){return Object(z.a)(t)?Object(m.a)(t,!0):C(t)};var S=function(t){return Object(p.a)(t,x,y)};var P=function(t,e){if(null==t)return{};var n=Object(u.a)(S(t),(function(t){return[t]}));return e=Object(a.a)(e),Object(c.a)(t,n,(function(t,n){return e(t,n[0])}))},V={components:{GreyBox:o.default,PropsPlayground:r.default,LayoutColumns:l.default},data:function(){return{propsValue:Object(i.a)({divideBy:"columnCount",contentMinWidth:200,columnCount:4,flowDirection:"row"},Object(s.b)(["padding","gapXY","verticalAlign"]))}},computed:{filteredPropsValue:function(){var t=this;return P(this.propsValue,(function(e,n){return!t.propsConfig[n].disabled}))},propsConfig:function(){return Object(i.a)({divideBy:{title:"divide by",type:"select",options:["contentMinWidth","columnCount"]},contentMinWidth:{type:"range",min:0,max:400,step:50,disabled:"columnCount"===this.propsValue.divideBy},columnCount:{type:"range",min:1,max:12,step:1,disabled:"contentMinWidth"===this.propsValue.divideBy},flowDirection:{type:"select",options:["row","column"]},verticalAlign:Object(i.a)(Object(i.a)({},s.e),{},{disabled:"column"===this.propsValue.flowDirection})},Object(s.c)(["padding","gapXY"]))}}},B=n(45),D=Object(B.a)(V,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("PropsPlayground",{attrs:{"props-config":t.propsConfig},model:{value:t.propsValue,callback:function(e){t.propsValue=e},expression:"propsValue"}},[n("GreyBox",[n("LayoutColumns",t._b({},"LayoutColumns",t.filteredPropsValue,!1),t._l(20,(function(t){return n("GreyBox",{attrs:{name:t,size:[null,"m"][t%2],width:"initial","show-size":""}})})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=D.exports}}]);